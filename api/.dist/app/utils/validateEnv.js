"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
var envalid_1 = require("envalid");
exports.env = envalid_1.cleanEnv(process.env, {
    MONGO_USER: envalid_1.str(),
});
