"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const search_1 = __importDefault(require("./search"));
exports.default = async (q = '', standardQueryParams, apiQueryParams) => {
    const data = await (0, search_1.default)(q, standardQueryParams, apiQueryParams);
    const newItems = data.items.map((each) => ({
        id: each.id,
        title: each.volumeInfo.title || '',
        subtitle: each.volumeInfo.subtitle || '',
        authors: each.volumeInfo.authors || [],
        description: each.volumeInfo.description || '',
        image: `https://books.google.com/books/publisher/content/images/frontcover/${each.id}?fife=h1000`,
        categories: each.volumeInfo.categories,
    }));
    return Object.assign(Object.assign({}, data), { items: newItems });
};
