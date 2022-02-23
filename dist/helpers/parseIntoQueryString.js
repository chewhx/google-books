"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (object) => {
    const keyValue = (key, value) => `${key}:${value}`;
    return Object.entries(object)
        .filter(([key, value]) => key !== 'q')
        .map(([key, value]) => {
        if (!value) {
            return '';
        }
        if (typeof value === 'string') {
            return keyValue(key, value);
        }
        if (Array.isArray(value)) {
            return keyValue(key, value.join(' '));
        }
    })
        .join('+');
};
