import { PENDING, SUCCESS } from "../../utils/helpers";
import { createSlice } from "@reduxjs/toolkit";

const name = "customer";

const initialState = {
  form: {
    fields: {
      firstName: "",
      lastName: "",
      active: false,
      region: "",
    },
  },
  list: {
    status: PENDING,
    customers: [],
  },
  create: {
    status: PENDING,
  },
  edit: {
    status: PENDING,
  },
  error: {
    message: "",
  },
};

const reducers = {
  createCustomer: (state) => {},
  createCustomerResult: (state, { payload }) => {
    state.create.status = SUCCESS;
    state.list.customers = payload;
    state.form.fields = initialState.form.fields;
    state.create = initialState.create;
  },
  createCustomerError: (state, { payload }) => {},
  editCustomer: (state, { payload }) => {},
  setFormField: (state, { payload }) => {
    const current = state.form.fields;
    const { field, value } = payload;
    const fields = {
      ...current,
      [field]: value,
    };
    state.form.fields = fields;
  },
};

const slice = createSlice({
  name,
  initialState,
  reducers,
});

export const {
  createCustomer,
  createCustomerError,
  createCustomerResult,
  setFormField,
} = slice.actions;

export default slice.reducer;
