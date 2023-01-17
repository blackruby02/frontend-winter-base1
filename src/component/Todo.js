import React from 'react'
import './../App.css';

const Todo = (props) => {
  console.log(props);
  return (
    // JSX 문법 : {} 안에 JS 요소를 넣음. {} 가 아니면 html 의 글자로 인식
    <div className='todo'>{props.name}</div>
  )
}

export default Todo