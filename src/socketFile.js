import io from "socket.io-client";

export default class SocketInstance {
  constructor() {
    this.socket = io.connect("http://192.168.1.25:3001");
  }

  connect(topic) {
    
  }
}
