import React, { useEffect, useState } from "react";
import styles from "./EditContact.module.scss";
import { Form, Button, Checkbox, Input, Select, Radio, Modal } from "antd";
import { useContacts } from "../../context";
import { toast } from "react-toastify";
import CountryPhoneInput, { ConfigProvider } from "antd-country-phone-input";
import en from "world_countries_lists/data/countries/en/world.json";
import { useNavigate, useParams } from "react-router-dom";
const EditContact = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { userId } = useParams();
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { state, dispatch } = useContacts();
  useEffect(() => {
    const user = state.find((item) => item.id === parseInt(userId));
    form.setFieldsValue({
      ad: user.ad,
      ataAdi: user.ataAdi,
      cins: user.cins,
      email: user.email,
      phoneNumber: {
        phone: user.phoneNumber.phone,
        code: user.phoneNumber.code,
        short: user.phoneNumber.short,
      },
      qisaInfo: user.qisaInfo,
      soyad: user.soyad,
      vezife: user.vezife,
      raziliq: user.raziliq,
    });
  }, [form, state, userId]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    const values = form.getFieldsValue();
    const newValues = {
      id: parseInt(userId),
      key: parseInt(userId),
      ...values,
    };
    dispatch({
      type: "UPDATE_CONTACT",
      payload: newValues,
    });
    navigate("/");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values) => {
    const user = state.find((item) => item.id === parseInt(userId));
    const checkValues = {
      id: parseInt(userId),
      key: parseInt(userId),
      ...values,
    };
    if (!values.phoneNumber.phone) {
      return toast.warning("Nomrenizi qeyd edin zehmet olmasa");
    }
    if (JSON.stringify(user) === JSON.stringify(checkValues)) {
      return toast.warning("Deyishiklik etmelisiniz");
    }
    showModal();
  };

  const onChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <div className={styles.editContainer}>
      <Form labelCol={{ span: 3 }} onFinish={onFinish} form={form}>
        <Form.Item
          name="ad"
          label="Ad"
          rules={[
            {
              required: true,
              message: "Adinizi qeyd edin zehmet olmasa",
            },
            {
              whitespace: true,
              message: "Boshluq ola bilmez",
            },
          ]}
        >
          <Input placeholder="Adinizi qeyd edin" />
        </Form.Item>
        <Form.Item
          name="soyad"
          label="Soyad"
          rules={[
            {
              required: true,
              message: "Soyadinizi qeyd edin zehmet olmasa",
            },
            {
              whitespace: true,
              message: "Boshluq ola bilmez",
            },
          ]}
        >
          <Input placeholder="Soyadinizi qeyd edin" />
        </Form.Item>
        <Form.Item
          name="ataAdi"
          label="Ata adi"
          rules={[
            {
              required: true,
              message: "Ata adinizi qeyd edin zehmet olmasa",
            },
            {
              whitespace: true,
              message: "Boshluq ola bilmez",
            },
          ]}
        >
          <Input placeholder="Ata adinizi qeyd edin" />
        </Form.Item>
        <Form.Item
          name="cins"
          label="Cins"
          rules={[
            {
              required: true,
              message: "Cinsinizi qeyd edin",
            },
          ]}
        >
          <Radio.Group value="kisi">
            <Radio value="kisi">Kisi</Radio>
            <Radio value="qadin">Qadin</Radio>
          </Radio.Group>
        </Form.Item>
        <ConfigProvider locale={en}>
          <Form.Item
            name="phoneNumber"
            label="Nomre"
            rules={[
              {
                required: true,
                message: "Nomrenizi qeyd edin zehmet olmasa",
              },
            ]}
          >
            <CountryPhoneInput
              type={"number"}
              placeholder="Nomrenizi qeyd edin zehmet olmasa"
              className={styles.phoneInput}
            />
          </Form.Item>
        </ConfigProvider>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              required: true,
              message: "Emailinizi qeyd edin zehmet olmasa",
            },
            {
              type: "email",
              message: "e-poçt etibarlı e-poçt deyil",
            },
          ]}
        >
          <Input placeholder="Emailinizi qeyd edin zehmet olmasa" />
        </Form.Item>
        <Form.Item
          name="vezife"
          label="Vezife"
          rules={[
            {
              required: true,
              message: "Vezifenizi qeyd edin zehmet olmasa",
            },
            {
              whitespace: true,
              message: "Boshluq ola bilmez",
            },
          ]}
        >
          <Select>
            <Select.Option value="hekim">Hekim</Select.Option>
            <Select.Option value="muhendis">Muhendis</Select.Option>
            <Select.Option value="telebe">Telebe</Select.Option>
            <Select.Option value="muellim">Muellim</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="qisaInfo"
          label="Haqqinda"
          rules={[
            {
              required: true,
              message: "Ozunuz haqqinda qisa melumat yazin zehmet olmasa",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Ozunuz haqqinda qisa melumat yazin zehmet olmasa"
            autoSize
          />
        </Form.Item>
        <Form.Item
          name="raziliq"
          className={styles.raziliq}
          valuePropName="checked"
        >
          <Checkbox checked={checked} onChange={onChange}>
            Yeniliklər barədə məlumat almaq isdeyirem
          </Checkbox>
        </Form.Item>
        <Form.Item className={styles.addButton}>
          <div className={styles.buttons}>
            <Button
              className={styles.editButton}
              type="dashed"
              htmlType="button"
              onClick={() => {
                navigate("/");
              }}
            >
              Cancel
            </Button>
            <Button
              className={styles.uptadeButton}
              type="primary"
              htmlType="submit"
            >
              Update
            </Button>
            <Modal
              title="Tesdiq Bildirimi"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Etdiyiniz deyishiklerin yadda saxlanilmasina eminsinizmi?</p>
            </Modal>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditContact;
