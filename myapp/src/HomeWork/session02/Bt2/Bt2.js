import styles from './Bt2.module.scss'
import classnames from 'classnames/bind'
import image from './2.jpg'
import Star from './component/Star/Star';

const cx=classnames.bind(styles)
function Bt2(props) {
    return (
    <div className={cx('wrapper','row','flex-column')}>
        <div className={cx('img')}>
            <img src= {image} />
        </div>
        <div className={cx('content-img')} >
            <p className={cx('title')}>Young shop</p>
            <a href='' className={cx('product-name')}>Samsung UHD TV 56inch</a>
            <div className={cx('aval')}>
                <Star star={3} num={16}/>
            </div>
            <p className={cx('price','mt-2')}>$599</p>
        </div>
    </div>  
    );
}

export default Bt2;