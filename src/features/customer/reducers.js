import { PENDING, SUCCESS, ERROR, REQUESTING } from "../../utils/helpers";
import { createSlice } from "@reduxjs/toolkit";

const name = "customer";

const initialState = {
  form: {
    fields: {
      firstName: "",
      lastName: "",
      active: "",
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
  createCustomer: (state) => {
    state.create.status = REQUESTING;
  },
  createCustomerResult: (state, { payload }) => {
    state.list.customers = payload;
    state.create.status = SUCCESS;
    state.form.fields = initialState.form.fields;
    state.create = initialState.create;
  },
  createCustomerError: (state, { payload }) => {
    state.error.message = payload;
    state.create.status = ERROR;
    state.form.fields = initialState.form.fields;
  },
  editCustomer: (state) => {
    state.edit.status = REQUESTING;
  },
  editCustomerResult: (state, { payload }) => {
    state.list.customers = payload;
    state.edit.status = SUCCESS;
    state.form.fields = initialState.form.fields;
    state.edit = initialState.edit;
  },
  editCustomerStatus: (state, { payload }) => {
    state.edit = payload;
  },
  editCustomerError: (state, { payload }) => {
    state.error.message = payload;
    state.edit.status = ERROR;
    state.form.fields = initialState.form.fields;
  },

  loadCustomers: (state) => {},
  loadResult: (state, { payload }) => {
    state.list.customers = payload;
  },
  setFormField: (state, { payload }) => {
    const current = state.form.fields;
    const { field, value } = payload;
    const fields = {
      ...current,
      [field]: value,
    };
    state.form.fields = fields;
  },
  setForm: (state, { payload }) => {
    const customer = state.list.customers.find((a) => (a.id = payload));

    if (customer) {
      state.form.fields = customer;
    } else {
      state.error.message = `could not find customer with id: ${payload}`;
    }
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
  loadCustomers,
  loadResult,
  editCustomer,
  editCustomerResult,
  editCustomerStatus,
  editCustomerError,
  setFormField,
  setForm,
} = slice.actions;

export default slice.reducer;
