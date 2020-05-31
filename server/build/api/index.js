"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const films_routes_1 = __importDefault(require("@films/films.routes"));
const api = (router) => {
    router.use('/api/films', films_routes_1.default);
    return router;
};
exports.api = api;
