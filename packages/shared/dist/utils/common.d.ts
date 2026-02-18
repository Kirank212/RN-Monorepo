/**
 * Common utility functions
 */
export declare const formatDate: (date: Date) => string;
export declare const capitalize: (str: string) => string;
export declare const debounce: <T extends (...args: any[]) => any>(func: T, wait: number) => ((...args: Parameters<T>) => void);
export declare const throttle: <T extends (...args: any[]) => any>(func: T, limit: number) => ((...args: Parameters<T>) => void);
//# sourceMappingURL=common.d.ts.map