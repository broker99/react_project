import React from 'react'
import dialogs from "./dialogs.module.css";
import DialogItem from "./dialogItem";

let Dialogs = () =>{

     let dialogItemsArray = [
         {id: 1 , name:'Sasha'},
         {id: 2 , name:'Misha'},
         {id: 3 , name:'Masha'},
         {id: 4 , name:'Natasha'},
         {id: 5 , name:'Pasha'}
     ]

    let dialogsItem = dialogItemsArray.map(
        (el) => {
            return(
                <DialogItem id = {el.id} name = {el.name}/>
            )
        }
    )

    return(
        <div className={dialogs.content}>
            <div className={dialogs.dialogsItems}>
                {dialogsItem}
            </div>

            <div className={dialogs.messages}>

            </div>
        </div>
    )
}


export default Dialogs;
