import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import { getData } from "../handleApi/handleApi";

import classnames from "classnames/bind";
import styles from "./FormSignIn.module.scss";

const cx = classnames.bind(styles);
function FormSignIn() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [cities,setCities] = useState([])
    const [districts,setDistricts] = useState([])
    const [communes,setCommune] = useState([])

    useEffect(() => {
        const getCity = async() => {
            const city = await getData('/api/', {
                params: {
                    depth:3
                  }
            })
            setCities(city)
        }
        getCity()
    },[])

    useEffect(() => {

       watch('city') && setDistricts(cities.find(city => city.code == watch('city')).districts)
    },[watch('city')])
    useEffect(() => {
        watch('district') && setCommune(districts.find(district => district.code == watch('district')).wards)
    },[watch('district')])

  return (
    <>
      <form className={cx('container')} onSubmit={handleSubmit(data => console.log(data))}>
        <div className={cx("form-row")}>
          <div className={cx("form-group col-md-6")}>
            <label htmlFor="inputEmail4">Email</label>
            <input
              type="email"
              className={cx("form-control")}
              id="inputEmail4"
              placeholder="Email"
              {...register('email', {required: 'Email Address is require'})}
            />
            {errors?.email && <p className={'nofi'}>{errors.email.message}</p>}
          </div>
          <div className={cx("form-group col-md-6")}>
            <label htmlFor="inputPassword4">Password</label>
            <input
              type="password"
              className={cx("form-control")}
              id="inputPassword4"
              placeholder="Password"
              {...register('password', {required: 'Email Address is require'})}
            />
            {errors?.password && <p className={'nofi'}>{errors.password.message}</p>}

          </div>
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="inputAddress">Address</label>
          <input
            type="text"
            className={cx("form-control")}
            id="inputAddress"
            placeholder="1234 Main St"
            {...register('address')}
          />
        </div>
        <div className={cx("form-group")}>
          <label htmlFor="inputAddress2">Address 2</label>
          <input
            type="text"
            className={cx("form-control")}
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
            {...register('address2')}
          />
        </div>
        <div className={cx("form-row")}>
          <div className={cx("form-group col-md-4")}>
            <label htmlFor="inputCity">City</label>
            <select id="inputCity" className={cx("form-control")} {...register('city')}>
              <option value={''} selected>Choose City</option>
              {
                cities.map(city => <option key={city.code} value={city.code}>{city.name}</option>)
              }
            </select>
          </div>
          <div className={cx("form-group col-md-4")}>
            <label htmlFor="inputState">District</label>
            <select id="inputState" className={cx("form-control")} {...register('district')}>
              <option value={''} selected>Choose District</option>
              {
                districts.map(district => <option key={district.code} value={district.code}>{district.name}</option>)
              }
            </select>
          </div>
          <div className={cx("form-group col-md-4")}>
            <label htmlFor="inputZip">Commune</label>
            <select id="inputZip" className={cx("form-control")} {...register('commune')}>
              <option value={''} selected>Choose Commune</option>
              {communes.map(commune => <option key={commune.code} value={commune.code}>{commune.name}</option>)}
            </select>
          </div>
        </div>
        <div className={cx("form-group")}>
          <div className="form-check">
            <input
              className={cx("form-check-input")}
              type="checkbox"
              id="gridCheck"
              {...register('remember')}
            />
            <label className={cx("form-check-label")} htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <button type="submit" className={cx("btn btn-primary")}>
          Sign in
        </button>
      </form>
    </>
  );
}

export default FormSignIn;
