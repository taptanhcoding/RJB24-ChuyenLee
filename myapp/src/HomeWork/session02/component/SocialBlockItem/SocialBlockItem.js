import styles from "./SocialBlockItem.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);
function SocialBlockItem({Icon,unit,children,color}) {
    
  return (
    <>
      <div className={cx("wrapper")} style={{backgroundColor : color}}>
        <div className={cx('icon')}><Icon /></div>
        <div className={cx('content')}>
            <p className={cx('text')}>{children}</p>
            <p className={cx('unit')}>{unit}</p>
        </div>
      </div>
    </>
  );
}

export default SocialBlockItem;
