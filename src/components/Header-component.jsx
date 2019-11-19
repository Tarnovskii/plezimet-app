import React from 'react'
import {NavLink} from "react-router-dom";
import s from '../stylesheets/header.module.css'
import logo from '../img/logo.png'

export const Header = (props) => {
    return (
        <div className={s.cap} style={{background: `rgba(40, 44, 45, ${props.opacity})`, height: props.height}}>
            <div className={s.logo} onMouseEnter={() => props.dropDownHandler("mouseOut")}>
                <NavLink to="/"> <img className={s.logo} src={logo} alt="logo"/> </NavLink>
            </div>

            <div className={s.sb} onMouseEnter={() => props.dropDownHandler("mouseOut")}>
                <NavLink className={s.link} to="/supplies"> Supplies </NavLink>
            </div>

            <div className={s.ib}>
                <NavLink className={s.link}
                         to="/materials"
                         onMouseEnter={() => props.dropDownHandler("mouseOn")}
                > Materials
                </NavLink>
            </div>

            <div className={s.wb} onMouseEnter={() => props.dropDownHandler("mouseOut")}>
                <NavLink className={s.link} to="/warehouse"> Warehouse </NavLink>
            </div>

            <div className={s.cb} onMouseEnter={() => props.dropDownHandler("mouseOut")}>
                <NavLink className={s.link} to="/contacts"> Contacts </NavLink>
            </div>

            <div className={s.mt}
                 style={{
                     visibility: props.mtVisible,
                     background: `rgba(40, 44, 45, ${props.opacity}`,
                     height: props.mtHeight,
                     bottom: `-${props.mtHeight}`
                 }}
                 onMouseLeave={() => props.dropDownHandler("mouseOut")}>
                <hr className={s.line} style={{
                    color: `rgba(255, 255, 255, 0)`,
                    backgroundColor: `rgba(255, 255, 255, ${(props.mtVisible === "visible") ? 1 : 0})`
                }}/>

                <div className={s.inc}>
                    <NavLink to="/text" className={s.link} style={{fontSize: props.mtFontSize, top: props.mtTop}}>
                        Inconel
                    </NavLink>
                </div>

                <div className={s.aisi}>
                    <NavLink to="/text" className={s.link} style={{fontSize: props.mtFontSize, top: props.mtTop}}>
                        AISI
                    </NavLink>
                </div>

                <div className={s.titan}>
                    <NavLink to="/text" className={s.link} style={{fontSize: props.mtFontSize, top: props.mtTop}}>
                        Titanium
                    </NavLink>
                </div>
            </div>
        </div>
    )
};
