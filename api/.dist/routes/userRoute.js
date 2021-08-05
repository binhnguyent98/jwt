"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController_1 = __importDefault(require("@controllers/client/userController"));
var router = express_1.Router();
router.get("/profile", userController_1.default.profile);
exports.default = router;
