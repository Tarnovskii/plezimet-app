import React from 'react'
import s from '../stylesheets/header.module.css'
import logo from '../img/logo.png'
import {local} from "../store/localization";
import ru_lng from '../img/ru_lng.gif'
import es_lng from '../img/es_lng.gif'
import eng_lng from '../img/eng_lng.gif'


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
                <a className={s.link} href={`/${localStorage.language}/materials`}>  {local[localStorage.language].materials} </a>
            </div>

            <div className={s.cb}>
                <a href={`/${localStorage.language}/contacts`} className={s.link}> {local[localStorage.language].contacts} </a>
            </div>

            <div className={s.au}>
                <a href={`/${localStorage.language}/#ourhistory`} className={s.link}> {local[localStorage.language].aboutus} </a>
            </div>

            <div className={s.lng}>
                <button className={s.blink} onClick={() => props.setLanguage("ru")}><img
                    src={ru_lng} alt={"ru"}/>
                </button>
                <button className={s.blink} onClick={() => props.setLanguage("en")}><img
                    src={eng_lng} alt={"en"}/>
                </button>
                <button className={s.blink} onClick={() => props.setLanguage("es")}><img
                    src={es_lng} alt={"es"}/>
                </button>
            </div>

        </div>
    )
};
