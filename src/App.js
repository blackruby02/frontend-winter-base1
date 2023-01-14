import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Todo List</h1>
      <div className='input-area'>
        <input className="input-box" type="text" placeholder='오늘의 할일을 적어보세요'/>
        <button className='button'>확인</button>
      </div>
      <div className='todo-area'>
        <div className='todo'>빨래 하기</div>
        <div className='todo'>숙제 하기</div>
        <div className='todo'>과제 하기</div>
      </div>
    </div>
  );
}

export default App;
