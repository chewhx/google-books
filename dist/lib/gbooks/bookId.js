"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../api");
const axios_1 = __importDefault(require("axios"));
exports.default = async (bookId, dataType) => {
    let { data } = await (0, axios_1.default)({ method: 'get', url: `${api_1.url.href}/${bookId}` });
    if (dataType === 'simple') {
        const newData = {
            id: data.id,
            title: data.volumeInfo.title || '',
            subtitle: data.volumeInfo.subtitle || '',
            authors: data.volumeInfo.authors || [],
            description: data.volumeInfo.description || '',
            image: `https://books.google.com/books/publisher/content/images/frontcover/${data.id}?fife=h1000`,
            categories: data.volumeInfo.categories,
        };
        data = newData;
    }
    return data;
};
