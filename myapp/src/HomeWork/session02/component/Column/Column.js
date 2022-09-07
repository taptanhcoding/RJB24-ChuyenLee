import styles from "./Column.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

function Column({ percentage ,className,idColumn}) {
  const type = `color-${idColumn}`
  return (
    <div className={cx("appear")}>
      <div
        style={{ transform: `scaleY(${percentage / 100})` }}
        className={cx("cover",className,type )}
      ></div>
    </div>
  );
}

export default Column;
