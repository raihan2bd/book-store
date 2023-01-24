import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    showModal: false,
    loading: false,
    isError: false,
    message: '',
  },
  reducers: {
    pendingModal(state) {
      const newState = {
        ...state,
        showModal: true,
        loading: true,
        isError: false,
        message: '',
      };
      return newState;
    },
    successModal(state, action) {
      const newState = {
        ...state,
        showModal: true,
        loading: false,
        isError: false,
        message: action.payload || 'Success',
      };

      return newState;
    },
    rejectModal(state, action) {
      const newState = {
        ...state,
        showModal: true,
        loading: false,
        isError: true,
        message: action.payload || 'Success',
      };

      return newState;
    },
    closeModal() {
      const newState = {
        showModal: false,
        loading: false,
        isError: false,
        message: '',
      };

      return newState;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
