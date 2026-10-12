import React from 'react'

function Ex01_Map() {
  //배열선언
  const items = ["짬뽕","짜장","탕수육","짬짜면","깐풍기"];


  return (
    <div>
        기본 배열 map사용하기
        <ul>
         {
            items.map((item, index)=>{
               return <li key={index}>{item}</li>
            })
         }
         </ul>
    </div>
     
    
    )
}

export default Ex01_Map