"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_validator_1 = require("express-validator");
var http_status_codes_1 = __importDefault(require("http-status-codes"));
var responseUtils_1 = require("../utils/responseUtils");
exports.default = (function (req, res, next) {
    var validationError = express_validator_1.validationResult(req);
    if (!validationError.isEmpty()) {
        var errors = validationError.array();
        return responseUtils_1.responseData(res, {
            status_code: http_status_codes_1.default.BAD_REQUEST,
            message: "bad request",
            data: { errors: errors }
        });
    }
    next();
});
