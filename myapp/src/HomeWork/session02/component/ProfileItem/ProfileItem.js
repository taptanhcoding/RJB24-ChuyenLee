import styles from "./ProfileItem.module.scss";
import classnames from "classnames/bind";
import Appear from "../Appear/Appear";

const cx = classnames.bind(styles);
function ProfileItem({
  type='primary',
  percentage,
  icon,
  children,
}) {
  const Icon = icon
  return (
    <div className={cx('m-4')}>
        <div className={cx("wrapper")}>
          <div className={cx("title")}>
            <div className={cx('box-icon','mr-3',type)}><Icon /></div>
            <p>{children}</p>
          </div>
          <div className={cx('w-per')}><Appear className={cx('b-radius')} type={type} percentage={percentage} /></div>
          
        </div>
    </div>
  );
}

export default ProfileItem;
