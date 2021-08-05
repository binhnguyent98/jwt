"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildUnauthorizedResponse = exports.buildFailResponse = exports.buildSuccessResponse = exports.responseData = void 0;
var http_status_codes_1 = __importDefault(require("http-status-codes"));
var responseData = function (res, data) {
    var newData = {};
    var statusCode = data.status_code || http_status_codes_1.default.BAD_REQUEST;
    newData.status_code = statusCode;
    newData.message = data.message || "";
    newData.data = data.data || {};
    return res.status(statusCode).send(newData);
};
exports.responseData = responseData;
var buildSuccessResponse = function (res, dataResponse) {
    var newResponse = dataResponse;
    newResponse.status_code = http_status_codes_1.default.OK;
    return exports.responseData(res, newResponse);
};
exports.buildSuccessResponse = buildSuccessResponse;
var buildFailResponse = function (res, dataResponse) {
    var newResponse = dataResponse;
    newResponse.status_code = http_status_codes_1.default.BAD_REQUEST;
    return exports.responseData(res, newResponse);
};
exports.buildFailResponse = buildFailResponse;
var buildUnauthorizedResponse = function (res, dataResponse) {
    var newResponse = dataResponse;
    newResponse.status_code = http_status_codes_1.default.UNAUTHORIZED;
    newResponse.message = (dataResponse === null || dataResponse === void 0 ? void 0 : dataResponse.message) || "Unauthorized";
    return exports.responseData(res, newResponse);
};
exports.buildUnauthorizedResponse = buildUnauthorizedResponse;
