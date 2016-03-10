var pick_up = function (mars) {
    mars.events.on("callPickUp", function(data) {
        if (data && data.sessionID) {
            mars.events.emit('message', {type: 'info', msg: "Call pick up session id: " + data.sessionID});
        }
    });

    mars.events.on('callTerminated', function (data) {
        if (data && data.sessionID && mars.sip.dialogs[data.sessionID] && mars.sip.dialogs[data.sessionID].meta
            && mars.sip.dialogs[data.sessionID].meta.status && mars.sip.dialogs[data.sessionID].meta.status === 'answered') {
            mars.sip.dialogs[data.sessionID].meta.status = 'terminated';

            bus.emit('message', {type: 'info', msg: "Call terminated session id: " + data.sessionID});
            mars.sip.bye(data.sessionID);
        }
    });
};

module.exports = pick_up;