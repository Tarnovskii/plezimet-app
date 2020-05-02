import React from 'react'
import s from '../stylesheets/footer.module.css'
import {local} from '../store/localization'
import ru_lng from "../img/ru_lng.gif";
import eng_lng from "../img/eng_lng.gif";
import es_lng from "../img/es_lng.gif";

export const Footer = (props) => {
    return (
        <div className={s.footerBox}>
            <div className={s.menu}>
                <a href='/#main'> {local[localStorage.language].mainpage} </a>
                <br/>
                <a className={s.link} href={`/${localStorage.language}/materials`}>  {local[localStorage.language].materials} </a>
                <br/>
                <a className={s.link} href={`/${localStorage.language}/#ourhistory`}> {local[localStorage.language].aboutus}</a>
                <br/>
                <a className={s.link} href={`/${localStorage.language}/contacts`}>  {local[localStorage.language].contacts} </a>
            </div>
            <div className={s.lng}>
                <button className={s.lngButton} onClick={() => props.setLanguage("ru")}><img
                    src={ru_lng} alt={"ru"}/> Русский
                </button>
                <br/>
                <button className={s.lngButton} onClick={() => props.setLanguage("en")}><img
                    src={eng_lng} alt={"en"}/> English
                </button>
                <br/>
                <button className={s.lngButton} onClick={() => props.setLanguage("es")}><img
                    src={es_lng} alt={"es"}/> Español
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
