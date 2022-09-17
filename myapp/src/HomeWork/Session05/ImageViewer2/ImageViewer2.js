import React, { Component, useEffect, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

import { images } from "./image";
import classNames from "classnames/bind";
import styles from "./ImageViewer.module.scss";

const cx = classNames.bind(styles);

function ImageViewer2() {
  const [num, setNum] = useState(0);
  const [path, setPath] = useState("");
  const [imgActive, setImgActive] = useState(0);

  useEffect(() => {
    setNum(document.getElementsByClassName("img").length);
    setPath(document.querySelector(".img").src);
  }, []);

  useEffect(() => {
    setPath(document.querySelectorAll('.img')[imgActive].src);
  },[imgActive])

  const nextImg = () => {
    setImgActive((prev) => (prev < num - 1 ? prev + 1 : prev));
    // setPath();
  };

  const prevImg = () => {

    setImgActive((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className={cx("card", "position-relative")} style={{ width: "18rem" }}>
      <img className={cx("card-img-top")} src={path} />
      <span
        className={cx("btn", "position-absolute", "btn-next", {
          notable: imgActive == num - 1,
        })}
        onClick={nextImg}
      >
        <MdOutlineNavigateNext />
      </span>
      <span
        className={cx("btn", "position-absolute", "btn-prev", {
          notable: imgActive == 0,
        })}
        onClick={prevImg}
      >
        <GrFormPrevious />
      </span>
      <div className={cx("card-body", "border-top")}>
        <ul className={cx("list-image")}>
          {Object.keys(images).map((pathI, i) => (
            <li
              onClick={() => {
                setImgActive(i);
              }}
              className={cx("img-item", {
                active: i == imgActive,
              })}
              key={i}
            >
              <img className={cx("img")} src={images[pathI]} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ImageViewer2;
