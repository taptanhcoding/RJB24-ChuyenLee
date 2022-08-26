import logo from './logo.svg';
import './App.css';
import image from './assets'

function App() {
  return (
    <div className="App" style={{background:`url(${image.background}) top center / cover no-repeat`}}>
      <div className='content'>
        <div>
          <h1>Lê Công Chuyện</h1>
          <h2>Fullstack developer</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
