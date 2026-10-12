
import { useState } from 'react';
import { useEffect } from 'react'

function Ex01_Effect() {
    const [no, setNo] = useState(0);
    const [str, setStr] = useState("");

    useEffect(()=>{
        console.log("1. useEffect call - mount될때 호출됨");
    });

     useEffect(()=>{
        console.log("2. useEffect call -최초 mount될때 딱 한번 호출됨");
    } ,[]);


     useEffect(()=>{
        console.log("3. useEffect call -no가 변경될만 호출됨");
    } ,[no]);

      useEffect(()=>{
        console.log("4. useEffect call -no 또는 str 변경될만 호출됨");
    } ,[no, str]);

  return (
    <>
    <h3>useEffect 연습하기 </h3>
    <h4>no:{no} </h4>
    <button onClick={()=>setNo(no+1)}>클릭1</button>
    <hr/>
    <h4>str:{str} </h4>
    <button onClick={()=>setStr((pre)=>pre+"A")}>클릭2</button>

    </>
    
  )
}

export default Ex01_Effect