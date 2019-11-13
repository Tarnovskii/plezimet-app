import React from 'react'
import {NavLink} from "react-router-dom";
import s from '../stylesheets/header.module.css'
import logo from '../logo.png'

export const Header = (props) => {
    return (
        <div className={s.cap} style={{background: `rgba(40, 44, 45, ${props.opacity})`}}>
            <div className={[s.logo, s.swing].join(' ')}>
                <NavLink to="/"> <img className={s.logo} src={logo}  alt="logo"/> </NavLink>
            </div>
            <div className={[s.sb, s.swing].join(' ')}>
                <NavLink className={s.link} to="/supplies"> /supplies </NavLink>
            </div>
            <div className={[s.ib, s.swing].join(' ')}>
                <NavLink className={s.link} to="/inconel"> /inconel </NavLink>
            </div>
            <div className={[s.wb, s.swing].join(' ')}>
                <NavLink className={s.link} to="/warehouse"> /warehouse </NavLink>
            </div>
            <div className={[s.cb, s.swing].join(' ')}>
                <NavLink className={s.link} to="/contacts"> /contacts </NavLink>
            </div>
        </div>
    )
};