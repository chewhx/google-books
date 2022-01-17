"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const options = (_options) => {
    let queryString = "";
    if (_options.title) {
        queryString += ` intitle:${_options.title}`;
    }
    if (_options.author) {
        if (Array.isArray(_options.author)) {
            queryString += ` inauthor:${_options.author.join(",")}`;
        }
        if (typeof _options.author === "string") {
            queryString += ` inauthor:${_options.author}`;
        }
    }
    if (_options.publisher) {
        queryString += ` inpublisher:${_options.publisher}`;
    }
    if (_options.subject) {
        queryString += ` subject:${_options.subject}`;
    }
    if (_options.isbn) {
        queryString += ` isbn:${_options.isbn}`;
    }
    if (_options.lccn) {
        queryString += `  lccn:${_options.lccn}`;
    }
    if (_options.oclc) {
        queryString += `+oclc:${_options.oclc}`;
    }
    return queryString;
};
exports.default = options;
