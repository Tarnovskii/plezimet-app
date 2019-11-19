import React from 'react'
import s from '../stylesheets/main.module.css'
import {ParallaxBanner, ParallaxProvider} from "react-scroll-parallax";
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css"
import img from '../img/panel.png'
import rplogo from '../img/icon.png'
import track from '../img/track.png'
import doc from '../img/doc.jpg'
import diagram from '../img/Diagram.png'

export const Main = () => {
    return (
        <div className={s.main}>
            <ParallaxProvider>
                <ParallaxBanner
                    className={s.paralax}
                    expanded={false}
                    style={{
                        height: "100vh",
                    }}
                    layers={[{
                        image: img,
                        amount: 0.3,
                        height: "100vh"
                    }]}/>
                <div className={s.panel}>
                    <div className={s.fadeIn}>
                        <em className={s.panelMainText}>
                            "The progress is the best, not only the newest."
                        </em>
                        <br/>
                        <cite className={s.panelLowerText}>
                            Lope de Vega
                        </cite>
                    </div>
                </div>
                <div className={s.about}>
                    <b>PLEZIMET</b>
                    <p>
                        Долгое время наша компания является одним из лучших поставщиков сплавов.
                        Мы поставляем на рынок огромное количество продукции, от жаропрочных сплавов
                        до поставок кованых и ламинированных деталей различных уплотнений.
                        Основными приоритетами компании является своевременное предоставление качественной продукции.
                        «Plezimet Group» - это уникальная компания, предоставляющая услуги в области металлургии в Европе и СНГ.
                        Многолетний опыт работы в металлургическом секторе и
                        уникальная философия компании позволяют нам занимать лидирующие позиции в европейском секторе.
                    </p>
                    <hr className={s.line}/>
                </div>
                <div className={s.block}>
                    <b>Наши основные направления: </b>
                    <img src={diagram} alt={"diagram"} style={{width: "60vw"}}/>
                    <hr className={s.line}/>
                </div>
                <div className={s.block}>
                    <div className={s.rp}>
                        <div className={s.rplogo}>
                            <img src={rplogo} alt={"rplogo"} style={{
                                width: "300px"
                            }}/>
                            <br/>
                            Начиная с ноября 2019 года мы рады сообщить что являемся официальными
                            представителями завода ПАО «РУСПОЛИМЕТ»на территории Испании и Франции.
                            Благодаря чему Plezimet Group является уверенным игроком на рынке
                            продукцции авиационной и судостроительной отрасли.
                        </div>
                        <div className={s.dc}>
                            {/* eslint-disable-next-line react/jsx-no-target-blank */}
                            <a href={"/docs"} target="_blank">
                                <img src={doc} alt={"rpdoc"}/>
                            </a>
                        </div>
                    </div>
                    <hr className={s.line}/>
                </div>
                <div className={s.track}>
                    <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'
                                     style={{animationDelay: "0.5s"}}>
                        <img src={track} alt={"track"} style={{height: "280px", paddingTop: "10px"}}/>
                    </ScrollAnimation>
                </div>
            </ParallaxProvider>
        </div>
    )
};

