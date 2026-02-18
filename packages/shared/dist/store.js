"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = exports.reset = exports.decrement = exports.increment = exports.fetchUserDetails = exports.fetchUsers = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const apiService_1 = require("./services/apiService");
// Async thunks
exports.fetchUsers = (0, toolkit_1.createAsyncThunk)('users/fetchUsers', async () => {
    return await apiService_1.apiService.getUsers();
});
exports.fetchUserDetails = (0, toolkit_1.createAsyncThunk)('users/fetchUserDetails', async (id) => {
    return await apiService_1.apiService.getUserById(id);
});
// Counter slice
const counterSlice = (0, toolkit_1.createSlice)({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment(state) {
            state.value += 1;
        },
        decrement(state) {
            state.value -= 1;
        },
        reset(state) {
            state.value = 0;
        },
    },
});
// Users slice
const usersSlice = (0, toolkit_1.createSlice)({
    name: 'users',
    initialState: {
        users: [],
        currentUser: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(exports.fetchUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(exports.fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        })
            .addCase(exports.fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch users';
        })
            .addCase(exports.fetchUserDetails.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(exports.fetchUserDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        })
            .addCase(exports.fetchUserDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch user details';
        });
    },
});
_a = counterSlice.actions, exports.increment = _a.increment, exports.decrement = _a.decrement, exports.reset = _a.reset;
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        counter: counterSlice.reducer,
        users: usersSlice.reducer,
    },
});
//# sourceMappingURL=store.js.map