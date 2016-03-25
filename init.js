var mars = require('mars');

new (require('./lib/pick_up.js'))(mars);

mars.events.on('startWebServer', function (obj) {
    if (obj.port) {
        ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", "http://localhost:" + obj.port);
        document.body.appendChild(ifrm);
        //window.location.href = "http://localhost:" + obj.port;
    }
});

window.appExtension = mars.events;//for gui.js
window.sip = mars.sip;//for gui.js

new (require('./lib/softphone.js'))(mars);