import React from 'react'
import Profile from "./profile";
import Post from './posts'
import "./profile-wrapper .css";

let ProfileWrapper = (props) =>{

    // let postArray = [
    //     {id : 1 , name : 'Степа Макаров' , message : 'Привет , я родился ' ,date : '10.01.2001 23:00' } ,
    //     {id : 2 , name : 'Степа Макаров' , message : 'Как дела ' ,date : '10.01.2005 23:00' } ,
    //     {id : 3 , name : 'Степа Макаров' , message : 'че как ?' , date : '10.01.2056 23:00' },
    //     {id : 4 , name : 'Степа Макаров' , message : 'Всем пока ' ,date : '10.01.2001 23:00' } ,];

    let postElements = props.posts.map(
        (el) => (
            <Post id ={el.id} name = {el.name} message = {el.message} date ={el.date}/>
        )


    )

    return(
        <div>
            <Profile/>

            <div className='divMyPosts'>
                <textarea></textarea>
                <h2>МОИ ПОСТЫ</h2>
            </div>

            {postElements}       

        </div>
    )
}


export default ProfileWrapper;
