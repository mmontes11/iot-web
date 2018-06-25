import { IoTClient } from "@mmontes11/iot-client";

const iotClient = new IoTClient({
  url: process.env.IOT_SERVER_URL,
  basicAuthUsername: process.env.IOT_SERVER_BASIC_AUTH_USERNAME,
  basicAuthPassword: process.env.IOT_SERVER_BASIC_AUTH_PASSWORD,
  username: process.env.IOT_SERVER_USERNAME,
  password: process.env.IOT_SERVER_PASSWORD
});

export default iotClient;
