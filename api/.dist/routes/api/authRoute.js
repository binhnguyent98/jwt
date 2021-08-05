"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authController_1 = __importDefault(require("../../app/controllers/client/authController"));
var userValidator_1 = __importDefault(require("../../app/validators/userValidator"));
var router = express_1.Router();
router.post("/register", userValidator_1.default.user, authController_1.default.register);
router.post("/login", userValidator_1.default.user, authController_1.default.login);
exports.default = router;
