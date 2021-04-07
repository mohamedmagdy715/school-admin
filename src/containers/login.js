import "./login.css";
import { adminLogin } from "../services/admin";
import { useEffect, useRef } from "react";
import uuid from "react-uuid";

export const Login = ({ history }) => {
  const userName = useRef();
  const password = useRef();

  useEffect(() => {
    if (localStorage.getItem("adminToken")) {
      history.push(`/home`);
    }
  });

  const login = async () => {
    if (await adminLogin(userName.current.value, password.current.value)) {
      localStorage.setItem("adminToken", uuid());
      history.push(`/home`);
    } else {
      console.log("not found");
    }
  };

  return (
    <div className="login-wrapper">
      <form>
        <div className="form-group">
          <label for="usrnm">Username:</label>
          <input
            ref={userName}
            type="text"
            className="form-control"
            id="usrnm"
          />
        </div>
        <div className="form-group">
          <label for="pswrd">Password:</label>
          <input
            ref={password}
            type="password"
            className="form-control"
            id="pswrd"
          />
        </div>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block"
          onClick={login}
        >
          Login
        </button>
      </form>
    </div>
  );
};
