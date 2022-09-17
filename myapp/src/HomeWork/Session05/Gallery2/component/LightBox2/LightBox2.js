import React, { Component, useEffect, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import $ from "jquery";

import classNames from "classnames/bind";
import styles from "./LightBox.module.scss";
import { slides1 } from "../../img-sl";

const slide1s = [
  {
    id: 1,
    path: slides1.img5,
  },
  {
    id: 2,
    path: slides1.img6,
  },
  {
    id: 3,
    path: slides1.img7,
  },
  {
    id: 4,
    path: slides1.img8,
  },
  {
    id: 5,
    path: slides1.img9,
  },
  {
    id: 6,
    path: slides1.img10,
  },
  {
    id: 7,
    path: slides1.img11,
  },
  {
    id: 8,
    path: slides1.img12,
  },
];
const cx = classNames.bind(styles);

function  LightBox2() {
  const [slide1L, setSlide1L] = useState(slide1s);
  const [isShow, setShow] = useState(false);
  const [data,setData] = useState({})
  
  const nextSl1 = () => {
    let a = slide1L.findIndex(slide => slide.id == data.id)
    if(a < slide1L.length -1)
    setData(slide1L[a+1])
    else setData(slide1L[0])
  };

  const prevSl1 = () => {
    let a = slide1L.findIndex(slide => slide.id == data.id)
    if(a > 0)
    setData(slide1L[a-1])
    else setData(slide1L[slide1L.length-1])
  };

  return (
    <>
      <div className={cx("slide-item")}>
        <h1 className={cx("head-title")}>
          LIGHTBOX GRID GALLERY
        </h1>
        <div className={cx("slide", "container")}>
          {/* Hiển thị hình ảnh */}
          <div className={cx("carousel-inner", "position-relative", "row")}>
            {slide1L.map((slide, index) => (
              <div
                key={index}
                className={cx("col-3", "wrap-img")}
                onClick={() => {
                  setData(slide)
                  setShow((prevs) => !prevs);
                }}
              >
                <div
                  key={slide.id}
                  className={cx("slide-img")}
                  style={{
                    background: `url(${slide.path}) top center/cover no-repeat`,
                  }}
                >
                  {/* <img className={cx("d-block','w-100")} src={slide.path} /> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Modal */}
      <div className={cx("modal", { active: isShow })}>
        <div
          className={cx("outline")}
          onClick={() => setShow(false)}
        ></div>
        <div className={cx("modal-content", "position-relative")}>
          <img
            className={cx("d-block','w-100")}
            src={data.path}
          />
          <span
            className={cx("btn-trans", "position-absolute", "btn-prevs")}
            onClick={prevSl1}
          >
            <GrFormPrevious />
          </span>
          <span
            className={cx("btn-trans", "position-absolute", "btn-next")}
            onClick={nextSl1}
          >
            <MdOutlineNavigateNext />
          </span>
        </div>
      </div>
    </>
  );
}

export default LightBox2;
