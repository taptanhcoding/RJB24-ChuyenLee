import React, { Component } from "react";
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
export default class LightBox extends Component {
  constructor(props) {
    super(props);
    this.state = { slideActive: 0, slide1L: slide1s, isShow: false };
  }

  setActive = (id) => {
    this.setState({ slideActive: id });
  };

  setStyle = (e) => {
    console.log(e);
  };
  nextSl1 = () => {
    this.setState((prevs) => ({
      slideActive:
        prevs.slideActive + 1 > prevs.slide1L.length - 1
          ? 0
          : prevs.slideActive + 1,
    }));
  };

  prevSl1 = () => {
    this.setState((prevs) => ({
      slideActive:
        prevs.slideActive - 1 < 0
          ? prevs.slide1L.length-1
          : prevs.slideActive - 1,
    }));
  };

  render() {
    return (
      <>
        <div className={cx("slide-item")}>
          <h1 className={cx("head-title")}>
            LIGHTBOX GRID GALLERY{this.state.slideActive}
          </h1>
          <div className={cx("slide", "container")}>
            {/* Hiển thị hình ảnh */}
            <div className={cx("carousel-inner", "position-relative", "row")}>
              {this.state.slide1L.map((slide, index) => (
                <div
                  key={index}
                  className={cx("col-3", "wrap-img")}
                  onClick={() => {
                    this.setState((prevs) => ({ isShow: !prevs.isShow }));
                    this.setActive(index);
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
        <div className={cx("modal",{active : this.state.isShow})}>
          <div
            className={cx("outline")}
            onClick={() => this.setState({isShow: false})}
          ></div>
          <div className={cx("modal-content",'position-relative')}>
            <img
              className={cx("d-block','w-100")}
              src={this.state.slide1L[this.state.slideActive].path}
            />
            <span
              className={cx("btn-trans", "position-absolute", "btn-prevs")}
              onClick={() => this.prevSl1()}
            >
              <GrFormPrevious />
            </span>
            <span
              className={cx("btn-trans", "position-absolute", "btn-next")}
              onClick={() => this.nextSl1()}
            >
              <MdOutlineNavigateNext />
            </span>
          </div>
        </div>
      </>
    );
  }
}
