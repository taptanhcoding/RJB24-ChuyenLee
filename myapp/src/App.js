import logo from './logo.svg';
import './App.css';
import image from './assets'

let actors =[
  {
    name: 'Son Goku',
    avatar: require('./assets/goku.jpg'),
    description : 'First introduced as a young boy, Son Goku (孫悟空, Son Gokū) is depicted as immensely strong, pure of heart, and extremely competitive, but dedicated to defending his adopted home Earth from internal or external threats. Although he appears human, it is later revealed that Goku is a Saiyan, and that his original name is Kakarrot',
    link: 'https://en.wikipedia.org/wiki/Goku'
  },
  {
    name: 'Bulma',
    avatar: require('./assets/Bulma.jpg'),
    description : 'Bulma (ブルマ, Buruma) first appears as a teenager using the Dragon Radar, a fictional device she created to detect the energy signal emitted by Dragon Balls. She is led to Goku`s location by the signal emitted by the four-star ball in his possession and recruits him as a bodyguard while hoping to get his four-star ball to grant her wish for a boyfriend.[ch. 1] She gives up on the wish after meeting Yamcha,[ch. 23] and much later in the series, she marries Vegeta. Bulma has also assumed the role of inventor and has consistently provided critical tech support to Goku and his friends with their battles against various enemies and threats throughout the series. Some of her notable innovations include a microband that could make her shrink, and a time machine that brought her son from an alternate future timeline, Trunks, to the past on multiple occasions.',
    link: 'https://en.wikipedia.org/wiki/Bulma'
  },
  {
    name: 'Krillin',
    avatar: require('./assets/Krillin.jpg'),
    description : 'Krillin (クリリン, Kuririn) is a bald martial artist and one of Goku best friends and classmates. He and Goku are under the tutelage of Master Roshi;[ch. 28] initially his rival but later a friend, and a loyal companion in adventures thereafter. He is killed by King Piccolospawn Tambourine, but is later revived by Shenron.[ch. 135, 165] After the fight with the Saiyans, he travels to Planet Namek, where he is killed by Frieza.[ch. 317] After being brought back to life again by the Namekian Dragon Balls,[ch. 329] he helps out during the Android and Cell arcs. He is married to Android 18 and has a daughter, Marron (マーロン, Māron)',
    link: 'https://en.wikipedia.org/wiki/Krillin'
  },
]


function App() {
  return (
    <div className="App" style={{background:`url(${image.background}) top center / cover no-repeat`}}>
      <ul className='content row'>
        {
          actors.map((actor,index) =>(<li key={index} className='col-4'>
                <div className="card" style={{width: '18rem'}}>
                  <img className="card-img-top" src={actor.avatar} alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">{actor.name}</h5>
                    <p className="card-text">{actor.description}</p>
                    <a href={actor.link} className="btn btn-primary">More info</a>
                  </div>
                </div>
              </li>) )
        }
      </ul>
    </div>
  );
}

export default App;
