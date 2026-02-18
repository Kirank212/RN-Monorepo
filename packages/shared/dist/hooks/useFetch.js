"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFetch = void 0;
const react_1 = require("react");
/**
 * Custom hook to fetch data from an API
 */
const useFetch = (url, options) => {
    const [data, setData] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
                setError(null);
            }
            catch (err) {
                setError(err instanceof Error ? err : new Error('An error occurred'));
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url, options]);
    return { data, loading, error };
};
exports.useFetch = useFetch;
//# sourceMappingURL=useFetch.js.map