import { put, delay, takeLatest } from "redux-saga/effects";
import * as actions from "../reducers";
import { get } from "../../../utils/async_storage";

export function* watchLoadCustomers() {
  yield takeLatest(actions.loadCustomers.toString(), takeLoadCustomers);
}

export function* takeLoadCustomers() {
  console.log("ASYNC Storage: LOAD");
  try {
    const customers = yield get("CUSTOMERS_KEY");

    yield delay(500);

    yield put(actions.loadResult(customers));
  } catch (error) {
    yield put(actions.loadResult([]));
  }
}
