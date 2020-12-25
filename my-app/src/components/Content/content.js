import React from 'react'
import {Route , Switch } from 'react-router-dom';
import contentProfile from "./content.module.css";
import ProfileWrapper from "./Profile/profile-wrapper";
import Dialogs from "./Dialogs/dialogs";
import Communities from "./Community/сommunity";
import News from "./News/news";


let Content = (props) => {

    // let postArray = [
    //     {id : 1 , name : 'Степа Макаров' , message : 'Привет , я родился ' ,date : '10.01.2001 23:00' } ,
    //     {id : 2 , name : 'Степа Макаров' , message : 'Как дела ' ,date : '10.01.2005 23:00' } ,
    //     {id : 3 , name : 'Степа Макаров' , message : 'че как ?' , date : '10.01.2056 23:00' },
    //     {id : 4 , name : 'Степа Макаров' , message : 'Всем пока ' ,date : '10.01.2001 23:00' } ,];

    return (
        <div className={contentProfile.content}>
            <Switch>
                <Route path='/profile' render={() => <ProfileWrapper posts={props.posts}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/dialogs' component={Dialogs}/>
                <Route path='/communities' component={Communities}/>
            </Switch>
        </div>
    )
}
export default Content;
