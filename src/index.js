import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import List from './components/List';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';

ReactDOM.render(
  <Router>
      <div>
          <Route render ={()=> < App />} path="/" />
          <Route render ={()=> < List />} path="/list" />
          <Route render ={()=> < Edit />} path="/edit/:id" />
          <Route render ={()=> < Create />} path="/create" />
          <Route render ={()=> < Show />} path="/show/:id" />
      </div>
  </Router>, document.getElementById('root'));


/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
