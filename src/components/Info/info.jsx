import { InfoCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useState } from "react";
import styles from "./Info.module.scss";
const Info = ({ record }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <InfoCircleOutlined className={styles.infoIcon} onClick={showModal} />
      <Modal
        title={`${record.soyad} ${record.ad} ${record.ataAdi}`}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>E-Mail: {record.email}</p>
        <p>
          Nomre: +{record.phoneNumber.code} {record.phoneNumber.phone}
        </p>
        <p>Vezife : {record.vezife}</p>
        <p>Haqqinda : {record.qisaInfo}</p>
      </Modal>
    </>
  );
};

export default Info;
