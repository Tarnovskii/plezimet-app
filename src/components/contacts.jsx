import React from 'react'
import {ParallaxBanner, ParallaxProvider} from "react-scroll-parallax";
import s from '../stylesheets/contacts.module.css'
import cntPanel from '../img/world_panel.jpg'
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker/react'
import {local} from "../store/localization";


export const Contacts = (props) => {
    return (
        <div className={s.main}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/anchor-has-content */}
            <ParallaxProvider>
                <ParallaxBanner
                    expanded={false}
                    style={{
                        top: 0,
                        margin: 0,
                        padding: 0,
                        height: "300px"
                    }}
                    layers={[{
                        backgroundScale: "cover",
                        image: cntPanel,
                        amount: 0.3,
                        height: "300px"
                    }]}/>
                <div className={s.pageName}>
                    <b>
                        {local[localStorage.language].contacts}
                        <hr className={s.line} style={{width: "80px"}}/>
                    </b>
                    <p style={{paddingBottom: "5px"}}>{local[localStorage.language].contactus}</p>
                </div>
                <div className={s.formWrapper}>
                    <form className={s.form} onSubmit={(e) => props.sendEmail(e)}>
                        <div className={s.name}>
                            <label>{local[localStorage.language].yrname}<label style={{color: "red"}}>*&nbsp;</label></label>
                            <input
                                className={s.inputField}
                                type="text"
                                name="user_name"
                                value={props.userNameFieldValue}
                                onChange={(e) => props.userNameFieldHandler(e.target.value)}
                                required={true}
                            />
                        </div>
                        <div className={s.company}>
                            <label>{local[localStorage.language].yrcompany}<label style={{color: "red"}}>*&nbsp;</label></label>
                            <input
                                className={s.inputField}
                                type="text"
                                name="company_name"
                                value={props.companyNameFieldValue}
                                onChange={(e) => props.companyNameFieldHandler(e.target.value)}
                                required={true}
                            />
                        </div>
                        <div className={s.email}>
                            <label>{local[localStorage.language].yrpostbox}<label style={{color: "red"}}>*&nbsp;</label></label>
                            <input
                                className={s.inputField}
                                type="email"
                                name="user_email"
                                value={props.userEmailFieldValue}
                                onChange={(e) => props.userEmailFieldHandler(e.target.value)}
                                required={true}
                            />
                        </div>
                        <div className={s.phone}>
                            <label>{local[localStorage.language].yrphone} &nbsp;</label>
                            <input className={s.inputField} type="text" name="contact_number"/>
                        </div>
                        <div className={s.comment}>
                            <label>{local[localStorage.language].comment} &nbsp;</label>
                            <textarea
                                maxLength={"777"}
                                className={s.commentField}
                                name="message"
                            />
                        </div>
                        <div className={s.btn}>
                            <button className={s.button}>{local[localStorage.language].send}</button>
                        </div>
                    </form>
                </div>
                <div className={s.mapWrapper}>
                    <Map
                        center={[43.2979596, -2.9385935]}
                        zoom={12}
                        height={400}
                    >
                        <Marker
                            anchor={[43.2979596, -2.9385935]}
                            payload={1}
                            onClick={({event, anchor, payload}) => {
                                window.open('https://goo.gl/maps/nSXHkykqG4REaKg86');
                                return 20;
                            }}
                        />
                        <p style={{
                            padding: 0,
                            margin: 0,
                        }}>
                            {local[localStorage.language].map_discp}</p>
                    </Map>
                </div>
                <div className={s.data}>
                    <b>{local[localStorage.language].we_are_here}</b>
                    <hr className={s.line} style={{width: "120px"}}/>
                    <p>Pg/Industrial Sangroniz, 2-Mod24, 48150 Sondika, Vizcaya, Spain</p>
                    <p>Tel: +34 944 530 809</p>
                    <p>E-Mail: info@plezimet.com | plezimet2019@gmail.com</p>
                </div>
            </ParallaxProvider>
        </div>
    );
};
