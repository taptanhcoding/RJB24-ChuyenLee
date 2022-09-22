import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import classnames from "classnames/bind";
import styles from "./List.module.scss";

import { getData, upData, removeData, createData } from "../network/network";

const cx = classnames.bind(styles);
function List() {
  let { endpoint } = useParams();
  const [param, setParam] = useState("");
  const [customer, setCustomer] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const getArray = async () => {
      const data = await getData(`/${endpoint}`);
      setCustomer(data);
    };
    getArray();
  }, [endpoint]);

  useEffect(() => {
    const getArray = async () => {
      const data = await removeData(param);
      let newData = customer.filter((pre) => pre.id !== data.id);
      setCustomer(newData);
      setParam("");
      setShow(true);
    };
    if (param != "") {
      getArray();
    }
  }, [param]);

  useEffect(() => {
   let hideToast =  setTimeout(()=>{ setShow(false)},1500)

   return () => {
    clearTimeout(hideToast)
   }
  },[show])

  const handleDelete = (id) => {
    setParam(`${endpoint}/${id}`);
  };

  const render = (params) => {
    switch (params) {
      case "customer":
        return (
          <>
            <table className={cx("table")}>
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">phone</th>
                  <th scope="col">action</th>
                </tr>
              </thead>
              <tbody>
                {customer.map((cus) => (
                  <tr key={cus.id}>
                    <th scope="row">{cus.id}</th>
                    <td>{cus.name}</td>
                    <td>{cus.email}</td>
                    <td>{cus.phone}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => handleDelete(cus.id)}
                        className={cx("btn btn-danger")}
                      >
                        Delete
                      </button>
                      <Link
                        className={cx("btn btn-info")}
                        to={`/${endpoint}/${cus.id}`}
                      >
                        Detail{" "}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        );
      case "product":
        return (
          <>
            <table className={cx("table")}>
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Color</th>
                  <th scope="col">Price</th>
                  <th scope="col">action</th>
                </tr>
              </thead>
              <tbody>
                {customer.map((cus) => (
                  <tr key={cus.id}>
                    <th scope="row">{cus.id}</th>
                    <td>{cus.name}</td>
                    <td>{cus.color}</td>
                    <td>{cus.price}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => handleDelete(cus.id)}
                        className={cx("btn btn-danger")}
                      >
                        Delete
                      </button>
                      <Link
                        className={cx("btn btn-info")}
                        to={`/${endpoint}/${cus.id}`}
                      >
                        Detail{" "}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        );
    }
  };

  return (
    <div className={cx("wrapper", "position-relative")}>
      <Link to={`/${endpoint}/create`}>add {endpoint}</Link>
      {render(endpoint)}
      <div
        className={cx("toast", "toast-custom", "position-absolute", {
          active: show,
        })}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        data-autohide = {true}
        data-delay = {[500]}
      >
        <div className={cx("toast-header", "bg-success", "text-light")}>
          <strong className={cx("mr-auto")}>Nofication</strong>
          <button
            type="button"
            className={cx("ml-2 mb-1 close")}
            data-dismiss="toast"
            aria-label="Close"
            onClick={() => setShow(false)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className={cx("toast-body")}>xóa thành công</div>
      </div>
    </div>
  );
}

export default List;
