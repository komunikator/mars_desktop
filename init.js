var mars = require('mars');

mars.events.on('startWebServer', function (obj) {
    if (obj.port) {
        window.location.href = "http://localhost:" + obj.port;
    }
});