import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import img from "./img/lottery-display.svg";
import logo from "./img/Logo_Dark.svg";

import classNames from "classnames/bind";
import styles from "./Form2.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);
function Form3() {
  const [typePass, setTypePass] = useState("password");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className={cx("wrapper", "row", "h-lg-100")}>
      <div
        className={cx(
          "col-lg-6",
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
          <img src={'https://app.grovia.io/_next/image?url=%2Fnew-login-image.png&w=1920&q=75'} />
        </div>
      </div>
      <div
        className={cx(
          "col-lg-6",
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
            <h3 className={cx('login-title','text-danger')}>Login</h3>
            <h3 className={cx("login-title2")}>Login to your account</h3>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
              <div className={cx("form-group")}>
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className={cx("form-control")}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  {...register("email", { required: true })}
                />
              </div>
              <div className={cx("form-group", "position-relative")}>
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  className={cx("form-control",'password-control')}
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
                  "btn-danger",
                  " btn-lg",
                  "btn-block",
                  "btn-submit",
                  "mt-4",
                  'text-uppercase'
                )}
              >
                Sign in
              </button>
            </form>
            <p className={cx("text-secondary font-size-lg mt-5 text-center")}>
              Need a account? <a href="" className={cx('text-danger')}>Create an account </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form3;
