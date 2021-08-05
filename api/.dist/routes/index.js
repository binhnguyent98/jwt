"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userRoute_1 = __importDefault(require("./api/userRoute"));
var authRoute_1 = __importDefault(require("./api/authRoute"));
var authenticationMiddleware_1 = __importDefault(require("../app/middleware/authenticationMiddleware"));
var router = express_1.Router();
router.use(authRoute_1.default);
router.use("/users", authenticationMiddleware_1.default, userRoute_1.default);
exports.default = router;
