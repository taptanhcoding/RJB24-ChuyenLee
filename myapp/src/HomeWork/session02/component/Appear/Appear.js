import styles from "./Appear.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

function Appear({ percentage, type, text = false ,className}) {
  return (
    <div className={cx("appear",className)}>
      <div
        style={{ transform: `scaleX(${percentage / 100})` }}
        className={cx("cover", type)}
      ></div>
      {text && <p className={cx("percent")}>{percentage} %</p>}
    </div>
  );
}

export default Appear;
