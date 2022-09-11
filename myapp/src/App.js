import logo from './logo.svg';

import Bt01 from './HomeWork/Session01/Bt01'
import Bt1 from './HomeWork/session02/Bt1/Bt1';
import Bt2 from './HomeWork/session02/Bt2/Bt2';
import ColorExam from './Components/ColorExam';
import Bt3 from './HomeWork/session02/Bt3/Bt3';
import ChartBar1 from './HomeWork/session02/ChartBar1/ChartBar1';
import Profile from './HomeWork/session02/Profile/Profile';
import SocialBlock from './HomeWork/session02/SocialBlock/SocialBlock';
import ChartColumn from './HomeWork/session02/ChartColumn/ChartColumn';
import Womans from './HomeWork/session02/Womans/Womans';
import ClassComp from './Components/ClassComp';
import LikeBtn from './HomeWork/session03/LikeBtn/LikeBtn';
import RateBtn from './HomeWork/session03/RateBtn/RateBtn';
import ImageViewer from './HomeWork/session03/ImageViewer/ImageViewer';
import Tabs from './HomeWork/session03/Tabs/Tabs';
import Accordions from './HomeWork/session03/Accordions/Accordions';
import Gallery from './HomeWork/session03/Gallery/Gallery';

let actors =[
  {
    id:1,
    name: 'Son Goku',
    avatar: require('./assets/goku.jpg'),
    description : 'First introduced as a young boy, Son Goku (孫悟空, Son Gokū) is depicted as immensely strong, pure of heart, and extremely competitive, but dedicated to defending his adopted home Earth from internal or external threats. Although he appears human, it is later revealed that Goku is a Saiyan, and that his original name is Kakarrot',
    link: 'https://en.wikipedia.org/wiki/Goku'
  },
  {
    id:2,
    name: 'Bulma',
    avatar: require('./assets/Bulma.jpg'),
    description : 'Bulma (ブルマ, Buruma) first appears as a teenager using the Dragon Radar, a fictional device she created to detect the energy signal emitted by Dragon Balls. She is led to Goku`s location by the signal emitted by the four-star ball in his possession and recruits him as a bodyguard while hoping to get his four-star ball to grant her wish for a boyfriend.[ch. 1] She gives up on the wish after meeting Yamcha,[ch. 23] and much later in the series, she marries Vegeta. Bulma has also assumed the role of inventor and has consistently provided critical tech support to Goku and his friends with their battles against various enemies and threats throughout the series. Some of her notable innovations include a microband that could make her shrink, and a time machine that brought her son from an alternate future timeline, Trunks, to the past on multiple occasions.',
    link: 'https://en.wikipedia.org/wiki/Bulma'
  },
  {
    id:3,
    name: 'Krillin',
    avatar: require('./assets/Krillin.jpg'),
    description : 'Krillin (クリリン, Kuririn) is a bald martial artist and one of Goku best friends and classmates. He and Goku are under the tutelage of Master Roshi;[ch. 28] initially his rival but later a friend, and a loyal companion in adventures thereafter. He is killed by King Piccolospawn Tambourine, but is later revived by Shenron.[ch. 135, 165] After the fight with the Saiyans, he travels to Planet Namek, where he is killed by Frieza.[ch. 317] After being brought back to life again by the Namekian Dragon Balls,[ch. 329] he helps out during the Android and Cell arcs. He is married to Android 18 and has a daughter, Marron (マーロン, Māron)',
    link: 'https://en.wikipedia.org/wiki/Krillin'
  },
]



function App() {
  return (
      <>
      {/* <Bt1/> */}
      {/* <Bt2 /> */}
      {/* <Bt3/> */}
      {/* <ChartBar1 /> */}
      {/* <Profile /> */}
      {/* <SocialBlock/> */}
      {/* <ChartColumn/> */}
      {/* <Womans /> */}
      {/* <ClassComp /> */}
      {/* -Session3-  */}
      {/* <LikeBtn /> */}
      {/* <RateBtn/> */}
      {/* <ImageViewer /> */}
      {/* <Tabs /> */}
      {/* <Accordions /> */}
      <Gallery />
      </>
  );
}

export default App;
