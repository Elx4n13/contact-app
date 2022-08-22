import React from "react";
import styles from "./AddContact.module.scss";
import { Form, Button, Checkbox, Input, Select } from "antd";
const AddContact = () => {
  // const [form] = Form.useForm()

  // const onFill = () =>{
  //   form.setFieldsValue({
  //     ad:'Elxan'
  //   })
  // }
  const onFinish = (values) =>{
    const newValues = {
      id:2,
      ...values
    }
    localStorage.setItem('USERS',JSON.stringify([newValues]))
  }
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
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              required: true,
              message: "Emailinizi qeyd edin zehmet olmasa",
            },
            {
              type:'email',
              message:'e-poçt etibarlı e-poçt deyil'
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
        <Form.Item name="raziliq" className={styles.raziliq} rules={[
            {
              defaultChecked: true,
            },
          ]}>
          <Checkbox checked={false}>Yeniliklər barədə məlumat almaq isdeyirem</Checkbox>
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
