import React from 'react'
import profilePosts from './posts.module.css'

let Post = (props) => {
    return(
        <div className={profilePosts.postContent}>
            <div className={profilePosts.avatar}>
                <img src='https://pbs.twimg.com/profile_images/554101694967971841/xyddgp67.jpeg'/>
                <div>
                    <h3>
                        {props.name}
                    </h3>
                </div>
            </div>

            <div className={profilePosts.post}>
               <p>
                   {props.message}
               </p>

            </div>

            <div className={profilePosts.postInfo}>
                <p>{props.date}</p>
            </div>
        </div>
    )
}

export default Post ;