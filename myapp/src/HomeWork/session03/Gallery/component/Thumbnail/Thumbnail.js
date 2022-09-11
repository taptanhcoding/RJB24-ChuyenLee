import React, { Component } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

import classNames from "classnames/bind";
import styles from "./Thumbnail.module.scss";
import { slides1 } from "../../img-sl";

const slide1s = [
  {
    id: 1,
    path: slides1.img1,
  },
  {
    id: 2,
    path: slides1.img2,
  },
  {
    id: 3,
    path: slides1.img3,
  },
  {
    id: 4,
    path: slides1.img4,
  },
];
const cx = classNames.bind(styles);
export default class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = { slideActive: 0, slide1L: slide1s };
  }

  componentDidMount() {
    this.time = setInterval(this.nextSl1, 3000);

  }
  componentDidUpdate() {
    this.time = setInterval(this.nextSl1, 3000);
  }

  nextSl1 = () => {
    this.setState((prevs) => ({
      slideActive:
        prevs.slideActive + 1 > prevs.slide1L.length - 1
          ? 0
          : prevs.slideActive + 1,
    }));
    clearInterval(this.time);
  };

  prevSl1 = () => {
    this.setState((prevs) => ({
      slideActive:
        prevs.slideActive - 1 < 0
          ? prevs.slide1L.length-1
          : prevs.slideActive - 1,
    }));
    clearInterval(this.time);
  };

  thisSl = (id) => {
    this.setState({ slideActive: id });
    clearInterval(this.time);
  };

  render() {
    return (
      <>
        <div className={cx("slide-item")}>
          <h1 className={cx("head-title")}>
          SLIDER THUMBNAIL CONTROLS {this.state.slideActive}
          </h1>
          <div className={cx("slide")}>
            {/* Hiển thị hình ảnh */}
            <div className={cx('wrapper-slide')}>
              <div className={cx("carousel-inner", "position-relative",'img-list')} style={{transform: `translate3d(-${this.state.slideActive*940}px, 0px, 0px)`}}>
                {this.state.slide1L.map((slide) => (
                  <div key={slide.id} className={cx("slide-img",{
                    active:
                      slide.id ===
                      this.state.slide1L[this.state.slideActive].id,
                  })}>
                    <img className={cx("d-block','w-100")} src={slide.path} />
                  </div>
                ))}
              </div>
            </div>
            {/* Chỉ báo băng truyền */}
            <ol className={cx("carousel-index")}>
              {this.state.slide1L.map((slide) => (
                <li
                  onClick={() => this.thisSl(slide.id - 1)}
                  key={slide.id}
                  className={cx("carousel-box", {
                    active:
                      slide.id ===
                      this.state.slide1L[this.state.slideActive].id,
                  })}
                >
                  <img src={slide.path} />

                </li>
              ))}
            </ol>
            
            {/* Nút bấm chuyển ảnh */}
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
