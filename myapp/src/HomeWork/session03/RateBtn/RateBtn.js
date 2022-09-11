import React, { Component } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styles from "./RateBtn.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const stars = [1,2,3,4,5];

export default class RateBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { isRate: 0 };
  }

 componentDidUpdate() {
  console.log(this.state.isRate);
 }

  renderStar = (id) => {
    return <div onClick={() => this.setState({isRate : id})}>{id<= this.state.isRate ?(<AiFillStar className={cx('active')}/>) : (<AiOutlineStar />)}</div>
  }

  render() {
    return (
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
          { this.renderStar(1)}
          { this.renderStar(2)}
          { this.renderStar(3)}
          { this.renderStar(4)}
          { this.renderStar(5)}
        </div>
      </div>
    );
  }
}
