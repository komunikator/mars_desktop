{
  "webPort": 8000,
  "audioCodec": "PCMU",
  "stunServer": "stun.sipnet.ru:3478",
  "webAuth": "disable",
  "maxCalls": 10,
  "ringingTimeout": "30",
  "serviceName": "MARS",
  "activeAccount": 0,
  "def_tts": "yandex",
  "ivona_speech": {
    "accessKey": "",
    "secretKey": "",
    "language": "ru-RU",
    "name": "Tatyana",
    "gender": "Female"
  },
  "recognize": {
    "type": "yandex",
    "options": {
      "developer_key": "",
      "model": "general"
    }
  },
  "sipAccounts": [
  ],
  "levels": {
    "[all]": "trace",
    "http": "error"
  },
  "replaceConsole": "false",
  "appenders": [
    {
      "type": "console",
      "category": [
        "console",
        "server",
        "ua",
        "call",
        "task",
        "error",
        "http"
      ]
    },
    {
      "type": "file",
      "filename": "logs/error.log",
      "maxLogSize": 1048576,
      "backups": 3,
      "category": "error"
    },
    {
      "type": "file",
      "filename": "logs/server.log",
      "maxLogSize": 1048576,
      "backups": 3,
      "category": "server"
    },
    {
      "type": "file",
      "filename": "logs/ua.log",
      "maxLogSize": 1048576,
      "backups": 10,
      "category": "ua"
    },
    {
      "type": "file",
      "filename": "logs/sip.log",
      "maxLogSize": 1048576,
      "backups": 10,
      "category": "sip"
    },
    {
      "type": "file",
      "filename": "logs/call.log",
      "maxLogSize": 1048576,
      "backups": 10,
      "category": "call"
    },
    {
      "type": "file",
      "filename": "logs/remoteClient.log",
      "maxLogSize": 1048576,
      "backups": 10,
      "category": "remoteClient"
    },
    {
      "type": "file",
      "filename": "logs/task.log",
      "maxLogSize": 1048576,
      "backups": 10,
      "category": "task"
    },
    {
      "type": "file",
      "filename": "logs/http.log",
      "maxLogSize": 1048576,
      "backups": 10,
      "category": "http"
    },
    {
      "type": "file",
      "filename": "logs/cdr.log",
      "maxLogSize": 1048576,
      "backups": 10,
      "category": "cdr"
    },
    {
      "type": "file",
      "filename": "logs/softphone.log",
      "maxLogSize": 1048576,
      "backups": 10,
      "category": "softphone"
    }
  ],
  "wwwPath": "C:\\projects\\mars_desktop2/node_modules/mars"
}