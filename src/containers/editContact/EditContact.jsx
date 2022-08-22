import React from "react";
import { useParams } from "react-router-dom";
const EditContact = () => {
  const { userId } = useParams();

  return <div>EditContact{userId}</div>;
};

export default EditContact;
