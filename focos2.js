var express = require("express");
var app = express();
var io = require("socket.io")(app.listen(3000));
var five = require("johnny-five");
var board = new five.Board({
    port: "COM4"
});

function hazAlert() {

}

board.on("ready", function () {
    console.log("Placa lista");
    var led = new five.Led(13);
    var led2 = new five.Led(11);
    io.sockets.on('connection', function (socket) {
        socket.on('foco1-on', function () {
            console.log("Foco 1 encendido");
            led.toggle();
        });
        socket.on('foco2-on', function () {
            console.log("Foco 2 encendido");
            led2.toggle();
        });
        socket.on('foco1-off', function () {
            console.log("Foco 1 apagado");
            led.toggle();
        });
        socket.on('foco2-off', function () {
            console.log("Foco 2 apagado");
            led2.toggle();
        });
        socket.on('fade', function () {
            console.log("Fade");
            led2.fade({
                easing: "outSine",
                duration: 15000,
                cuePoints: [0, 0.2, 0.4, 0.6, 0.8, 1],
                keyFrames: [0, 250, 0],
            });
        });
        socket.on('sos', function () {
            console.log("sos");
            led.on();
            setTimeout(function () {
                led.off();
                setTimeout(function () {
                    led.on();
                    setTimeout(function () {
                        led.off();
                        setTimeout(function () {
                            led.on();
                            setTimeout(function () {
                                led.off();
                                setTimeout(function () {
                                    led2.toggle();
                                    setTimeout(function () {
                                        led2.toggle();
                                        setTimeout(function () {
                                            led2.toggle();
                                            setTimeout(function () {
                                                led2.toggle();
                                                setTimeout(function () {
                                                    led2.toggle();
                                                    setTimeout(function () {
                                                        led2.toggle();
                                                        setTimeout(function () {
                                                            led.toggle();
                                                            setTimeout(function () {
                                                                led.toggle();
                                                                setTimeout(function () {
                                                                    led.toggle();
                                                                    setTimeout(function () {
                                                                        led.toggle();
                                                                        setTimeout(function () {
                                                                            led.toggle();
                                                                            setTimeout(function () {
                                                                                led.toggle();
                                                                            }, 1000);
                                                                        }, 1000);
                                                                    }, 1000);
                                                                }, 1000);
                                                            }, 1000);
                                                        }, 1000);
                                                    }, 2000);
                                                }, 2000);
                                            }, 2000);
                                        }, 2000);
                                    }, 2000);
                                }, 2000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000)
        });
    });
});
