import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate ,Link} from "react-router-dom";
import { useForm } from "react-hook-form";


import classnames from "classnames/bind";
import styles from "./List.module.scss";

import { getData, putData, removeData, createData } from "../network/network";

const cx = classnames.bind(styles);
function CreateData() {
  let navigate = useNavigate();
  let {endpoint } = useParams();
console.log(endpoint);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const createData1 = async (data1) => {
    const data = await createData(`/${endpoint}`,data1);
    console.log(data);
    navigate(`/${endpoint}`)
  };

  const updateData = (data) => {
    console.log(data);
    createData1(data);
  };

  const render = (params) => {
    switch (params) {
      case "customer":
        return (
          <>
            <form onSubmit={handleSubmit(updateData)}>
              <div className={cx("form-group")}>
                <label>Name</label>
                <input
                  {...register("name")}
                  type="text"
                  className={cx("form-control")}
                  aria-describedby="emailHelp"
                  placeholder="Name"
                />
              </div>
              <div className={cx("form-group")}>
                <label>postCode</label>
                <input
                  {...register("postCode")}
                  type="text"
                  className={cx("form-control")}
                  placeholder="postCode"
                />
              </div>
              <div className={cx("form-group")}>
                <label>address</label>
                <input
                  {...register("address")}
                  type="text"
                  className={cx("form-control")}
                  placeholder="address"
                />
              </div>
              <div className={cx("form-group")}>
                <label>dob</label>
                <input
                  {...register("dob")}
                  type="text"
                  className={cx("form-control")}
                  placeholder="dob"
                />
              </div>
              <div className={cx("form-group")}>
                <label>email</label>
                <input
                  {...register("email")}
                  type="email"
                  className={cx("form-control")}
                  placeholder="email"
                />
              </div>
              <div className={cx("form-group")}>
                <label>gender</label>
                <div className={cx("form-check")}>
                  <input
                    className={cx("form-check-input")}
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value={false}
                    {...register("gender")}
                    checked
                  />
                  <label className="form-check-label" htmlFor="exampleRadios1">
                    man
                  </label>
                </div>
                <div className={cx("form-check")}>
                  <input
                    className={cx("form-check-input")}
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value={true}
                    {...register("gender")}
                  />
                  <label
                    className={cx("form-check-label")}
                    htmlFor="exampleRadios2"
                  >
                    woman
                  </label>
                </div>
              </div>
              <div className={cx("form-group")}>
                <label>phone</label>
                <input
                  {...register("phone")}
                  type="text"
                  className={cx("form-control")}
                  placeholder="phone"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </form>
          </>
        );
      case "product":
        return (
          <>
            <form onSubmit={handleSubmit(updateData)}>
              <div className={cx("form-group")}>
                <label>Name</label>
                <input
                  {...register("name")}
                  type="text"
                  className={cx("form-control")}
                  aria-describedby="emailHelp"
                  placeholder="Name"
                />
              </div>
              <div className={cx("form-group")}>
                <label>color</label>
                <input
                  {...register("color")}
                  type="text"
                  className={cx("form-control")}
                  placeholder="color"
                />
              </div>
              <div className={cx("form-group")}>
                <label>price</label>
                <input
                  {...register("price")}
                  type="text"
                  className={cx("form-control")}
                  placeholder="price"
                />
              </div>
              <div className={cx("form-group")}>
                <label>description</label>
                <input
                  {...register("description")}
                  type="text"
                  className={cx("form-control")}
                  placeholder="description"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </form>
          </>
        );
    }
  };

  return (
    <>
      
      {render(endpoint)}
    </>
  );
}

export default CreateData;
