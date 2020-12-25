
import profileStyle from "./profile.module.css";

let Profile = () =>{
    return(
        <div className={profileStyle.content}>

            <div className={profileStyle.headImage}>
                <img src='https://img4.goodfon.ru/original/2048x1365/5/8a/les-derevia-svet-luchi-2.jpg'/>
            </div>

            <div className={profileStyle.avatarProfile}>
                <img src = 'https://pbs.twimg.com/profile_images/554101694967971841/xyddgp67.jpeg'/>
            </div>

            <div className={profileStyle.descProfile}>
                <h3>Степа Макаров</h3>
                <p>Россия , Королев</p>
                <p>тупопочта@.ру</p>
                <p>8-8000-55-3284</p>
            </div>




        </div>
    )
}


export default Profile;
