import { useEffect, useState } from "react";
import axios from "axios";

import className from "classnames/bind";
import styles from "./Weather.module.scss";

const request = axios.create({
  baseURL: "https://api.openweathermap.org/data/3.0/",
});
function Weather() {
  const [mylocal, setMylocal] = useState({ lat: 33.44, lon: -94.04 });
  const getWeather = async (mylocal) => {
    let data = await request.get("/onecall", {
      params: {
        lat: mylocal.lat,
        lon: mylocal.lon,
        exclude: "hourly",
        appid: "34f6d1d173120c19fac48e56556c7e70",
      },
    });
    console.log(data.data);
    return data.data;
  };
  useEffect(() => {
    getWeather(mylocal);
  }, []);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;
    getWeather({
        lat: crd.latitude,
        lon: crd.longitude,
      })
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
  return <>Weather</>;
}

export default Weather;
