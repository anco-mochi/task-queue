import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './css/output.css'

import TaskForm from './ts/apps/task_form'

const style = {
  height: "calc(100vh - 2.5rem)"
}

ReactDOM.render(
  <React.StrictMode>
    <body className="m-0">
      <header className="border-b-2 border-gray-400 h-10">
        <h1 className="text-center text-gray-600 text-xl py-1">Task Queue</h1>
      </header>
      <div className="container mx-auto md:w-1/2 border-r border-l border-gray-400 mr-1/2" style={style}>
        <TaskForm/>
      </div>
    </body>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
