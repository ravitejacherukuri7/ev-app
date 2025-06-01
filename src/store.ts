import { configureStore } from '@reduxjs/toolkit';
import chargerReducer from './features/chargers/chargerSlice';

export const store = configureStore({
  reducer: {
    chargers: chargerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;