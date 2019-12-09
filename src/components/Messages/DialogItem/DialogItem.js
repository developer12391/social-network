import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/messages/" + props.id;
    return (
        <div className={s.dialogItem}>

                <img className={s.photo} src="https://n1s1.elle.ru/e6/e3/ce/e6e3ce5ae11cf85372725b6794d12c0a/460x552_21_dca7df6d24684935694b678a722cf2b3@549x432_0xc0a839a4_10433643441469543432.jpeg" alt=""/>
                <NavLink className={s.dialogItemName} to={path} >{props.name}</NavLink>


        </div>
    );
}


export default DialogItem;