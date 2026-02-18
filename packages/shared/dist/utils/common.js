"use strict";
/**
 * Common utility functions
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = exports.debounce = exports.capitalize = exports.formatDate = void 0;
const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};
exports.formatDate = formatDate;
const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
exports.capitalize = capitalize;
const debounce = (func, wait) => {
    let timeout = null;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            func(...args);
        };
        if (timeout)
            clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};
exports.debounce = debounce;
const throttle = (func, limit) => {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};
exports.throttle = throttle;
//# sourceMappingURL=common.js.map