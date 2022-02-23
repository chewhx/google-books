"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
exports.default = (searchParams, apiParams) => {
    const url = new URL('https://www.googleapis.com/books/v1/volumes');
    url.searchParams.append('q', searchParams);
    return (0, axios_1.default)({
        method: 'get',
        url: url.href,
        params: apiParams || {},
    });
};
