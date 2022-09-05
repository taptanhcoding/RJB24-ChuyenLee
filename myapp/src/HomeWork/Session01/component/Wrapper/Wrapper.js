import image from '../../../../assets'
import './Wrapper.css'

function Wrapper({ children }) {
  return (
    <div
      className="App"
      style={{
        background: `url(${image.background}) top center / cover no-repeat`,
      }}
    >
      {children}
    </div>
  );
}

export default Wrapper;
