"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const envConfig = {
    PORT: Number(process.env.PORT),
    OMDB_API_URL: process.env.OMDB_API_URL,
    OMDB_API_KEY: process.env.OMD_API_KEY
};
exports.default = envConfig;
