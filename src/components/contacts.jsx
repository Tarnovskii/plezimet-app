import React from 'react'
import emailjs from 'emailjs-com'

export const Contacts = (props) => {
    function sendEmail(e) {
        e.preventDefault();
        console.log(e.target);
        emailjs.sendForm('default_service', 'template_Tj0D2ed5', e.target, 'user_azwboHTiBTpaZ0siXrOBT')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <fragment>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </fragment>
    );
}
