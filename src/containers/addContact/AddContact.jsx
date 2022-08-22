import React from "react";
import styles from "./AddContact.module.scss";
import { Form, Button, Checkbox, Input, Select } from "antd";
import { useContacts } from "../../context";
import { toast } from "react-toastify";
import CountryPhoneInput, { ConfigProvider } from "antd-country-phone-input";
import en from "world_countries_lists/data/countries/en/world.json";
const AddContact = () => {
  // const [form] = Form.useForm()

  // const onFill = () =>{
  //   form.setFieldsValue({
  //     ad:'Elxan'
  //   })
  // }
  const { state, dispatch } = useContacts();
  const gentId = (state) => {
    if (state.length === 0) {
      return 1;
    }
    return state.sort((a, b) => b.id - a.id)[0].id + 1;
  };
  const onFinish = (values) => {
    const checkMail = state.find((user) => user.email === values.email);
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
  };
  return (
    <div className={styles.addContainer}>
      <Form labelCol={{ span: 3 }} onFinish={onFinish}>
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
            <CountryPhoneInput />
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
          <Input placeholder="Adinizi qeyd edin" />
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
          <Select defaultValue="hekim">
            <Select.Option value="hekim">Hekim</Select.Option>
            <Select.Option value="muhendis">Muhendis</Select.Option>
            <Select.Option value="vekil">Vekil</Select.Option>
            <Select.Option value="muellim">Muellim</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="raziliq"
          className={styles.raziliq}
          rules={[
            {
              defaultChecked: true,
            },
          ]}
        >
          <Checkbox checked={false}>
            Yeniliklər barədə məlumat almaq isdeyirem
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit">
            ADD
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddContact;
