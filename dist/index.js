"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.simple = exports.query = exports.search = void 0;
const query_1 = __importDefault(require("./lib/gbooks/query"));
exports.query = query_1.default;
const search_1 = __importDefault(require("./lib/gbooks/search"));
exports.search = search_1.default;
const simple_1 = __importDefault(require("./lib/gbooks/simple"));
exports.simple = simple_1.default;
