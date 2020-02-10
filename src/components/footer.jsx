import React from 'react'
import s from '../stylesheets/footer.module.css'
import {NavLink} from "react-router-dom";
import {local} from '../store/localization'

export const Footer = (props) => {
    return (
        <div className={s.footerBox}>
            <div className={s.menu}>
                <a href='/#main'> {local[localStorage.language].mainpage} </a>
                <br/>
                <NavLink className={s.link} to="/materials">  {local[localStorage.language].materials} </NavLink>
                <br/>
                <a className={s.link} href="/#aboutus"> {local[localStorage.language].aboutus}</a>
                <br/>
                <NavLink className={s.link} to="/contacts">  {local[localStorage.language].contacts} </NavLink>
            </div>
            <div className={s.lng}>
                <button onClick={() => props.setLanguage("ru")}><img
                    src={"http://www.200stran.ru/images/country/1242463244_732ac7.gif"} alt={"ru"}/> Русский
                </button>
                <br/>
                <button onClick={() => props.setLanguage("eng")}><img
                    src={"http://www.200stran.ru/images/country/1242421831_5ee831.gif"} alt={"en"}/> English
                </button>
                <br/>
                <button onClick={() => props.setLanguage("es")}><img
                    src={"http://www.200stran.ru/images/country/1242422837_d3963c.gif"} alt={"es"}/> Español
                </button>
            </div>
            <div className={s.adr}>
                <img src="https://img.icons8.com/color/36/000000/worldwide-location.png" alt={'pos'}/>
                <p>Colón de Larreátegui, 26, 4A, 48001 Bilbao, Spain</p>
            </div>
            <div className={s.phone}>
                <img src="https://img.icons8.com/color/36/000000/ringing-phone.png" alt={'phone'}/>
                <p>Tel: +34 944 530 809</p>
            </div>
            <div className={s.email}>
                <img src="https://img.icons8.com/color/36/000000/important-mail.png" alt={'email'}/>
                <p> E-Mail: info@plezimet.com | plezimet2019@gmail.com</p>
            </div>
            <div className={s.cr}>
                <a
                    href={"https://empresite.eleconomista.es/PLEZIMET-GROUP-METALLURGICAL-SERVICES.html"}
                    target={"_blank"}
                >
                    © Plezimet Group Metallurgical Services
                </a>
            </div>
        </div>
    )
};
