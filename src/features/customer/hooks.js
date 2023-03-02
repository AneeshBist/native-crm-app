import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./reducers";
import { PENDING } from "../../utils/helpers";

export const useUpdateFields = (customerID = null) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.customer.edit.status);
  const fields = useSelector((state) => state.customer.form.fields);
  useEffect(() => {
    if (customerID && status === PENDING) {
      dispatch(actions.setForm(customerID));
    }
  }, [customerID, status]);

  return {
    fields,
    setFormField: (field, value) => {
      console.log(`Updating field ${field} to ${value}`);
      return dispatch(actions.setFormField({ field, value }));
    },
  };
};

export const useCreateCustomer = () => {
  const dispatch = useDispatch();

  return {
    onSubmit: () => {
      console.log("Dispatch Action : CREATE_CUSTOMER");
      dispatch(actions.createCustomer());
    },
  };
};

export const useCreateCustomerStatus = () => {
  return useSelector((state) => state.customer.create.status);
};

export const useCustomerList = (customerId = null) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.loadCustomers());
  }, [dispatch]);
  return useSelector((state) => state.customer.list.customers);
};

export const useEditCustomer = (customerID) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.customer.edit.status);
  return {
    status,
    onSubmit: () => {
      console.log("Dispatch action: EDIT_CUSTOMER:", customerID);
      dispatch(actions.editCustomer(customerID));
    },
  };
};
