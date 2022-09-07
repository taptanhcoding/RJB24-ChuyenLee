import Column from "../Column/Column";
import styles from "./ChartColumnItem.module.scss";
import classnames from "classnames/bind";


const cx =  classnames.bind(styles)
function ChartColumnItem({ text, total, percentages }) {
  return <div className={cx('wrapper')}>
    <div className={cx('text')}>
        <p className={cx('title')}>{text}</p>
        <p className={cx('total')}>{total}</p>
    </div>
    <div className={cx('column')}>
        {percentages.map((percentage,i) => <Column idColumn={i} key={i} className={cx('cl')} percentage={percentage}/> )}
    </div>
  </div>;
}

export default ChartColumnItem;
