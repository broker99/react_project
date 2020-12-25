import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postArray = [
    {id : 1 , name : 'Степа Макаров' , message : 'Привет , я родился ' ,date : '10.01.2001 23:00' } ,
    {id : 2 , name : 'Степа Макаров' , message : 'Как дела ' ,date : '10.01.2005 23:00' } ,
    {id : 3 , name : 'Степа Макаров' , message : 'че как ?' , date : '10.01.2056 23:00' },
    {id : 4 , name : 'Степа Макаров' , message : 'Всем пока ' ,date : '10.01.2001 23:00' } ,];


ReactDOM.render(
  <React.StrictMode>
    <App posts={postArray}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
