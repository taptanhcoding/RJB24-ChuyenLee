import WomanItem from '../component/WomanItem/WomanItem'
import {imgs} from './block-ui-6-images'


const womans = [
    {
        name: 'eodem modo typi',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        size:['X','XXL','S'],
        price: 25,
        new_price: '',
        img: imgs.img1
    },
    {
        name: 'eodem modo typi',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        size:['X','XXL','S'],
        price: 25,
        new_price: '',
        img: imgs.img2
    },
    {
        name: 'eodem modo typi',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        size:['X','XXL','S'],
        price: 25,
        new_price: '',
        img: imgs.img3
    },
    {
        name: 'eodem modo typi',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        size:['X','XXL','S'],
        price: 75,
        new_price: 25,
        img: imgs.img4
    },
]

function Womans() {
    return ( <div className='d-flex'>
    {womans.map((woman,i) => <WomanItem  data={woman}/>)}
    </div> );
}

export default Womans;