import image from '../../../../assets'
import styles from'./Wrapper.module.scss'
import classnames from 'classnames/bind';

const cx=classnames.bind(styles)
function Wrapper({ children }) {
  return (
    <div
      className={cx("App")}
      style={{
        background: `url(${image.background}) top center / cover no-repeat`,
      }}
    >
      {children}
    </div>
  );
}

export default Wrapper;
