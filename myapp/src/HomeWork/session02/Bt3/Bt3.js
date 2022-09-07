import styles from './Bt3.module.scss'
import classnames from 'classnames/bind'
import image from './3.jpg'
import Image from '../component/Image/Image'

const cx=classnames.bind(styles)
function Bt3(props) {
    return (
    <div className={cx('wrapper','row','flex-column')}>
        <div className={cx('img')}>
            <Image src= {image} />
        </div>
        <div className={cx('content-img')} >
            <h3 className={cx('title-1')}>Technology</h3>
            <h2 className={cx('title-img')}>Harman Kadon Onyx Studio Mini, Review &#38; Experiences </h2>
            <span className={cx('title-1')}>Feb 21, 2021 by <span className={cx('by')}>drfurion</span></span>
        </div>
    </div>  
    );
}

export default Bt3;