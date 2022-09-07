import styles from './Image.module.scss'
import classnames from 'classnames/bind'
import image from './1.jpg'

const cx=classnames.bind(styles)
function Image(props) {
    return (
        <img {...props}  />
    );
}

export default Image;