import React, { useState, useCallback } from "react";
import { login } from "../../lib/auth";

import form from "../../styles/form.module.sass";

export default function LoginForm() {
  const [user, setUser] = useState({ user: "", password: "" });
  const contentType = "application/json";

  const getUser = async (user) => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(user),
      });

      // Throw error with status code in case Fetch API req failed
      if (res.status === 200) {
        const { token } = await res.json();
        login({ token }, true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    getUser(user);
  }, []);

  return (
    <div className={form.loginContainer}>
      <form
        className={form.loginForm}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className={form.input}>
          <input
            className={form.username}
            name="username"
            type="text"
            placeholder="username..."
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <input
            className={form.password}
            name="password"
            type="password"
            placeholder="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div className={form.bottom}>
          {/* <div className={form.register}>
            <Link href="/register">
              <a>Register</a>
            </Link>
          </div> */}
          <div className={form.button}>
            <button>Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}
