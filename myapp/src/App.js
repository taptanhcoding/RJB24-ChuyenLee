import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebDemo from "./Components/WebDemo";
import FormSignIn from "./HomeWork/Session07/FormSignIn/FormSignIn";
import TextToVoice from "./HomeWork/Session07/TextToVoice/TextToVoice";
import Weather from "./HomeWork/Session07/Weather/Weather";
import Session08 from "./HomeWork/Session08/Session08";
import logo from "./logo.svg";
import Home from "./pages/Home/Home";
import publicRoutes from "./routes/routes";

let actors = [
  {
    id: 1,
    name: "Son Goku",
    avatar: require("./assets/goku.jpg"),
    description:
      "First introduced as a young boy, Son Goku (孫悟空, Son Gokū) is depicted as immensely strong, pure of heart, and extremely competitive, but dedicated to defending his adopted home Earth from internal or external threats. Although he appears human, it is later revealed that Goku is a Saiyan, and that his original name is Kakarrot",
    link: "https://en.wikipedia.org/wiki/Goku",
  },
  {
    id: 2,
    name: "Bulma",
    avatar: require("./assets/Bulma.jpg"),
    description:
      "Bulma (ブルマ, Buruma) first appears as a teenager using the Dragon Radar, a fictional device she created to detect the energy signal emitted by Dragon Balls. She is led to Goku`s location by the signal emitted by the four-star ball in his possession and recruits him as a bodyguard while hoping to get his four-star ball to grant her wish for a boyfriend.[ch. 1] She gives up on the wish after meeting Yamcha,[ch. 23] and much later in the series, she marries Vegeta. Bulma has also assumed the role of inventor and has consistently provided critical tech support to Goku and his friends with their battles against various enemies and threats throughout the series. Some of her notable innovations include a microband that could make her shrink, and a time machine that brought her son from an alternate future timeline, Trunks, to the past on multiple occasions.",
    link: "https://en.wikipedia.org/wiki/Bulma",
  },
  {
    id: 3,
    name: "Krillin",
    avatar: require("./assets/Krillin.jpg"),
    description:
      "Krillin (クリリン, Kuririn) is a bald martial artist and one of Goku best friends and classmates. He and Goku are under the tutelage of Master Roshi;[ch. 28] initially his rival but later a friend, and a loyal companion in adventures thereafter. He is killed by King Piccolospawn Tambourine, but is later revived by Shenron.[ch. 135, 165] After the fight with the Saiyans, he travels to Planet Namek, where he is killed by Frieza.[ch. 317] After being brought back to life again by the Namekian Dragon Balls,[ch. 329] he helps out during the Android and Cell arcs. He is married to Android 18 and has a daughter, Marron (マーロン, Māron)",
    link: "https://en.wikipedia.org/wiki/Krillin",
  },
];

function App() {
  return (
    <>
      {/* <FormSignIn /> */}
      {/* <TextToVoice /> */}
      {/* <Session08 /> */}
      {/* <Weather /> */}
      {/* <Weather /> */}
      {/* <WebDemo /> */}
      {/* <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Element = route.element;
            return route.children ? (
              <Route key={index} path={route.path} element={<Element />}>
                {route.children.map((child, i) => {
                  const ChildElement = child.element;
                  return (
                    <Route
                      key={i}
                      path={child.path}
                      element={<ChildElement />}
                    />
                  );
                })}
              </Route>
            ) : (
              <Route key={index} path={route.path} element={<Element />} />
            );
          })}
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
