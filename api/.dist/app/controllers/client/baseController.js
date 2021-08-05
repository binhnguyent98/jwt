"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var auto_bind_1 = __importDefault(require("auto-bind"));
var responseUtils_1 = require("../../utils/responseUtils");
var BaseController = /** @class */ (function () {
    function BaseController() {
        auto_bind_1.default(this);
    }
    BaseController.prototype.succesResponse = function (res, dataResponse) {
        return responseUtils_1.buildSuccessResponse(res, dataResponse);
    };
    BaseController.prototype.failResponse = function (res, dataResponse) {
        return responseUtils_1.buildFailResponse(res, dataResponse);
    };
    BaseController.prototype.unauthorizedResponse = function (res, dataResponse) {
        return responseUtils_1.buildUnauthorizedResponse(res, dataResponse);
    };
    BaseController.prototype.resultResponse = function (res, result) {
        if (!(result === null || result === void 0 ? void 0 : result.status)) {
            return this.failResponse(res, result);
        }
        return this.succesResponse(res, result);
    };
    return BaseController;
}());
exports.default = BaseController;
