import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import img from "./img/original.avif";

import classNames from "classnames/bind";
import styles from "./Form2.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);
function Form4() {
  const [typePass, setTypePass] = useState("password");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div
      className={cx("wrapper", "row", "h-lg-100")}
      style={{
        background: `url('${img}') top center/cover no-repeat`,
      }}
    >
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
            <div className={cx("head-title")}>
              <p className={cx("start")}>start for free</p>
              <h3 className={cx(" ")}>Sign in to your account</h3>
              <p className={cx("ask")}>
                Already A Member?<a href="">Login</a>{" "}
              </p>
            </div>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
              <div className={cx("form-row")}>
                <div className={cx("form-group",'custom-group', "col-md-6")}>
                  <label htmlFor="inputEmail4">First name</label>
                  <input
                    type="text"
                    className={cx("form-control")}
                    id="inputEmail4"
                    placeholder="First name"
                    {...register("firstName", {
                      required: "vui lòng nhập trường này",
                      minLength: {
                        value: 2,
                        message: "vui lòng nhập tối thiểu 2 ký tự",
                      },
                    })}
                  />
                  {errors.firstName && <p>{errors.firstName.message}</p>}
                </div>
                <div className={cx("form-group",'custom-group', "col-md-6")}>
                  <label htmlFor="inputPassword4">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Last name"
                    {...register("lastName", {
                      required: "vui lòng nhập trường này",
                      minLength: {
                        value: 2,
                        message: "vui lòng nhập nhiều hơn 2 ký tự",
                      },
                    })}
                  />
                  {errors.lastName && <p>{errors.lastName.message}</p>}
                </div>
              </div>
              <div className={cx("form-group",'custom-group')}>
                <label htmlFor="inputAddress">Email</label>
                <input
                  type="email"
                  className={cx("form-control")}
                  id="inputAddress"
                  placeholder="Email"
                  {...register("email", {
                    required: "vui lòng nhập trường này",
                  })}
                />
                {errors.email && <p>{errors.email}</p>}
              </div>
              <div className={cx("form-group",'custom-group')}>
                <label htmlFor="inputAddress2">Password</label>
                <input
                  type="password"
                  className={cx("form-control")}
                  id="inputAddress2"
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                    pattern: {
                      value: /^([A-Z]){1}([\w_\.!@#$%^&*()]+){5,31}$/,
                      message: "sai định dạng",
                    },
                  })}
                />
                {errors.password && <p>{errors.password.message}</p>}
              </div>
              <div className={cx("form-group",'custom-group')}>
                <div className="form-check">
                  <input
                    className={cx("form-check-input")}
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className={cx("form-check-label")} htmlFor="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div className={cx("form-row", "justify-content-between")}>
                <button type="button" className={cx("btn","btn-secondary")}>
                  Change method
                </button>
                <button type="submit" className={cx("btn","btn-primary")}>
                  Create account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={cx("col-lg-5")}></div>
    </div>
  );
}

export default Form4;
