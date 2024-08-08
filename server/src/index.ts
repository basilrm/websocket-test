import express from "express";
import cors from "cors";
import http from "http";
import { WebSocketServer } from "ws";

const app = express();
const server = http.createServer();
const wsServer = new WebSocketServer({ server });
const PORT = 8000;
const data = "test data";
app.use(cors());

wsServer.on("connection", (connection, request) => {
  console.log("client connected");
  connection.send(data);
});

server.listen(PORT, () => console.log("SERVER is running")); // if you want to use websocket you have to use server.listen() not app.listen()
 