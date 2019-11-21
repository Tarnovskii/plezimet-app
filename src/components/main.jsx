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
import build from '../img/build.jpg'
import {Footer} from "./footer";

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
                        image: build,
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
                    <b>Знаем всё и каждое о металлургии</b>
                    <hr className={s.line} style={{width: "70%"}}/>
                    <p>
                        Долгое время наша компания является одним из лучших поставщиков сплавов.
                        Мы поставляем на рынок огромное количество продукции, от жаропрочных сплавов
                        до поставок кованых и ламинированных деталей различных уплотнений.
                        Основными приоритетами компании является своевременное предоставление качественной продукции.
                        «Plezimet Group» - это уникальная компания, предоставляющая услуги в области металлургии в
                        Европе и СНГ.
                        Многолетний опыт работы в металлургическом секторе и
                        уникальная философия компании позволяют нам занимать лидирующие позиции в европейском секторе.
                    </p>
                </div>
                <div className={s.block}>
                    <b>Наши основные направления</b>
                    <img src={diagram} alt={"diagram"} style={{width: "60vw", marginTop: "25px"}}/>
                </div>
                <div className={s.block}>
                    <hr className={s.line} style={{width: "85%"}}/>
                </div>
                <div className={s.block} style={{
                    marginTop: "29px",
                }}>
                    <img src={rplogo} alt={"rplogo"} style={{
                        width: "50%"
                    }}/>
                    <div className={s.rp}>
                        <div className={s.rplogo}>
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
                </div>
                <div className={s.block}>
                    <hr className={s.line} style={{width: "85%"}}/>
                </div>
                <div className={s.track}>
                    <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
                        <img src={track} alt={"track"} style={{height: "280px", paddingTop: "10px"}}/>
                    </ScrollAnimation>
                </div>
                <div className={s.block}>
                    <a name="chapter4"> <b> Наша история </b> </a>
                    <p>
                        Совершив первую сделаку в 1997 году и пройдя с того дня
                        длительный и сложный путь, Plezimet Group стал уникальной компанией
                        предоставляющей услуги в сфере металлургии и сталеплавления на территории
                        Европы.
                        Основным рынком компании являются специальные стали, предназначеные для
                        авиационно, судостроительной и нефтезагохимической промышленостей.
                        Огромный опыт и любовь к своему делу привело Plezimet Group на лидирующие позиции рынка.
                    </p>
                </div>
                <div className={s.block} style={{
                    marginBottom: "70px",
                }}>
                    <div className={s.colums}>
                        <div className={s.luTop}>
                            <b>Наши ценности</b>
                            <br/>
                            <hr className={s.line} style={{
                                width: "45%",
                                marginTop: "9px",
                                marginBottom: "20px"
                            }}/>
                            <br/>
                        </div>
                        <div className={s.lu}>
                            <b>ВЫ</b>
                            <p>Мы ценим каждого нашого клиента</p>
                            <b>ОКРУЖАЮЩИЙ МИР</b>
                            <p>Переработка материала и забота о мире, в котором мы живём</p>
                            <b>ТЕХНОЛОГИИ</b>
                            <p>Используем только самые эффективные и новые технологии</p>
                            <b>РЕЗУЛЬТАТ</b>
                            <p>Работаем до достижения идеального результата</p>
                        </div>
                        <div className={s.stTop}>
                            <b>Наш взгляд и философия</b>
                            <hr className={s.line} style={{
                                width: "75%",
                                marginTop: "9px",
                                marginBottom: "20px"
                            }}/>
                        </div>
                        <div className={s.st}>
                            <p>
                                Plezimet Group позиционирует себя как уникальная компания, что преподносит
                                на рынок металругии ранее не развиваемые услуги и взаимоотношения между компаниями.
                                Основной ценностью любого металлурга является его знания и опыт.
                                Осозновая это, мы, впервую очередь, сконцетрированы на новейших технологиях,
                                что позволяют развивать металлургическую промышленость, тем самым двигая
                                всеобщий мировой прогресс.
                            </p>
                        </div>
                    </div>
                </div>
            </ParallaxProvider>
            <Footer/>
        </div>
    )
};

