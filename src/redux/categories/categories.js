import { createReducer, createAction } from '@reduxjs/toolkit';

export const CHECK_STATUS = createAction('categories/check_status');

const initialState = {
  status: '',
};

const categoriesReducer = createReducer(initialState, (builder) => {
  builder.addCase(CHECK_STATUS, (state) => {
    const nwState = { ...state, status: 'Under Constraction' };

    return nwState;
  });
  builder.addDefaultCase((state) => state);
});

export default categoriesReducer;
