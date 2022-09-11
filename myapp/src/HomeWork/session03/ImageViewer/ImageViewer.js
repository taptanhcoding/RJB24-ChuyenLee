import React, { Component } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

import { images } from "./image";
import classNames from "classnames/bind";
import styles from "./ImageViewer.module.scss";

const cx = classNames.bind(styles);
export default class ImageViewer extends Component {
  constructor(props) {
    super(props);
    this.state = { imgActive: 0, path: "" ,num : 0};
  }
  componentDidMount() {
    // console.log(document.getElementsByClassName("img")[0].src);
    this.setState({path : document.getElementsByClassName("img")[0].src,num: document.getElementsByClassName("img").length})
  }

  next = () => {
    if(this.state.imgActive < this.state.num -1)
    this.setState((prevs) => ({imgActive : prevs.imgActive + 1 ,path: document.getElementsByClassName("img")[prevs.imgActive + 1].src}))
  }

  prev = () => {
    if(this.state.imgActive > 0)
    this.setState((prevs) => ({imgActive : prevs.imgActive - 1 ,path: document.getElementsByClassName("img")[prevs.imgActive - 1].src}))

  }

  choise = (i,pathI) => {
    this.setState((prevs) => ({imgActive :  i,path: pathI }))
  }

  render() {
    return (
      <div
        className={cx("card", "position-relative")}
        style={{ width: "18rem" }}
      >
        <img className={cx("card-img-top")} src={this.state.path} />
        <span className={cx("btn", "position-absolute", "btn-next", {notable : this.state.imgActive == this.state.num -1})} onClick={this.next}>
          <MdOutlineNavigateNext />
        </span>
        <span className={cx("btn", "position-absolute", "btn-prev",{notable : this.state.imgActive == 0})} onClick={this.prev}>
          <GrFormPrevious />
        </span>
        <div className={cx("card-body", "border-top")}>
          <ul className={cx("list-image")}>
            {Object.keys(images).map((pathI, i) => (
              <li
                onClick={() => this.choise(i,images[pathI])}
                className={cx("img-item", {
                  active: i == this.state.imgActive,
                })}
                key={i}
              >
                <img
                  className={cx("img")}
                  src={images[pathI]}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
