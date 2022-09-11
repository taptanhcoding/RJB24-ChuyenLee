import React, { Component } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

import classNames from "classnames/bind";
import styles from "./Gallery.module.scss";
import Standard from "./component/Standard/Standard";
import Thumbnail from "./component/Thumbnail/Thumbnail";
import LightBox from "./component/LightBox/LightBox";


const cx = classNames.bind(styles);
export default class Gallery extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <>
      <Standard />
      <Thumbnail />
      <LightBox />
      </>
    );
  }
}
