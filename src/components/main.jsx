import React, {Fragment} from 'react'
import s from '../stylesheets/main.module.css'
import {Parallax} from "react-scroll-parallax";

export const Main = () => {
    return (
        <Fragment style={{overflowX: false}}>
            <Parallax className={s.paralax} y={[50, -50]} tagOuter="figure">
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
            </Parallax>
            <Parallax className={s.contentBox} y={[0, -12]} tagOuter="figure">
                <div className={s.about}>
                    <b>PLEZIMET</b>
                    <p>
                        For a long time, our company is one of the best suppliers of alloys.
                        We supply the market with a large quantity of products, from high temperature alloys to
                        deliveries
                        of forged and laminated pieces of various seals.
                        The main priorities of the company is the timely provision of quality products.
                    </p>
                    <hr className={s.line}/>
                </div>
                <div className={s.princ}>
                    <div className={s.txt}>
                        <b>OUR PRINCIPLES</b>
                    </div>
                    <div className={s.planning}>
                        <b>Planning</b>
                        <p>IIdeas and individual plans for each client</p>
                    </div>
                    <div className={s.communication}>
                        <b>Communication</b>
                        <p>We keep in touch with the client at every moment of our work.</p>
                    </div>
                    <div className={s.results}>
                        <b>Results</b>
                        <p>We always work to the end and achieve the best results for our clients</p>
                    </div>
                    <div className={s.strategy}>
                        <b>Strategy</b>
                        <p>Strategies from professionals with years of experience</p>
                    </div>
                    <hr className={s.line}/>
                </div>
                <div className={s.about}>
                    <b>PLEZIMET</b>
                    <p>
                        For a long time, our company is one of the best suppliers of alloys.
                        We supply the market with a large quantity of products, from high temperature alloys to
                        deliveries
                        of forged and laminated pieces of various seals.
                        The main priorities of the company is the timely provision of quality products.
                    </p>
                    <hr className={s.line}/>
                </div>
                <div className={s.princ}>
                    <div className={s.txt}>
                        <b>OUR PRINCIPLES</b>
                    </div>
                    <div className={s.planning}>
                        <b>Planning</b>
                        <p>IIdeas and individual plans for each client</p>
                    </div>
                    <div className={s.communication}>
                        <b>Communication</b>
                        <p>We keep in touch with the client at every moment of our work.</p>
                    </div>
                    <div className={s.results}>
                        <b>Results</b>
                        <p>We always work to the end and achieve the best results for our clients</p>
                    </div>
                    <div className={s.strategy}>
                        <b>Strategy</b>
                        <p>Strategies from professionals with years of experience</p>
                    </div>
                    <hr className={s.line}/>
                </div>
                <div className={s.about}>
                    <b>PLEZIMET</b>
                    <p>
                        For a long time, our company is one of the best suppliers of alloys.
                        We supply the market with a large quantity of products, from high temperature alloys to
                        deliveries
                        of forged and laminated pieces of various seals.
                        The main priorities of the company is the timely provision of quality products.
                    </p>
                    <hr className={s.line}/>
                </div>
                <div className={s.princ}>
                    <div className={s.txt}>
                        <b>OUR PRINCIPLES</b>
                    </div>
                    <div className={s.planning}>
                        <b>Planning</b>
                        <p>IIdeas and individual plans for each client</p>
                    </div>
                    <div className={s.communication}>
                        <b>Communication</b>
                        <p>We keep in touch with the client at every moment of our work.</p>
                    </div>
                    <div className={s.results}>
                        <b>Results</b>
                        <p>We always work to the end and achieve the best results for our clients</p>
                    </div>
                    <div className={s.strategy}>
                        <b>Strategy</b>
                        <p>Strategies from professionals with years of experience</p>
                    </div>
                    <hr className={s.line}/>
                </div>
                <div className={s.about}>
                    <b>PLEZIMET</b>
                    <p>
                        For a long time, our company is one of the best suppliers of alloys.
                        We supply the market with a large quantity of products, from high temperature alloys to
                        deliveries
                        of forged and laminated pieces of various seals.
                        The main priorities of the company is the timely provision of quality products.
                    </p>
                    <hr className={s.line}/>
                </div>
                <div className={s.princ}>
                    <div className={s.txt}>
                        <b>OUR PRINCIPLES</b>
                    </div>
                    <div className={s.planning}>
                        <b>Planning</b>
                        <p>IIdeas and individual plans for each client</p>
                    </div>
                    <div className={s.communication}>
                        <b>Communication</b>
                        <p>We keep in touch with the client at every moment of our work.</p>
                    </div>
                    <div className={s.results}>
                        <b>Results</b>
                        <p>We always work to the end and achieve the best results for our clients</p>
                    </div>
                    <div className={s.strategy}>
                        <b>Strategy</b>
                        <p>Strategies from professionals with years of experience</p>
                    </div>
                    <hr className={s.line}/>
                </div>
            </Parallax>
        </Fragment>
    )
};
