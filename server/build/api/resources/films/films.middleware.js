"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryParams = void 0;
const env_1 = __importDefault(require("@configs/env"));
const { OMDB_API_KEY, OMDB_API_URL } = env_1.default;
const queryParams = (req, res, next) => {
    // req.requestUrl = `${req.requestUrl}/?apikey=${OMDB_API_KEY}`;
    next();
};
exports.queryParams = queryParams;
