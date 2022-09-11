import React, { Component } from "react";
import { BiLike } from "react-icons/bi";
import { AiTwotoneLike } from "react-icons/ai";

import classnames from "classnames/bind";
import styles from "./LikeBtn.module.scss";

const cx = classnames.bind(styles);

export default class LikeBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { isLike: false };
  }

  componentDidUpdate() {
    // console.log(this.state.isLike);
  }

  like = () => {
    this.setState((prevs) => ({ isLike: !prevs.isLike }));
  };

  render() {
    return (
      <>
        <div onClick={() => this.like()}>
            {!this.state.isLike ? (<BiLike
            className={cx("like")}
          />) : (<AiTwotoneLike
            
            className={cx("like-true",'like')}
          />) }
          
        </div>
      </>
    );
  }
}
