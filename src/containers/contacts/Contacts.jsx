import React from "react";
import styles from "./Contacts.module.scss";
import { Table, Input, Button } from "antd";
import { EditOutlined, SearchOutlined } from "@ant-design/icons";
import Info from "../../components/Info/info";
import { useNavigate } from "react-router-dom";
import { useContacts } from "../../context";
import "./Contacts.css";
import Delete from "../../components/Delete/Delete";
const Contacts = () => {
  const navigate = useNavigate();
  const { state } = useContacts();
  const data = state.sort((a, b) => b.id - a.id);

  const columns = [
    {
      title: "AD",
      dataIndex: "ad",
      key: "1",
      filterDropdown: ({ selectedKeys, setSelectedKeys, confirm }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.ad.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Soyad",
      dataIndex: "soyad",
      key: "2",
      filterDropdown: ({ selectedKeys, setSelectedKeys, confirm }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.soyad.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Ata adi",
      dataIndex: "ataAdi",
      key: "3",
      filterDropdown: ({ selectedKeys, setSelectedKeys, confirm }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.ataAdi.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Vezife",
      dataIndex: "vezife",
      key: "4",
      filterDropdown: ({
        selectedKeys,
        setSelectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.vezife.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Actions",
      render: (record) => {
        return (
          <div className={styles.iconsDiv}>
            <Info record={record} />
            <EditOutlined
              onClick={() => {
                navigate(`/contacts/edit/${record.id}`);
              }}
              className={styles.editIcon}
            />
            <Delete id={record.id} />
          </div>
        );
      },
    },
  ];
  return (
    <div className={styles.contactContainer}>
      <div className={styles.tableContainer}>
        <Table
          dataSource={data}
          columns={columns}
          pagination={{
            pageSize: 5,
          }}
        ></Table>
      </div>
    </div>
  );
};

export default Contacts;
