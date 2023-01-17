import logo from './logo.svg';
import './App.css';
import Todo from './component/Todo';

function App() {
  return (
    <div className="App">
      <h1>My Todo List</h1>
      <div className='input-area'>
        <input className="input-box" type="text" placeholder='오늘의 할일을 적어보세요'/>
        <button className='button'>확인</button>
      </div>
    <Todo name='빨래 하기'/>
    <Todo name='과제 하기'/>
    <Todo name='숙제 하기'/>
    </div>
  );
}

export default App;
