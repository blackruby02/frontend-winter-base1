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
      <Todo/>
      <Todo/>
      <Todo/>
    </div>
  );
}

export default App;
