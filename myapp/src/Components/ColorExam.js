import ColorItem from "./ColorItem";
import ColorItem2 from "./ColorItem2";

const arrayData = [
    {id:1,name:'Data 01'},
    {id:2,name:'Data 02'},
    {id:3,name:'Data 03'},
]

const arrayColor =[
    {id:1,color:'red'},
    {id:2,color:'blue'},
    {id:3,color:'green'},
]


function ColorExam() {
    return (
        <>
         {arrayData.map((data,index) => <ColorItem2 name={data.name} color={arrayColor[index].color}/>)}
        </>
      );
}

export default ColorExam;