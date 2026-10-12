
import Item from './Item';
import a from '../assets/images/a.png';
import b from '../assets/images/b.jpg';
import c from '../assets/images/c.png';
import d from '../assets/images/d.jpg';

import './Ex05_Product.css';

const Ex05_Product = () => {
  const items=[
    {id:1 , imgName: a , text:"당도선별 11brix" , price:"25,000"},
    {id:2 ,imgName: b , text:"국내산 프리미엄" , price:"35,000"},
    {id:3 ,imgName: c , text:"13brix 100%국내산" , price:"27,000"},
    {id:4 ,imgName: d , text:"고당도 참박수박" , price:"35,000"},
    {id:5 ,imgName: a , text:"13brix 100%국내산" , price:"25,000"},
    {id:6 ,imgName: b , text:"당도선별 11brix" , price:"27,000"},
  ];
  return (
    <div id="product">
       <h3>오늘의 상품</h3>
       <p>새로운 상품을 만나보세요</p>
        {
          items.map((item)=><Item key={item.id} imgName={item.imgName} text={item.text} price={item.price}/>)
        }
    
        <hr />
       {
          items.map((item)=><Item key={item.id}  {...item} />)
        }
       
    </div>
  );
};

export default Ex05_Product;