"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("../app"));
var env_config_1 = __importDefault(require("./../configs/env.config"));
var PORT = env_config_1.default.PORT;
app_1.default.listen(PORT, function () {
    console.log("Server listening on port:", PORT);
});
