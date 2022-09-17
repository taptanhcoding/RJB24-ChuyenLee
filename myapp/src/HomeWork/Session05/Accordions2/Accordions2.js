import React, { Component, useState } from "react";

import classNames from "classnames/bind";
import styles from "./Accordions.module.scss";
const accordions = [
  {
    id: 1,
    title: "Simple Panels",
    descript:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    title: "Toggle Information",
    descript:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    title: "Nice Touch",
    descript:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
const cx = classNames.bind(styles);


function Accordions2() {
  const [isOne,setOne] = useState()
  const [isMt,setMt] = useState([])
  const oneActive = (id) => {
    this.setState({isOne : id})
  }

  const toggleMt = (id) => {
    if(this.state.isMt.includes(id)) {
      this.setState((prevs) => ({isMt : prevs.isMt.filter(prev => prev != id)}))
    }
    else {
      this.setState((prevs) =>({isMt : [...prevs.isMt,id]}))
    }
  }
  return (
    <>
      <div className="row">
        <div className={cx("col-6")}>
          <h1 className={cx("title-ac")}>ONE AT A TIME</h1>
          <ul className="list-group">
            {accordions.map((post) => (
              <li onClick={() =>  setOne(post.id)} key={post.id} className={cx("list-group-item",'padding-0',{activeOne : post.id == this.state.isOne})}>
                <div className={cx("list-group-item",'title-head')}>{post.title}</div>
                <div className={cx('description')}>{post.descript}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className={cx("col-6")}>
          <h1 className={cx("title-ac")}>MULTIPLE OPEN</h1>
          <ul className="list-group"> 
            {accordions.map((post) => (
              <li onClick={() => this.toggleMt(post.id)} key={post.id} className={cx("list-group-item",'padding-0',{activeOne: this.state.isMt.includes(post.id)})} >
                <div className={cx("list-group-item",'title-head')}>{post.title}</div>
                <div className={cx('description')}>{post.descript}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Accordions2;