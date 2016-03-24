var softphone = function (cntx) {
    var e = cntx.events;
    var dialogs = cntx.sip.dialogs;
    new (require('./webAudio')).init(e, dialogs);
};

module.exports = softphone;