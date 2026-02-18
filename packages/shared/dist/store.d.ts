import { User, ApiState } from './types/api';
interface CounterState {
    value: number;
}
export declare const fetchUsers: import("@reduxjs/toolkit").AsyncThunk<User[], void, import("@reduxjs/toolkit").AsyncThunkConfig>;
export declare const fetchUserDetails: import("@reduxjs/toolkit").AsyncThunk<User, number, import("@reduxjs/toolkit").AsyncThunkConfig>;
export declare const increment: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"counter/increment">, decrement: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"counter/decrement">, reset: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"counter/reset">;
export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    counter: CounterState;
    users: ApiState;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        counter: CounterState;
        users: ApiState;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export {};
//# sourceMappingURL=store.d.ts.map