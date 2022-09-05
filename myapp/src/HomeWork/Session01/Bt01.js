import Item from "./component/Item/Item";
import Wrapper from "./component/Wrapper/Wrapper";

const colorL = (value) => value.id%2 == 0 ? {color:'red'}:{color:'blue'}

function Bt01({actors}) {
  return (
    <Wrapper>
        <ul className='content row'>
          {
            actors.map((actor,index) =>(<li key={index} className='col-4'>
                  <Item actor={actor}/>
                </li>) )
          }
        </ul>
      </Wrapper>
  );
}

export default Bt01;
