import SocketIOClient from "socket.io-client";
import { getToken } from "helpers/localStorage";

export class SocketController {
  constructor(thing, onData) {
    const query = {
      token: getToken(),
      thing,
    };
    this.socket = new SocketIOClient(process.env.IOT_SERVER_URL, { query });
    this.onData = onData;
  }
  listen() {
    this.socket.on("data", data => this.onData(data));
  }
  close() {
    this.socket.close();
  }
}
