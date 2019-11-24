import React from 'react'
import {ParallaxBanner, ParallaxProvider} from "react-scroll-parallax";
import s from '../stylesheets/contacts.module.css'
import cntPanel from '../img/world_panel.jpg'

export const Contacts = (props) => {
    return (
        <div>
            <ParallaxProvider>
                <ParallaxBanner
                    expanded={false}
                    style={{
                        top: 0,
                        margin: 0,
                        padding: 0,
                        height: "500px"
                    }}
                    layers={[{
                        image: cntPanel,
                        amount: 0.3,
                        height: "300px"
                    }]}/>
                <div>
                    <div className={s.label}>
                        <b>
                            Контакты
                            <hr className={s.line} style={{width: "80px"}}/>
                        </b>
                    </div>
                    <div>
                        <div className={s.form}>
                            <form className="contact-form" onSubmit={(e) => props.sendEmail(e)}>
                                <label>Ваше имя*</label>
                                <br/>
                                <input
                                    className={s.inputField}
                                    type="text"
                                    name="user_name"
                                    value={props.userNameFieldValue}
                                    onChange={(e) => props.userNameFieldHandler(e.target.value)}
                                    required={true}
                                />
                                <br/>
                                <label>Название вашей компании*</label>
                                <br/>
                                <input
                                    className ={s.inputField}
                                    type="text"
                                    name="company_name"
                                    value={props.companyNameFieldValue}
                                    onChange={(e) => props.companyNameFieldHandler(e.target.value)}
                                    required={true}
                                />
                                <br/>
                                <label>Ваша почта*</label>
                                <br/>
                                <input
                                    className={s.inputField}
                                    type="email"
                                    name="user_email"
                                    value={props.userEmailFieldValue}
                                    onChange={(e) => props.userEmailFieldHandler(e.target.value)}
                                    required={true}
                                />
                                <br/>
                                <label>Номер телефона</label>
                                <br/>
                                <input className={s.inputField} type="text" name="contact_number"/>
                                <br/>
                                <label>Сообщение</label>
                                <br/>
                                <input className={s.inputField} type="text" name="message"/>
                                <br/>
                                <button className={s.button}>Отправить</button>
                                <p>[*] отмечены обязательные поля.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </ParallaxProvider>
        </div>
    );
};
