import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiService } from './services/apiService';
import { User, ApiState } from './types/api';

interface CounterState {
  value: number;
}

interface CombinedState {
  counter: CounterState;
  users: ApiState;
}

// Async thunks
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  return await apiService.getUsers();
});

export const fetchUserDetails = createAsyncThunk('users/fetchUserDetails', async (id: number) => {
  return await apiService.getUserById(id);
});

// Counter slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 } as CounterState,
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
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    currentUser: null,
    loading: false,
    error: null,
  } as ApiState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      })
      .addCase(fetchUserDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch user details';
      });
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    users: usersSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
