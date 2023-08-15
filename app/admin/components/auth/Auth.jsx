"use client";
import { useState } from "react";
import styles from "./auth.module.scss";
import Link from "next/link";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false)

  const user = {
    email: "n@n",
    password: "123",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === user.email && password === user.password) {
        setLogin(true)
        console.log(user.email, user.password, login);
    } else {
        console.log('Error');
    }
    
  };

  return (
    <div className={`${styles.panel}`}>
      <div className={`${styles.panel_inner}`}>
        <p className={`${styles.panel_inner__title}`}>Welcome Back</p>
        <p className={`${styles.panel_inner_subTitle}`}>
          Login Into Your Account
        </p>

        <form className={`${styles.form}`}>
          <div className="">
            <label className={`${styles.form_label}`}>E-mail Or Username</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${styles.form_input}`}
              type="email"
            />
          </div>

          <div className="">
            <label
              className={`${styles.form_label} ${styles.form_label_password}`}
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`${styles.form_input}`}
              type="password"
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className={`${styles.form_btn}`}
          >
            Login
          </button>

          <div className="">
            {login && (
              <div className="">
                <Link href='admin/panel'>Link</Link>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export { Auth };
