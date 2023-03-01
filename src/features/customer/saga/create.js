import { put, delay, select, takeLatest } from "redux-saga/effects";
import * as actions from "../reducers";

export function* watchCreateCustomer() {
  yield takeLatest(actions.createCustomer.toString(), takeCreateCustomer);
}

export function* takeCreateCustomer() {
  console.log("starting fetch request to API");
  try {
    const fields = yield select((state) => state.customer.form.fields);
    const customers = yield select((state) => state.customer.list.customers);

    const customer = {
      id: customers.length + 1,
      ...fields,
    };

    yield delay(500);

    const results = [customer, ...customers];

    yield put(actions.createCustomerResult(results));
  } catch (error) {
    yield put(actions.createCustomerError(error.toString()));
  }
}
