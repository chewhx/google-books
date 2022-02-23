"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parseIntoQueryString_1 = __importDefault(require("../../helpers/parseIntoQueryString"));
const api_1 = __importDefault(require("../api"));
exports.default = async (q = '', standardQueryParams, apiQueryParams) => {
    if (!standardQueryParams) {
        standardQueryParams = {};
    }
    const queryString = (0, parseIntoQueryString_1.default)(standardQueryParams) || '';
    const { data } = await (0, api_1.default)(q + '+' + queryString, apiQueryParams || {});
    return data;
};
