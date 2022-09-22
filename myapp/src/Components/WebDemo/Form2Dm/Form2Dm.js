import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import img from "./img/lottery-display.svg";
import logo from "./img/lottery-display-logo.svg";

import classNames from "classnames/bind";
import styles from "./Form2.module.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);
const user = {
  email: "chuyen@gmail.com",
  password: "Abc@123",
};
function Form2Dm({ setUser }) {
  const [typePass, setTypePass] = useState("password");
  const redirect = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitData = (data) => {
    if (data.email === user.email && data.password === user.password) {
      setUser(data);
      redirect("/");
    }
  };

  useEffect(() => {
    setUser({ email: undefined, password: undefined });
  }, []);

  return (
    <div className={cx("wrapper", "row", "h-lg-100")}>
      <div
        className={cx(
          "col-lg-5",
          "d-none",
          "d-lg-flex",
          "bg-primary",
          "login-slider",
          "justify-content-center",
          "align-items-center",
          "flex-column"
        )}
      >
        <div className={cx("wp-img", "pb-5")}>
          <img src={img} />
        </div>
        <p className={cx("h3 text-light", "text-center", "pl-3", "pr-3", "h5")}>
          Increase &#38; track lottery sales, save counter space with branded
          lottery display experience
        </p>
      </div>
      <div
        className={cx(
          "col-lg-7",
          " d-flex",
          "align-items-center",
          "justify-content-center"
        )}
      >
        <div className={cx("login-box")}>
          <div className={cx("d-block", "pb-5")}>
            <a className={cx("d-block", "pb-2", "link-logo")} href="/">
              <img src={logo} />
            </a>
            <h3 className={cx(" ")}>Sign in to your account</h3>
            <form onSubmit={handleSubmit(submitData)}>
              <div className={cx("form-group")}>
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className={cx("form-control")}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  {...register("email", {
                    required: "vui lòng nhập trường này",
                  })}
                />
                {errors.email && <p>Last name is required</p>}
              </div>
              <div className={cx("form-group", "position-relative")}>
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  className={cx("form-control", "password-control")}
                  id="exampleInputPassword1"
                  type={typePass}
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                <div
                  className={cx(
                    "see",
                    "position-absolute",
                    "d-flex",
                    "align-items-center",
                    "justify-content-center",
                    { active: typePass !== "password" }
                  )}
                  onClick={() => {
                    setTypePass((prev) =>
                      prev == "password" ? "text" : "password"
                    );
                  }}
                >
                  {typePass == "password" ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
              <div className={cx("form-check")}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  {...register("remember")}
                />
                <label
                  className={cx("form-check-label", "remember-title")}
                  htmlFor="exampleCheck1"
                >
                  Remember Me
                </label>
              </div>
              <button
                type="submit"
                className={cx(
                  "btn",
                  "btn-primary",
                  " btn-lg",
                  "btn-block",
                  "btn-submit",
                  "mt-4"
                )}
              >
                Sign in
              </button>
            </form>
            <p className={cx("text-secondary font-size-lg mt-5 text-center")}>
              Need a account? <a href="">Create an account </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form2Dm;
