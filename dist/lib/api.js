"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.url = void 0;
const axios_1 = __importDefault(require("axios"));
const googleApiUrl = 'https://www.googleapis.com/books/v1/volumes';
exports.url = new URL(googleApiUrl);
exports.default = (searchParams, apiParams) => {
    const url = new URL(googleApiUrl);
    url.searchParams.append('q', searchParams);
    return (0, axios_1.default)({
        method: 'get',
        url: url.href,
        params: apiParams || {},
    });
};
