class myWebsocketHandler {
  constructor() {
    this.maxRetries = 5;
    this.retryCount = 0;
    this.retryDelay = 1000; // Start with 1 second delay
    this.config = {
      pingInterval: 30000,
      pingTimeout: 5000,
      maxReconnectAttempts: 5,
      reconnectDelay: 1000,
      debug: true,
    };

    this.state = {
      isConnected: false,
      lastPingTime: null,
      lastPongTime: null,
      missedPongs: 0,
      reconnectAttempts: 0,
    };

    this.timers = {
      ping: null,
      pong: null,
      reconnect: null,
    };
    this.init();
  }

  async init() {
    try {
      // Load protobuf definitions
      const root = await protobuf.load("chat.proto");
      this.Chat = root.lookupType("Chat");
      this.Connect = root.lookupType("Connect");
      this.Ping = root.lookupType("Ping");
      this.Pong = root.lookupType("Pong");
      this.Sync = root.lookupType("Sync");
      this.SyncAck = root.lookupType("SyncAck");

      const messageProto = await protobuf.load("message.proto");
      this.Message = messageProto.lookupType("Message");
      this.TextMessage = messageProto.lookupType("TextMessage");
      this.Response = messageProto.lookupType("Response");
      this.setupSocket();
    } catch (error) {
      console.error("Error loading protobuf:", error);
    }
  }

  handleRetry() {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      console.log(`Retry attempt ${this.retryCount} of ${this.maxRetries}`);
      setTimeout(() => this.setupSocket(), this.retryDelay);
      // Exponential backoff
      this.retryDelay *= 2;
    } else {
      console.error("Maximum retry attempts reached. WebSocket connection failed.");
    }
  }

  login(event) {
    event.preventDefault();
    const uidInput = document.getElementById("uid");
    this.uid = uidInput.value;
    const passwordInput = document.getElementById("password");
    this.password = passwordInput.value;
    console.log(`uid: ${this.uid}, password: ${this.password}`);
    this.sendProvision();
    this.startPingInterval();
    this.dispatchEvent("connected");
  }

  setupSocket() {
    this.socket = new WebSocket("ws://localhost:4000/ws/chat");

    this.socket.addEventListener("close", () => {
      console.log("WebSocket disconnected ");
      // this.handleRetry();
    });
    this.socket.addEventListener("open", () => {
      this.handleOpen();
    });
    this.socket.addEventListener("message", async (event) => this.handleMessage(event));
    this.socket.addEventListener("pong", () => this.handlePong());
  }

  async handleMessage(event) {
    try {
      const arrayBuffer = await event.data.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      const decodedMessage = this.Chat.decode(uint8Array);
      var show = JSON.stringify(decodedMessage);
      if (decodedMessage.pong) {
        this.handlePong();
      }

      if (decodedMessage.connAck) {
        this.handleConnack();
      }

      if (decodedMessage.syncAck) {
        const syncResult = await this.handleSyncAck(decodedMessage.syncAck);
        show = JSON.stringify(syncResult);
      }

      if (decodedMessage.sync) {
        show = this.handleSync(decodedMessage.sync);
      }

      const pTag = document.createElement("p");
      pTag.innerHTML = show;
      document.getElementById("main").append(pTag);
    } catch (error) {
      console.error("Error processing message:", error);
    }
  }

  handleSync(sync) {
    console.log(`Received sync message result ${sync}`);
    return sync.payload;
  }

  dispatchEvent(name, detail = {}) {
    const event = new CustomEvent(`websocket:${name}`, { detail });
    window.dispatchEvent(event);
  }

  async handleSyncAck(ack) {
    console.log(`received sync ack message`, ack);
    const decodedMessage = this.Message.decode(ack.detail);
    console.log(`received sync ack detail`, decodedMessage);
    console.log(`received response code: ${decodedMessage.response.code}, status: ${decodedMessage.response.status}`);
    return decodedMessage;
  }

  handleConnack() {
    console.log("Received chat connected message");
  }

  handleOpen() {
    console.log("WebSocket connected successfully");
    this.updateState({
      isConnected: true,
    });
    this.startPingInterval();
    this.dispatchEvent("connected");
  }

  handlePong() {
    const now = Date.now();
    console.log("Pong received");
    this.updateState({
      lastPongTime: now,
      missedPongs: 0,
    });
    this.clearPongTimeout();
    this.dispatchEvent("pong", { timestamp: now });
  }

  startPingInterval() {
    this.stopPingInterval();

    this.timers.ping = setInterval(() => {
      if (this.socket.readyState === WebSocket.OPEN) {
        const now = Date.now();
        this.sendPing();
        this.updateState({ lastPingTime: now });
        this.setPongTimeout();
        console.log("Ping sent");
        this.dispatchEvent("ping", { timestamp: now });
      }
    }, this.config.pingInterval);
  }

  setPongTimeout() {
    this.clearPongTimeout();

    this.timers.pong = setTimeout(() => {
      this.handlePongTimeout();
    }, this.config.pingTimeout);
  }

  updateState(updates) {
    this.state = { ...this.state, ...updates };
    this.dispatchEvent("stateChange", this.state);
  }

  handlePongTimeout() {
    this.updateState({
      missedPongs: this.state.missedPongs + 1,
    });

    console.log("Pong timeout");
    this.dispatchEvent("pongTimeout");

    if (this.state.missedPongs >= 3) {
      this.socket.close(1000, "Multiple pong timeouts");
    }
  }

  clearPongTimeout() {
    if (this.timers.pong) {
      clearTimeout(this.timers.pong);
      this.timers.pong = null;
    }
  }

  stopPingInterval() {
    if (this.timers.ping) {
      clearInterval(this.timers.ping);
      this.timers.ping = null;
    }
    this.clearPongTimeout();
  }

  sendPing() {
    const ping = this.Ping.create({});
    const chat = this.Chat.create({
      ping: ping,
    });
    const buffer = this.Chat.encode(chat).finish();
    this.socket.send(buffer);
  }

  sendProvision() {
    const connect = this.Connect.create({
      uid: this.uid,
      password: this.password,
    });
    const chat = this.Chat.create({
      connect: connect,
    });
    const buffer = this.Chat.encode(chat).finish();
    this.socket.send(buffer);
  }

  submit(event) {
    event.preventDefault();
    const input = document.getElementById("message");
    const txt = input.value;
    input.value = "";
    const textMessage = this.TextMessage.create({
      text: txt,
    });
    const message = this.Message.create({
      from: "tom",
      to: "marry",
      text: textMessage,
    });
    const messageBuffer = this.Message.encode(message).finish();

    const msg = this.Sync.create({
      payload: messageBuffer,
    });
    const chat = this.Chat.create({
      sync: msg,
    });
    const buffer = this.Chat.encode(chat).finish();
    this.socket.send(buffer);
  }
}

const websocketClass = new myWebsocketHandler();

window.addEventListener("websocket:connected", () => {
  console.log("Connected to server");
});

window.addEventListener("websocket:disconnected", (event) => {
  console.log("Disconnected:", event.detail);
});

window.addEventListener("websocket:ping", (event) => {
  console.log("Ping sent:", event.detail);
});

window.addEventListener("websocket:pong", (event) => {
  console.log("Pong received:", event.detail);
});

document.getElementById("button").addEventListener("click", (event) => websocketClass.submit(event));

document.getElementById("login-button").addEventListener("click", (event) => websocketClass.login(event));
