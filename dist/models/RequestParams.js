"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RequestParams {
    constructor(params) {
        this.q = params.q || "";
        this.download = params.download || undefined;
        this.filter = params.filter || undefined;
        this.langRestrict = params.langRestrict || "en";
        this.maxResults = params.maxResults || 10;
        this.orderBy = params.orderBy || "relevance";
        this.printType = params.printType || "all";
        this.projection = params.projection || "lite";
        this.startIndex = params.startIndex || 0;
        this.volumeId = params.volumeId || undefined;
    }
}
exports.default = RequestParams;
