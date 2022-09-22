import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import classnames from "classnames/bind";
import styles from "./List.module.scss";

import { getData, putData, removeData, createData } from "../network/network";

const cx = classnames.bind(styles);
function DetailCustomer() {
  let navigate = useNavigate();
  let { id, endpoint } = useParams();

  const [customer, setCustomer] = useState({});
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const getDetail = async () => {
      const data = await getData(`/${endpoint}/${id}`);
      setCustomer(data);
    };

    getDetail();
  }, []);

  const upCustomer = async (newdata) => {
    const data = await putData(`/${endpoint}/${id}`, newdata);
    setCustomer(data);
  };

  const updateData = (data) => {
    let data2 = Object.keys(data).filter((key) => !!watch(key));
    const data3 = {};
    data2.forEach((key) => {
      data3[key] = data[key];
    });
    let newData = { ...customer, ...data3 };
    upCustomer(newData);
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
                  defaultValue={customer?.name}
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
                  defaultValue={customer?.postCode}
                  {...register("postCode")}
                  type="text"
                  className={cx("form-control")}
                  placeholder="postCode"
                />
              </div>
              <div className={cx("form-group")}>
                <label>address</label>
                <input
                  defaultValue={customer?.address}
                  {...register("address")}
                  type="text"
                  className={cx("form-control")}
                  placeholder="address"
                />
              </div>
              <div className={cx("form-group")}>
                <label>dob</label>
                <input
                  defaultValue={customer?.dob}
                  {...register("dob")}
                  type="text"
                  className={cx("form-control")}
                  placeholder="dob"
                />
              </div>
              <div className={cx("form-group")}>
                <label>email</label>
                <input
                  defaultValue={customer?.email}
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
                    {...register("gender")}
                    defaultValue={false}
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
                    defaultValue={true}
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
                  defaultValue={customer?.phone}
                  {...register("phone")}
                  type="text"
                  className={cx("form-control")}
                  placeholder="phone"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Change
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
                  defaultValue={customer?.name}
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
                  defaultValue={customer?.color}
                  {...register("color")}
                  type="text"
                  className={cx("form-control")}
                  placeholder="color"
                />
              </div>
              <div className={cx("form-group")}>
                <label>price</label>
                <input
                  defaultValue={customer?.price}
                  {...register("price")}
                  type="text"
                  className={cx("form-control")}
                  placeholder="price"
                />
              </div>
              <div className={cx("form-group")}>
                <label>description</label>
                <input
                  defaultValue={customer?.description}
                  {...register("description")}
                  type="text"
                  className={cx("form-control")}
                  placeholder="description"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Change
              </button>
            </form>
          </>
        );
    }
  };

  return (
    <>
      {/* <form onSubmit={handleSubmit(updateData)}>
        <div className={cx("form-group")}>
          <label>Name</label>
          <input
            defaultValue={customer?.name}
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
            defaultValue={customer?.postCode}
            {...register("postCode")}
            type="text"
            className={cx("form-control")}
            placeholder="postCode"
          />
        </div>
        <div className={cx("form-group")}>
          <label>address</label>
          <input
            defaultValue={customer?.address}
            {...register("address")}
            type="text"
            className={cx("form-control")}
            placeholder="address"
          />
        </div>
        <div className={cx("form-group")}>
          <label>dob</label>
          <input
            defaultValue={customer?.dob}
            {...register("dob")}
            type="text"
            className={cx("form-control")}
            placeholder="dob"
          />
        </div>
        <div className={cx("form-group")}>
          <label>email</label>
          <input
            defaultValue={customer?.email}
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
              {...register("gender")}
              defaultValue={false}
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
              defaultValue={true}
              {...register("gender")}
            />
            <label className={cx("form-check-label")} htmlFor="exampleRadios2">
              woman
            </label>
          </div>
        </div>
        <div className={cx("form-group")}>
          <label>phone</label>
          <input
            defaultValue={customer?.phone}
            {...register("phone")}
            type="text"
            className={cx("form-control")}
            placeholder="phone"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Change
        </button>
      </form> */}
      {render(endpoint)}
    </>
  );
}

export default DetailCustomer;
