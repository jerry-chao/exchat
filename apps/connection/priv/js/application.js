class myWebsocketHandler {
  constructor() {
    this.initProtobuf();
  }

  async initProtobuf() {
    try {
      // Load protobuf definitions
      const root = await protobuf.load("chat.proto");
      this.Chat = root.lookupType("Chat");
      this.Connect = root.lookupType("Connect");

      // Once protobuf is loaded, setup socket
      this.setupSocket();
    } catch (error) {
      console.error("Error loading protobuf:", error);
    }
  }

  setupSocket() {
    this.socket = new WebSocket("ws://localhost:4000/ws/chat");

    this.socket.addEventListener("message", (event) => {
      const pTag = document.createElement("p");
      pTag.innerHTML = event.data;

      document.getElementById("main").append(pTag);
    });

    this.socket.addEventListener("close", () => {
      this.setupSocket();
    });
  }

  submit(event) {
    event.preventDefault();
    const input = document.getElementById("message");
    const message = input.value;
    input.value = "";

    this.socket.send(
      JSON.stringify({
        data: { message: message },
      }),
    );
  }
}

(() => {
  const websocketClass = new myWebsocketHandler();

  document.getElementById("button").addEventListener("click", (event) => websocketClass.submit(event));
})();
