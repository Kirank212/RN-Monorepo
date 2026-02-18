/**
 * Custom hook to fetch data from an API
 */
export declare const useFetch: <T>(url: string, options?: RequestInit) => {
    data: T | null;
    loading: boolean;
    error: Error | null;
};
//# sourceMappingURL=useFetch.d.ts.map