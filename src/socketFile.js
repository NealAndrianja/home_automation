import io from "socket.io-client";

const topics = [
  "prise/5678/voltage",
  "prise/5678/current",
  "prise/5678/power",
  "prise/5678/energy",
  "prise/5678/frequency",
  "prise/5678/pf",
];
class SocketInstance {
  constructor() {
    this.socket = io.connect("http://192.168.1.198:3001");
  }

  // connectAll = () => {
  //   topics.forEach((topic) =>
  //     this.socket.on(topic, (data) => {
        
  //     })
  //   );
  // }

  emitMessage = (topic, message) =>{
    this.socket.emit(topic, message);
    console.log(message)
  }

  listenMessage = (topic, callback) =>{
    this.socket.on(topic, (data) => {
      callback(data);
    });
  }
}

const socket = new SocketInstance();
export default socket;
