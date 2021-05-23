import "./src/database/conection";
import express from "express";

// const express = require('express');
import path from "path";
// const path = require('path');
import socket from "dgram";
// const { Socket } = require('dgram');
import http from "http";
import MessageControllers from "src/controllers/MessageControllers";

const app = express();
const server = http.createServer(app); //require('http').createServer(app);

const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use("/", (req, res) => {
  res.render("index.html");
});

let messages = [];

io.on("connection", (socket: any) => {
  console.log(`Socket connectado: ${socket.id}`);
  MessageControllers.index()
    .then((data) => {
      //console.log(messages);
      // console.log(data);
      socket.emit("previousMessages", data);
    })
    .catch((error) => {
      console.log({ error: error });
    });

  socket.on("sendMessage", (data: any) => {
    //console.log(data);
    const dado = {
      user: data.user,
      user_destino: data.user_destino,
      text: data.text,
    };
    try {
      MessageControllers.inserir(dado)
        .then((returno) => {
          if (returno) {
            console.log("Salvo");
          } else {
            console.log("Não Salvo");
          }
        })
        .catch((error) => {
          console.log(error);
        });
      //messages.push(data);

      socket.broadcast.emit("receivedMessage", data);
    } catch (error) {
      console.log(error.massage);
    }
  });
});

server.listen(3000, () => {
  console.log("Server online");
});
