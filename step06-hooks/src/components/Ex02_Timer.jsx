import React from 'react'
import { useEffect } from 'react'

function Ex02_Timer() {

    useEffect(()=>{
        const timeStop = setInterval(()=>{
            console.log("타이머가 실행중입니다.");
         } , 1000);


        //unmount될때 해야할 일이 있따면 return에 콜백함수선언
         return ()=>{
            console.log("자원을 정리합니다.");

            clearInterval(timeStop);
         }

    },[]);
  return (
    <div>
        Ex02_Timer - 타이머를 시작합니다.(콘솔확인) 
    </div>
  )
}

export default Ex02_Timer