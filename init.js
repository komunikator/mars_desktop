var mars = require('mars');

mars.events.request('startWebServer', {}, function (err, obj) {
    window.location.href = "http://localhost:8000/";
});