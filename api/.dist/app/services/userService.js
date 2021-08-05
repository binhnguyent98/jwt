"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var userRepository_1 = __importDefault(require("../repositories/userRepository"));
var service_1 = __importDefault(require("./service"));
var bcrypt = __importStar(require("bcrypt"));
var jwt = __importStar(require("jsonwebtoken"));
var common_1 = require("../constants/common");
var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserService.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, userRepository_1.default.find()];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, this.successResponse("List users", users)];
                }
            });
        });
    };
    UserService.prototype.createUser = function (userData) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser, newUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, userRepository_1.default.findOne({ email: userData.email })];
                    case 1:
                        currentUser = _a.sent();
                        if (!currentUser) return [3 /*break*/, 2];
                        return [2 /*return*/, this.failResponse("Email existed !", [])];
                    case 2: return [4 /*yield*/, userRepository_1.default.createUser(userData)];
                    case 3:
                        newUser = _a.sent();
                        return [2 /*return*/, this.successResponse("Register success")];
                }
            });
        });
    };
    UserService.prototype.createToken = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var expiresIn, secret, dataStoredInToken;
            return __generator(this, function (_a) {
                expiresIn = common_1.COMMON.expired;
                secret = process.env.JWT_SECRET;
                dataStoredInToken = {
                    id: user._id,
                    email: user.email
                };
                return [2 /*return*/, {
                        expiresIn: expiresIn,
                        token: jwt.sign(dataStoredInToken, secret, { expiresIn: expiresIn }),
                    }];
            });
        });
    };
    UserService.prototype.login = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var user, comparePassword, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, userRepository_1.default.findOne({ email: email })];
                    case 1:
                        user = _a.sent();
                        if (!user) return [3 /*break*/, 5];
                        return [4 /*yield*/, bcrypt.compare(password, user.password)];
                    case 2:
                        comparePassword = _a.sent();
                        if (!comparePassword) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.createToken(user)];
                    case 3:
                        token = _a.sent();
                        return [2 /*return*/, this.successResponse("Login success", token)];
                    case 4: return [2 /*return*/, this.failResponse("Incorrect password")];
                    case 5: return [2 /*return*/, this.failResponse("Email does not exist !")];
                }
            });
        });
    };
    UserService.prototype.findId = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, userRepository_1.default.findOne({ _id: id })];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, this.successResponse("Profile", user)];
                }
            });
        });
    };
    UserService.prototype.update = function (id, userData) {
        return __awaiter(this, void 0, void 0, function () {
            var update;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        delete userData.password;
                        return [4 /*yield*/, userRepository_1.default.update(id, userData)];
                    case 1:
                        update = _a.sent();
                        if (update.ok) {
                            return [2 /*return*/, this.successResponse("Update successly")];
                        }
                        else {
                            return [2 /*return*/, this.failResponse("Update fail !")];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return UserService;
}(service_1.default));
exports.default = new UserService();
