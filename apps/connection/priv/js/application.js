class myWebsocketHandler {
  constructor() {
    this.initProtobuf();
    this.maxRetries = 5;
    this.retryCount = 0;
    this.retryDelay = 1000; // Start with 1 second delay
  }

  async initProtobuf() {
    try {
      // Load protobuf definitions
      const root = await protobuf.load("chat.proto");
      this.Chat = root.lookupType("Chat");
      this.Connect = root.lookupType("Connect");

      // Once protobuf is loaded, setup socket
      this.handleRetry();
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
      console.error('Maximum retry attempts reached. WebSocket connection failed.');
    }
  }

  setupSocket() {
    this.socket = new WebSocket("ws://localhost:4000/ws/chat");

    this.socket.addEventListener("close", () => {
      console.log("WebSocket disconnected ");
      this.handleRetry();
    });
    this.socket.addEventListener("open", () => {
      console.log("WebSocket connected successfully");
      this.sendProvision();
    });
    this.socket.addEventListener("message", async (event) => {
      try {
        const arrayBuffer = await event.data.arrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);
        const decodedMessage = this.Chat.decode(uint8Array);

        const pTag = document.createElement("p");
        pTag.innerHTML = JSON.stringify(decodedMessage);
        document.getElementById("main").append(pTag);
      } catch (error) {
        console.error("Error processing message:", error);
      }
    });
  }

  sendProvision() {
    const connect = this.Connect.create({
      uid: "zhangchao",
      password: "123456",
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
    const message = input.value;
    input.value = "";

    const connect = this.Connect.create({
      uid: "zhangchao",
      password: "123456",
    });
    const chat = this.Chat.create({
      connect: connect,
    });
    const buffer = this.Chat.encode(chat).finish();
    this.socket.send(buffer);
  }
}

(() => {
  const websocketClass = new myWebsocketHandler();

  document.getElementById("button").addEventListener("click", (event) => websocketClass.submit(event));
})();
