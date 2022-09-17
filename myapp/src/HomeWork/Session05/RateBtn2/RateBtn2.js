import React, { Component, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styles from "./RateBtn.module.scss";
import classNames from "classnames/bind";
import Star2 from '../Star2/Star2'


const cx = classNames.bind(styles);

const stars = [1,2,3,4,5];

function RateBtn2() {

  const [rate,setRate] = useState(0)
  const [isRate,setIsRate] = useState(0)

  let renderStar = (id) => {
    return <div onClick={() => setIsRate(id)}>{id <= isRate ?(<AiFillStar className={cx('active')}/>) : (<AiOutlineStar />)}</div>
  }
  return (
    <>
      <div
        className={cx(
          "wrapper",
          "d-flex",
          "flex-row",
          "justify-content-start",
          "mt-2"
        )}
      >
        <div className={cx("w-star")}>
          {renderStar(1)}
          {renderStar(2)}
          {renderStar(3)}
          {renderStar(4)}
          {renderStar(5)}
        </div>
      </div>
      <Star2 />
    </>
  );
}

export default RateBtn2;