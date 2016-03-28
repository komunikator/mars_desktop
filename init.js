try {
    var mars = require('mars');

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