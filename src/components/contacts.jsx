import React from 'react'
import emailjs from 'emailjs-com'
import s from '../stylesheets/contacts.module.css'

export const Contacts = (props) => {
    function sendEmail(e) {
        e.preventDefault();
        console.log(e.target.user_name.value);
        if (e.target.user_name.value.length === 0) return "un_empty";
        if (e.target.company_name.value.length === 0) return "cn_empty";
        if (e.target.user_email.value.length === 0) return "ue_empty";
        emailjs.sendForm('default_service', 'template_Tj0D2ed5', e.target, 'user_azwboHTiBTpaZ0siXrOBT')
            .then((result) => {
                return result.text;
            }, (error) => {
                return error.text;
            });
    }

    return (
        <div>
            <div className={s.label}>
                <b>
                    Контакты
                    <hr className={s.line} style={{width: "80px"}}/>
                </b>
            </div>
            <div>
                <div className={s.form}>
                    <form className="contact-form" onSubmit={sendEmail}>
                        <label>Ваше имя*</label>
                        <br/>
                        <input className={s.inputField} type="text" name="user_name"/>
                        <br/>
                        <label>Название вашей компании*</label>
                        <br/>
                        <input className={s.inputField} type="text" name="company_name"/>
                        <br/>
                        <label>Ваша почта*</label>
                        <br/>
                        <input className={s.inputField} type="email" name="user_email"/>
                        <br/>
                        <label>Номер телефона</label>
                        <br/>
                        <input className={s.inputField} type="text" name="contact_number"/>
                        <br/>
                        <label>Сообщение</label>
                        <br/>
                        <input className={s.inputField} type="text" name="message"/>
                        <br/>
                        <input className={s.button} type="submit" value="Send"/>
                        <p>[*] отмечены обязательные поля.</p>
                    </form>
                </div>
            </div>
        </div>
    );
};
