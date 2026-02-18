import { User } from '../types/api';

const API_BASE = 'https://jsonplaceholder.typicode.com';

export const apiService = {
  async getUsers(): Promise<User[]> {
    try {
      const response = await fetch(`${API_BASE}/users`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },

  async getUserById(id: number): Promise<User> {
    try {
      const response = await fetch(`${API_BASE}/users/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching user ${id}:`, error);
      throw error;
    }
  },
};
