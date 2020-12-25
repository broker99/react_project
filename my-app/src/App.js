import React from 'react'
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Content from "./components/Content/content";
import {BrowserRouter} from "react-router-dom";

const App = (props) => {
    let postArray = [
        {id : 1 , name : 'Степа Макаров' , message : 'Привет , я родился ' ,date : '10.01.2001 23:00' } ,
        {id : 2 , name : 'Степа Макаров' , message : 'Как дела ' ,date : '10.01.2005 23:00' } ,
        {id : 3 , name : 'Степа Макаров' , message : 'че как ?' , date : '10.01.2056 23:00' },
        {id : 4 , name : 'Степа Макаров' , message : 'Всем пока ' ,date : '10.01.2001 23:00' } ,];

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <Content posts={postArray}/>
            </div>
        </BrowserRouter>
    )
}


export default App;
