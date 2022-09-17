import React, { Component } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

import classNames from "classnames/bind";
import styles from "./Gallery.module.scss";
import Standard from "./component/Standard2/Standard2";
import Thumbnail from "./component/Thumbnail2/Thumbnail2";
import LightBox2 from "./component/LightBox2/LightBox2";
import Standard2 from "./component/Standard2/Standard2";
import Thumbnail2 from "./component/Thumbnail2/Thumbnail2";


const cx = classNames.bind(styles);
function Gallery2() {
  return (
    <>
    {/* <Thumbnail /> */}
    {/* <LightBox2 /> */}
    {/* <Standard2 /> */}
    <Thumbnail2 />
    </>
  );
}

export default Gallery2;
