import React from 'react'
import s from '../stylesheets/header.module.css'
import logo from '../img/logo.png'
import {local} from "../store/localization";


export const Header = (props) => {
    return (
        <div
            onMouseEnter={() => {props.mouseEnterLeaveHandler('enter')}}
            onMouseLeave={() => {props.mouseEnterLeaveHandler('leave')}}
            className={s.cap}
            style={{
                background: `rgba(40, 44, 45, ${props.opacity})`,
                height: props.height
            }}>

            <a className={s.logoLink} href={`/${localStorage.language}/#main`}> <img className={s.logo} src={logo} alt="logo"/> </a>

            <br className={s.mobileBr}/>

            <div className={s.ib}>
                <a href={`/${localStorage.language}/materials`}
                   className={s.link}> {local[localStorage.language].materials} </a>
            </div>

            <div className={s.cb}>
                <a href={`/${localStorage.language}/contacts`} className={s.link}> {local[localStorage.language].contacts} </a>
            </div>

            <div className={s.au}>
                <a href={`/${localStorage.language}/#ourhistory`} className={s.link}> {local[localStorage.language].aboutus} </a>
            </div>

            <div className={s.lng}>
                <button className={s.blink} onClick={() => props.setLanguage("ru")}><img
                    src={"http://www.200stran.ru/images/country/1242463244_732ac7.gif"} alt={"ru"}/>
                </button>
                <button className={s.blink} onClick={() => props.setLanguage("en")}><img
                    src={"http://www.200stran.ru/images/country/1242421831_5ee831.gif"} alt={"en"}/>
                </button>
                <button className={s.blink} onClick={() => props.setLanguage("es")}><img
                    src={"http://www.200stran.ru/images/country/1242422837_d3963c.gif"} alt={"es"}/>
                </button>
            </div>

        </div>
    )
};
