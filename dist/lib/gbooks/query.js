"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parseIntoQueryString_1 = __importDefault(require("../../helpers/parseIntoQueryString"));
const api_1 = __importDefault(require("../api"));
exports.default = async (standardQueryParams, apiQueryParams) => {
    const queryString = (0, parseIntoQueryString_1.default)(standardQueryParams);
    return await (0, api_1.default)(standardQueryParams.q + '+' + queryString, apiQueryParams || {});
};
