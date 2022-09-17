import React, { Component, useState } from "react";

import classNames from "classnames/bind";
import styles from "./Tabs.module.scss";

const tabs = [
  {
    title: "HISTORY",
    description:
      "1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam temporibus, aliquid nobis asperiores delectus, recusandae fugiat ducimus laborum reiciendis accusantium commodi est facere sed optio cumque iure? Magnam incidunt minima eveniet officia repellendus quod, distinctio culpa doloribus facilis soluta aperiam assumenda quisquam voluptatibus maiores nisi temporibus possimus eum eaque hic?",
  },
  {
    title: "approach",
    description:
      "2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam temporibus, aliquid nobis asperiores delectus, recusandae fugiat ducimus laborum reiciendis accusantium commodi est facere sed optio cumque iure? Magnam incidunt minima eveniet officia repellendus quod, distinctio culpa doloribus facilis soluta aperiam assumenda quisquam voluptatibus maiores nisi temporibus possimus eum eaque hic?",
  },
  {
    title: "culture",
    description:
      "3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam temporibus, aliquid nobis asperiores delectus, recusandae fugiat ducimus laborum reiciendis accusantium commodi est facere sed optio cumque iure? Magnam incidunt minima eveniet officia repellendus quod, distinctio culpa doloribus facilis soluta aperiam assumenda quisquam voluptatibus maiores nisi temporibus possimus eum eaque hic?",
  },
  {
    title: "method",
    description:
      "4 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam temporibus, aliquid nobis asperiores delectus, recusandae fugiat ducimus laborum reiciendis accusantium commodi est facere sed optio cumque iure? Magnam incidunt minima eveniet officia repellendus quod, distinctio culpa doloribus facilis soluta aperiam assumenda quisquam voluptatibus maiores nisi temporibus possimus eum eaque hic?",
  },
];

const cx = classNames.bind(styles);


function Tabs2() {
  const [keyActive,setActive] = useState(0)

  return (
    <>
      <ul className={cx("nav", "nav-tabs", "justify-content-center")}>
        {tabs.map((tab, index) => (
          <li key={index} className={cx("nav-item")}>
            <a
              onClick={() =>setActive(index)}
              className={cx("nav-link", "btn-tab", {
                active: index == keyActive,
              })}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <div className={cx("desc")}>
              {tabs.map((tab,index) => <div key={index} className={cx('content',{activect : index == keyActive})}><p>{tab.description}</p></div>)}

      </div>
    </>
  );
}

export default Tabs2;