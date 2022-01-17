"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RequestParams_1 = __importDefault(require("./models/RequestParams"));
const options_1 = __importDefault(require("./utils/options"));
const api_1 = __importDefault(require("./utils/api"));
const googleBooks = (_query, _options) => __awaiter(void 0, void 0, void 0, function* () {
    let queryString = "";
    let requestParams = new RequestParams_1.default({ q: "" });
    let method = "GET";
    if (typeof _query === "string") {
        // process the options and add to query
        queryString += _query;
        if (_options) {
            queryString += (0, options_1.default)(_options);
        }
        requestParams = new RequestParams_1.default(Object.assign({ q: queryString }, _options));
    }
    if (typeof _query === "object") {
        queryString += (0, options_1.default)(_query);
        requestParams = new RequestParams_1.default(Object.assign({ q: queryString }, _query));
    }
    const { data } = yield (0, api_1.default)({ method, params: requestParams });
    return data;
});
exports.default = googleBooks;
googleBooks("james clear", { maxResults: 3 })
    .then((res) => console.log(res.items))
    .catch((e) => console.error(e));
