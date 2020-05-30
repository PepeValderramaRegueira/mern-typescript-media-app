"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var envConfig = {
    PORT: Number(process.env.PORT),
    OMDB_API_URL: process.env.OMDB_API_URL
};
exports.default = envConfig;
