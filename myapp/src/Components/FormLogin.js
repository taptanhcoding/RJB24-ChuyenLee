import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
const user = {
  username: "chuyendev@gmail.com",
  password: "Abc@123",
};

function FormLogin() {
  const [status, setStatus] = useState();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handelLogin = (data) => {
    if (data.username == user.username && data.password == user.password)
      navigate("/");
    else setStatus("thất bại");
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
      </nav>
      <form onSubmit={handleSubmit(handelLogin)}>
        {status && <h1 style={{ color: "red" }}>{status}</h1>}
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            {...register("username", { required: "this is require" })}
          />
          <p>{errors.username?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            {...register("password", {
              required: "vui lòng nhập trường này",
              pattern: {
                value: /^([A-Z]){1}([\w_\.!@#$%^&*()]+){5,31}$/,
                message: "sai định dạng",
              },
            })}
          />
          <p> {errors.password?.message}</p>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            {...register("remember")}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default FormLogin;
