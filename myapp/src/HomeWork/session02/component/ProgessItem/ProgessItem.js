import styles from "./ProgessItem.module.scss";
import classnames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import Appear from "../Appear/Appear";

const cx = classnames.bind(styles);
function ProgessItem({
  type='primary',
  percentage,
  children,
}) {
  const [scale,setScale] = useState(1)
  useEffect(() => {
    let a = percentage/100
    setScale(a)
  }, [scale]);
  return (
    <div className={cx('m-4')}>
        <div className={cx("wrapper")}>
          <div className={cx("title", type)}>
            <p>{children}</p>
          </div>
          <Appear type={type} percentage={percentage} text/>
          
        </div>
    </div>
  );
}

export default ProgessItem;
