import { DeleteOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useState } from "react";
import styles from "./Delete.module.scss";
import { useContacts } from "../../context";
const Delete = ({ id }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { dispatch } = useContacts();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    deleteItem(id);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const deleteItem = (id) => {
    dispatch({
      type: "DELETE_CONTACT",
      payload: id,
    });
  };
  return (
    <>
      <DeleteOutlined className={styles.deleteIcon} onClick={showModal} />
      <Modal
        title={`Tesdiq`}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Silmek istediyinize eminsinizmi?</p>
      </Modal>
    </>
  );
};
export default Delete;
