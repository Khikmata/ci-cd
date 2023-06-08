import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';


interface todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}


function App() {
  const [data, setData] = useState<todo[]>([])
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState('');



  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setToggle(state => !state)
  }
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const loadTodos = async () => {
    const response = await axios.get<todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
    setData(response.data)
  }

  useEffect(() => {
    loadTodos();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>hello world</p>
        <input value={value} onChange={handleInput} data-testid="input"></input>
        <button data-testid="toggleBtn" onClick={handleClick} style={{ color: 'red' }}>click</button>
        {
          data.map((item) =>
            <div>
              {item.title}
            </div>)
        }
        {toggle && <div>
          <p>yo</p>
        </div>}
      </header>
    </div>
  );
}

export default App;
