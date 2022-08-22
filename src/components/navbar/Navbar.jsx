import React from "react";
import styles from "./Navbar.module.scss";
import { UserAddOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.left}>
          <h1>CONTACT APP</h1>
        </div>
        <div className={styles.right}>
          <Link to="/contacts/new">
            <Button
              className={styles.addButton}
              type="primary"
              size="small"
              icon={<UserAddOutlined />}
            >
              new contact
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
