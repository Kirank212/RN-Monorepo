"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiService = void 0;
const API_BASE = 'https://jsonplaceholder.typicode.com';
exports.apiService = {
    async getUsers() {
        try {
            const response = await fetch(`${API_BASE}/users`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        }
        catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    },
    async getUserById(id) {
        try {
            const response = await fetch(`${API_BASE}/users/${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        }
        catch (error) {
            console.error(`Error fetching user ${id}:`, error);
            throw error;
        }
    },
};
//# sourceMappingURL=apiService.js.map