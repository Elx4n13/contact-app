import React, { useEffect, useState } from "react";
import styles from "./AddContact.module.scss";
import { Form, Button, Checkbox, Input, Select, Radio } from "antd";
import { useContacts } from "../../context";
import { toast } from "react-toastify";
import CountryPhoneInput, { ConfigProvider } from "antd-country-phone-input";
import en from "world_countries_lists/data/countries/en/world.json";
import { useNavigate } from "react-router-dom";
const AddContact = () => {
  const [checked, setChecked] = useState(true);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      vezife: "hekim",
      phoneNumber: {
        code: 994,
        short: "AZ",
      },
      raziliq: true,
    });
  }, [form]);

  const { state, dispatch } = useContacts();

  const gentId = (state) => {
    if (state.length === 0) {
      return 1;
    }
    return state.sort((a, b) => b.id - a.id)[0].id + 1;
  };

  const onFinish = (values) => {
    const checkMail = state.find((user) => user.email === values.email);
    const checkPhone = state.find(
      (user) =>
        user.phoneNumber.phone === values.phoneNumber.phone &&
        user.phoneNumber.code === values.phoneNumber.code
    );
    if (!values.phoneNumber.phone) {
      return toast.warning("Nomrenizi qeyd edin zehmet olmasa");
    }
    if (checkPhone) {
      return toast.warning("Bu nomre var");
    }
    if (checkMail) {
      return toast.warning("Bu mail var");
    }
    const newValues = {
      id: gentId(state),
      key: gentId(state),
      ...values,
    };
    dispatch({
      type: "ADD_CONTACTS",
      payload: newValues,
    });
    navigate(`/`);
  };

  const onChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <div className={styles.addContainer}>
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
          <Button block type="primary" htmlType="submit">
            ADD
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddContact;
