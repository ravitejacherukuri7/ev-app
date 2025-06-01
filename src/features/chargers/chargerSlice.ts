import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Charger } from './types';
import { RootState } from '../../store';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'chargers';

const loadFromLocalStorage = (): Charger[] => {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch (error) {
    console.error('Failed to load chargers from localStorage', error);
  }
  return [];
};

const initialChargers = loadFromLocalStorage();

const saveToLocalStorage = (chargers: Charger[]) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(chargers));
  } catch (error) {
    console.error('Failed to save chargers to localStorage', error);
  }
};

interface ChargersState {
  chargers: Charger[];
  loading: boolean;
  error: string | null;
}

const initialState: ChargersState = {
  chargers: initialChargers,
  loading: false,
  error: null,
};

const chargerSlice = createSlice({
  name: 'chargers',
  initialState,
  reducers: {
    addCharger: (state, action: PayloadAction<{ name: string }>) => {
      const newCharger: Charger = {
        id: uuidv4(),
        name: action.payload.name,
        status: 'offline',
      };
      state.chargers.push(newCharger);
      saveToLocalStorage(state.chargers);
    },
    removeCharger: (state, action: PayloadAction<string>) => {
      state.chargers = state.chargers.filter(c => c.id !== action.payload);
      saveToLocalStorage(state.chargers);
    },
    updateChargerStatus: (
      state,
      action: PayloadAction<{ id: string; status: Charger['status'] }>
    ) => {
      const charger = state.chargers.find(c => c.id === action.payload.id);
      if (charger) {
        charger.status = action.payload.status;
        saveToLocalStorage(state.chargers);
      }
    },
    resetAll: (state) => {
      
      state.chargers = [...initialChargers];
      saveToLocalStorage(state.chargers);
    },
    removeAll: (state) => {
      state.chargers = [];
      saveToLocalStorage(state.chargers);
    },
  },
});

export const {
  addCharger,
  removeCharger,
  updateChargerStatus,
  resetAll,
  removeAll,
} = chargerSlice.actions;

export const selectChargers = (state: RootState) => state.chargers.chargers;

export default chargerSlice.reducer;