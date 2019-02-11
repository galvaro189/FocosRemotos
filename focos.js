var express = require("express");
var app = express();
var io = require("socket.io")(app.listen(3000));
var five = require("johnny-five");
var board = new five.Board({
    port:"COM4"
});
board.on("ready",function () {
    console.log("Placa lista");
    var led = new five.Led(13);
    var led2 = new five.Led(12);
    io.sockets.on('connection',function (socket) {
        socket.on('conmutar',function () {
            console.log("Envio de mensaje toggle");
            led.toggle();
        });
    });
});
