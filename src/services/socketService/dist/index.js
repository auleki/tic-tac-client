"use strict";
exports.__esModule = true;
var socket_io_client_1 = require("socket.io-client");
var SocketService = /** @class */ (function () {
    function SocketService() {
        this.socket = null;
    }
    /* Might have to remove the <DefaultEventsMap> Need to check their use first  */
    SocketService.prototype.connect = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.socket = socket_io_client_1.io(url);
            if (!_this.socket)
                return reject();
            _this.socket.on('connect', function () {
                resolve(_this.socket);
            });
            _this.socket.on('connect_error', function (err) {
                console.log("connection error", err);
                reject(err);
            });
        });
    };
    return SocketService;
}());
exports["default"] = new SocketService();
