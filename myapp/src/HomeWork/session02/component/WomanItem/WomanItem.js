import { HiShoppingCart } from "react-icons/hi";
import classNames from "classnames/bind";
import styles from "./WomanItem.module.scss";

const cx = classNames.bind(styles);
function WomanItem({ data }) {
  return (
    <div className={cx("card", "wrapper")} style={{ width: "18rem" }}>
      <img className={cx("card-img-top")} src={data.img} alt="Card image cap" />
      <div className={cx("card-body")}>
        <h5 className={cx("card-title", "name")}>{data.name}</h5>
        <p className={cx("card-text", "description")}>{data.description}</p>
        <p className={cx("card-text", "size")}>{data.size.join("/")}</p>
        {data.new_price ? (
          <p className={cx("card-text", "price")}>${data.new_price}<span className={cx('line')}> ${data.price}</span></p>
        ) : (
          <p className={cx("card-text", "price")}>${data.price}</p>
        )}

        <button type="button" className={cx("btn","btn-success",'button')}>
          <HiShoppingCart /> Add to cart
        </button>
      </div>
    </div>
  );
}

export default WomanItem;
