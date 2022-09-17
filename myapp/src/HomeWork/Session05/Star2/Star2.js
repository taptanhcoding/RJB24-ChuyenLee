import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as starSolid } from "@fortawesome/free-solid-svg-icons";
import styles from "./Star.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";

const cx = classNames.bind(styles);

const stars = [
  { icon: faStar },
  { icon: faStar },
  { icon: faStar },
  { icon: faStar },
  { icon: faStar },
];

function Star2(props) {
  const [rate, setRate] = useState(0);

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
        {stars.map((star, index) => (
          <FontAwesomeIcon
            onClick={() => setRate(index+1)}
            key={index}
            icon={index+1 <= rate ? starSolid : faStar}
            className={cx("icon", { active: index+1 <= rate })}
          />
        ))}
      </div>
      {props.num && <span className={cx("w-num", "ml-1")}>{props.num}</span>}
    </div>
  );
}

export default Star2;
