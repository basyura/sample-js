import React from 'react';
import './App.css';
import Todos from "./pages/Todos"

function App() {
  return (
    <div>
      <div>
        <ul>
          <li><a href="https://qiita.com/TsutomuNakamura/items/cb3b6109fb21730cd73f">今から始めるReact入門 〜 flux編</a></li>
          <li><a href="https://github.com/TsutomuNakamura/my-react-js-tutorials/tree/master/3-flux">my-react-js-tutorials</a></li>
        </ul>
        <hr/>
      </div>
      <Todos />
    </div>
  );
}

export default App;
