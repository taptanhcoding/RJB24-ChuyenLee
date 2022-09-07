import styles from './Bt1.module.scss'
import classnames from 'classnames/bind'
import image from './1.jpg'

const cx=classnames.bind(styles)
function Bt1(props) {
    return (
    <div className={cx('wrapper','row')}>
        <div className={cx('img')}>
            <img src= {image} />
        </div>
        <div className={cx('content-img')} >
            <h2 className={cx('title-img')}>Clothing &#38; Apparel </h2>
            <ul className={cx('list')}>
                <li className={cx('item')}>Accessories</li>
                <li className={cx('item')}>Bags</li>
                <li className={cx('item')}>Kid fashion</li>
            </ul>
        </div>
    </div>  
    );
}

export default Bt1;