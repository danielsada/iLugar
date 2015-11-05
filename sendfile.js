var socket = io();
$("#send").click(function(e){
    var paquete = {compuertas:$("#c").val(),
                   piso:$("#p").val(),
                   area:$("#a").val(),
                   total:$("#t").val(),}
    socket.emit("arduino-signal", paquete);
});