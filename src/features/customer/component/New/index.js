import React from "react";
import { useNewCustomer, useCreateCustomerStatus } from "../../hooks";
import Form from "../Form";

const New = () => {
  const { onPress } = useNewCustomer();
  const status = useCreateCustomerStatus();

  return <Form onSubmit={onPress} status={status} />;
};

export default New;
