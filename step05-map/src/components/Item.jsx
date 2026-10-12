import './Item.css';

// const Item = (props) => {
//   return (
//     <div className="box">
     
//       <img src={props.imgName} alt="수박"/>
      
//      <h5>{props.text}</h5>
//      <span>{props.price}원</span>
//     </div>
//   );
// };


const Item = ({imgName, text, price}) => {
  return (
    <div className="box">
     
      <img src={imgName} alt="수박"/>
       <h5>{text}</h5>
       <span>{price}원</span>
    </div>
  );
};

export default Item;