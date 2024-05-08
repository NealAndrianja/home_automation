import io from "socket.io-client";

const topics = [
  "home/esp32/voltage",
  "home/esp32/current",
  "home/esp32/power",
  "home/esp32/energy",
  "home/esp32/frequency",
  "home/esp32/pf",
];
class SocketInstance {
  constructor() {
    this.socket = io.connect("http://192.168.1.25:3001");
  }

  connectAll = () => {
    topics.forEach((topic) =>
      this.socket.on(topic, (data) => {
        // console.log(`Message received: ${data} from ${topic}`);
      })
    );
  }

  emitMessage = (topic, message) =>{
    this.socket.emit(topic, message);
    console.log(message)
  }
}

const socket = new SocketInstance();
export default socket;
