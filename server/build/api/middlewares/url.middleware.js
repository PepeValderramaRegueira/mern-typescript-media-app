"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveApiKeyInBaseUrl = exports.saveBaseUrlInRequest = void 0;
const saveBaseUrlInRequest = (url) => {
    return (req, res, next) => {
        req.requestUrl.push(url);
        next();
    };
};
exports.saveBaseUrlInRequest = saveBaseUrlInRequest;
const saveApiKeyInBaseUrl = (apiKeyQueryName, apiKeyValue) => {
    return (req, res, next) => {
        req.requestUrl.push(`?${apiKeyQueryName}=${apiKeyValue}`);
        next();
    };
};
exports.saveApiKeyInBaseUrl = saveApiKeyInBaseUrl;
