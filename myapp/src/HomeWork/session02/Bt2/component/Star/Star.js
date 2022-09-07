import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as starSolid } from '@fortawesome/free-solid-svg-icons'
import styles from "./Star.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const stars = [
    {icon : faStar},
    {icon : faStar},
    {icon : faStar},
    {icon : faStar},
    {icon : faStar},
]

function Star(props) {
  return <div className={cx("wrapper",'d-flex','flex-row','justify-content-start','mt-2')}>
    <div className={cx('w-star')}>
        {
            stars.map((star,index) => <FontAwesomeIcon key={index} icon={ index < props.star ? starSolid : faStar} className={cx('icon',{'active': index<props.star})}/>)
        }
    </div>
    <span className={cx('w-num','ml-1')}>{props.num}</span>
  </div>;
}

export default Star;
