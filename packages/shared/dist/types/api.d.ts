export interface User {
    id: number;
    name: string;
    email: string;
    username: string;
    phone: string;
    website: string;
    company?: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
    address?: {
        street: string;
        city: string;
        zipcode: string;
    };
}
export interface ApiState {
    users: User[];
    currentUser: User | null;
    loading: boolean;
    error: string | null;
}
//# sourceMappingURL=api.d.ts.map