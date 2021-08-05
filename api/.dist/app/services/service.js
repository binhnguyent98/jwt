"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.successResponse = function (message, data) {
        return {
            status: true,
            message: message,
            data: data
        };
    };
    Service.prototype.failResponse = function (message, data) {
        return {
            status: false,
            message: message,
            data: data
        };
    };
    return Service;
}());
exports.default = Service;
