import { all } from "redux-saga/effects";
import customer from "../features/customer/saga";

export default function* rootSaga() {
  yield all([customer()]);
}
