import React from "react";
import styles from "./Home.module.scss";
import { useNavigate } from "react-router-dom";
import { useContacts } from "../../context";
import Info from "../../components/Info/info";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Empty from "../../components/Empty/Empty";
const Home = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContacts();
  const deleteItem = (id) => {
    dispatch({
      type: "DELETE_CONTACT",
      payload: id,
    });
  };
  return (
    <div className={styles.homeContainer}>
      <div className={styles.cardsContainer}>
        {state.length === 0 ? (
          <Empty />
        ) : (
          <div className={styles.cards}>
            {state.slice(0, 4).map((user) => (
              <div key={user.id} className={styles.cardDiv}>
                <div className={styles.imageDiv}>
                  <img
                    src={
                      user.cins === "kisi"
                        ? "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                        : "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
                    }
                    alt="gender avatar"
                  />
                </div>
                <div className={styles.info}>
                  <p>
                    AD: <span>{user.ad}</span>{" "}
                  </p>
                  <p>
                    SOYAD: <span>{user.soyad}</span>{" "}
                  </p>
                  <p>
                    ATA ADI: <span>{user.ataAdi}</span>{" "}
                  </p>
                </div>
                <div className={styles.icons}>
                  <div className={styles.infoIconDiv}>
                    <Info record={user} />
                  </div>
                  <div className={styles.editIconDiv}>
                    <EditOutlined
                      onClick={() => {
                        navigate(`/contacts/edit/${user.id}`);
                      }}
                      className={styles.editIcon}
                    />
                  </div>
                  <div className={styles.deleteIconDiv}>
                    <DeleteOutlined
                      className={styles.deleteIcon}
                      onClick={() => deleteItem(user.id)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {state.length > 4 ? (
        <div className={styles.buttonDiv}>
          <Button type="primary" onClick={() => navigate("/contacts")}>
            Tam list
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
