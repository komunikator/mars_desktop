try {
    var bus = require('mars/lib/system/bus');
	bus.config.set("wwwPath", process.cwd() + '/' + 'node_modules/mars');
        bus.config.save();

    var mars = require('mars');
    require('./lib/pick_up.js')(mars);
    require('./lib/softphone.js')(mars);

    mars.events.on('startWebServer', function (obj) {
        if (obj.port) {
            ifrm = document.createElement("iframe");
            ifrm.setAttribute("src", "http://localhost:" + obj.port);
            document.body.appendChild(ifrm);

            ifrm.addEventListener('load', function () {
                document.getElementById("preloader").style.display = "none";
            });
            //window.location.href = "http://localhost:" + obj.port;
        }
    });
} catch (err) {
    console.log(err);
}