"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_validator_1 = require("express-validator");
var validator_1 = __importDefault(require("./validator"));
exports.default = {
    user: [
        express_validator_1.body('email')
            .not()
            .isEmpty().withMessage('No empty')
            .isEmail().withMessage('Email no valid'),
        express_validator_1.body('password')
            .not()
            .isEmpty().withMessage('Password not empty')
            .isLength({ min: 6, max: 20 }),
        validator_1.default
    ],
    update: [
        express_validator_1.body('email')
            .not()
            .isEmpty().withMessage('No empty')
            .isEmail().withMessage('Email no valid'),
        validator_1.default
    ]
};
