import React from 'react'
import s from '../stylesheets/main.module.css'
import {ParallaxBanner, ParallaxProvider} from "react-scroll-parallax";
import ScrollAnimation from 'react-animate-on-scroll'
import {local} from '../store/localization'
import "animate.css/animate.min.css"
import doc from '../img/doc.jpg'
import build from '../img/build.jpg'

export const Main = (props) => {
    return (
        <div className={s.main}>
            <ParallaxProvider>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/anchor-has-content */}
                <a id="main"/>
                <ParallaxBanner
                    className={s.paralax}
                    expanded={false}
                    style={{
                        height: "100vh",
                    }}
                    layers={[{
                        image: build,
                        amount: 0.1,
                        height: "100vh"
                    }]}/>
                <div className={s.panel}>
                    <div className={s.fadeIn}>
                        <em className={s.panelMainText}>
                            {local[localStorage.language].banner_excerption}
                        </em>
                        <br/>
                        <cite className={s.panelLowerText}>
                            {local[localStorage.language].excerption_author}
                        </cite>
                    </div>
                </div>
                <div className={s.about}>
                    <b>
                        {local[localStorage.language].label_header}
                    </b>
                    <hr className={s.line} style={{width: "70%"}}/>
                    <p>
                        {local[localStorage.language].label_text}
                    </p>
                </div>
                <div className={s.block}>
                    <b>
                        {local[localStorage.language].services}
                    </b>
                    <img src={local[localStorage.language].img_diagram} alt={"diagram"} style={{width: "60vw", marginTop: "25px"}}/>
                </div>
                <div className={s.block}>
                    <hr className={s.line} style={{width: "85%"}}/>
                </div>
                <div className={s.block} style={{
                    marginTop: "29px",
                }}>
                    <img src={local[localStorage.language].img_ruspolymet} alt={"rplogo"} style={{
                        width: "50%"
                    }}/>
                    <div className={s.rp}>
                        <div className={s.rplogo}>
                            {local[localStorage.language].ruspolimet}
                        </div>
                        <div className={s.dc}>
                            {/* eslint-disable-next-line react/jsx-no-target-blank */}
                            <a href={"/docs"} target="_blank">
                                <img src={doc} alt={"rpdoc"}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={s.block}>
                    <hr className={s.line} style={{width: "85%"}}/>
                </div>
                <div className={s.track}>
                    <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
                        <img src={local[localStorage.language].img_track} alt={"track"} style={{height: "280px", paddingTop: "10px"}}/>
                    </ScrollAnimation>
                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
                    <a id="ourhistory"/>
                </div>

                <div className={s.block}>
                    <b>
                        {local[localStorage.language].ourhistory_label}
                    </b>
                    <p>
                        {local[localStorage.language].ourhistory}
                    </p>
                </div>
                <div className={s.block} style={{
                    marginBottom: "70px",
                }}>
                    <div className={s.colums}>
                        <div className={s.luTop}>
                            <b>
                                {local[localStorage.language].ourvalues}
                            </b>
                            <br/>
                            <hr className={s.line} style={{
                                width: "45%",
                                marginTop: "9px",
                                marginBottom: "20px"
                            }}/>
                            <br/>
                        </div>
                        <div className={s.lu}>
                            <b>
                                {local[localStorage.language].customer}
                            </b>
                            <p>
                                {local[localStorage.language].customer_discp}
                            </p>
                            <b>
                                {local[localStorage.language].environment}
                            </b>
                            <p>
                                {local[localStorage.language].environment_discp}
                            </p>
                            <b>
                                {local[localStorage.language].technology}
                            </b>
                            <p>
                                {local[localStorage.language].technology_discp}
                            </p>
                            <b>
                                {local[localStorage.language].result}
                            </b>
                            <p>
                                {local[localStorage.language].result_discp}
                            </p>
                        </div>
                        <div className={s.stTop}>
                            <b>
                                {local[localStorage.language].ourvision_label}
                            </b>
                            <hr className={s.line} style={{
                                width: "75%",
                                marginTop: "9px",
                                marginBottom: "20px"
                            }}/>
                        </div>
                        <div className={s.st}>
                            <p>
                                {local[localStorage.language].ourvision}
                            </p>
                        </div>
                    </div>
                </div>
            </ParallaxProvider>
        </div>
    )
};

