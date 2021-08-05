"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController_1 = __importDefault(require("../../app/controllers/client/userController"));
var userValidator_1 = __importDefault(require("../../app/validators/userValidator"));
var router = express_1.Router();
router.get("/profile", userValidator_1.default.user, userController_1.default.profile);
router.put("/update", userValidator_1.default.update, userController_1.default.update);
exports.default = router;
