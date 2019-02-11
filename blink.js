var five = require("johnny-five");
var board = new five.Board({
    port:"COM4"
});
board.on("ready",function () {
   console.log("ASDRTHDHSRT");
   var led = new five.Led(13);
   led.blink(500);
});