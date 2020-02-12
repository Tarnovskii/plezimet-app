import React from 'react'
import s from '../stylesheets/main.module.css'
import {ParallaxBanner, ParallaxProvider} from "react-scroll-parallax";
import ScrollAnimation from 'react-animate-on-scroll'
import {local} from '../store/localization'
import "animate.css/animate.min.css"
import doc from '../img/doc.jpg'
import build from '../img/build.jpg'
import favicon from '../img/favicon.png'

export const Main = () => {
    return (
        <ParallaxProvider>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/anchor-has-content */}
            <a id="main"/>
            <ParallaxBanner
                className={s.paralax}
                expanded={false}
                style={{
                    height: "100vh",
                }}
                layers={[
                    {
                        image: build,
                        amount: 0.1,
                        height: "100vh"
                    },
                ]}/>
            <div className={s.panel}>
                <div className={s.fadeIn}>
                    <img className={s.faviconPanel} src={favicon} alt={"favicon"}/>
                    <p className={s.panelMainText}>
                        {local[localStorage.language].banner_excerption}
                    </p>
                </div>
            </div>
            <div className={s.about}>
                <b className={s.label}>
                    {local[localStorage.language].label_header}
                </b>
                <hr className={s.line}/>
                <p className={s.textUnderLable}>
                    {local[localStorage.language].label_text}
                </p>
            </div>
            <div className={s.block}>
                <b className={s.label}>
                    {local[localStorage.language].services}
                </b>
                <img src={local[localStorage.language].img_diagram} alt={"diagram"}
                     className={s.diagram}/>
                <hr className={s.line}/>
            </div>
            <div className={s.block}>
                <img src={local[localStorage.language].img_ruspolymet} alt={"rplogo"} className={s.ruspolymetLogo}/>
                <div> {local[localStorage.language].ruspolimet} </div>
                <div onClick={() => {
                    window.open("/docs", "_blank")
                }} className={s.doc}>
                    <div style={{height: 'inherit', overflowX: "auto"}}>
                        <img src={doc} alt={"doc"} style={{width: "100%"}}/>
                    </div>
                </div>
            </div>
            <div className={s.track}>
                <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
                    <img src={local[localStorage.language].img_track} alt={"track"}
                         style={{height: "280px", paddingTop: "10px"}}/>
                </ScrollAnimation>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
                <a id="ourhistory"/>
                <hr className={s.line}/>
            </div>
            <div className={s.block}>
                <b className={s.label}>
                    {local[localStorage.language].ourhistory_label}
                </b>
                <p className={s.textUnderLable}>
                    {local[localStorage.language].ourhistory}
                </p>
            </div>
            <div className={s.block} style={{
                marginBottom: "70px",
            }}>
                <div className={s.colums}>
                    <div className={s.luTop}>
                        <b className={s.label}>
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
                        <b className={s.label}>
                            {local[localStorage.language].customer}
                        </b>
                        <p className={s.textUnderLable}>
                            {local[localStorage.language].customer_discp}
                        </p>
                        <b className={s.label}>
                            {local[localStorage.language].environment}
                        </b>
                        <p className={s.textUnderLable}>
                            {local[localStorage.language].environment_discp}
                        </p>
                        <b className={s.label}>
                            {local[localStorage.language].technology}
                        </b>
                        <p className={s.textUnderLable}>
                            {local[localStorage.language].technology_discp}
                        </p>
                        <b className={s.label}>
                            {local[localStorage.language].result}
                        </b>
                        <p className={s.textUnderLable}>
                            {local[localStorage.language].result_discp}
                        </p>
                    </div>
                    <div className={s.stTop}>
                        <b className={s.label}>
                            {local[localStorage.language].ourvision_label}
                        </b>
                        <hr className={s.line} style={{
                            width: "75%",
                            marginTop: "9px",
                            marginBottom: "20px"
                        }}/>
                    </div>
                    <div className={s.st}>
                        <p className={s.textUnderLable}>
                            {local[localStorage.language].ourvision}
                        </p>
                    </div>
                </div>
            </div>
        </ParallaxProvider>
    )
};

