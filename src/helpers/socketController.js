import SocketIOClient from "socket.io-client";
import { getToken } from "helpers/localStorage";

export class SocketController {
  constructor(thing, type = null, onData, onError) {
    let query = {
      token: getToken(),
      thing,
    };
    if (type) {
      query = {
        ...query,
        type,
      };
    }
    this.socket = new SocketIOClient(process.env.IOT_SERVER_URL, { query });
    this.onData = onData;
    this.onError = onError;
  }
  listen() {
    this.socket.on("data", data => this.onData(data));
    this.socket.on("connect_error", err => this.onError(err));
    this.socket.on("error", err => this.onError(err));
  }
  close() {
    this.socket.close();
  }
}
