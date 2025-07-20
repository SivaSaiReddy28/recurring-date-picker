import { create } from "zustand";


export const useRecurrenceStore = create((set) => ({
  recurrence: {
    frequency: "daily", // daily, weekly, monthly, yearly
    interval: 1,
    daysOfWeek: [],
    pattern: null,
    startDate: null,
    endDate: null,
  },
  setRecurrence: (updates) =>
    set((state) => ({
      recurrence: { ...state.recurrence, ...updates },
    })),
}));
