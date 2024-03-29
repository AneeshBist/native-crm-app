import { put, select, takeLatest } from "redux-saga/effects";
import * as actions from "../reducers";
import { set } from "../../../utils/async_storage";

export function* watchEditCustomer() {
  yield takeLatest(actions.editCustomer.toString(), takeEditCustomer);
}

export function* takeEditCustomer(action) {
  console.log("Starting EDIT fetch request to API ");
  const customerID = action.payload;
  console.log(" EDIT customer request ID:", customerID);

  try {
    const fields = yield select((state) => state.customer.form.fields);
    const customers = yield select((state) => state.customer.list.customers);

    const result = customers.map((customer) => {
      if (customer.id !== customerID) return customer;
      return fields;
    });

    //yield set("CUSTOMERS_KEY", result);
    yield put(actions.editCustomerResult(result));
  } catch (error) {
    yield put(actions.editCustomerError(error.toString()));
  }
}
