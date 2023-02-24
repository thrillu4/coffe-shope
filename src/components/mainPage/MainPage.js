import React from "react"

import './mainPage.scss';

import coffeLogo from '../../icons/coffe_logo.png';
import coffeLogoBlack from '../../icons/coffe_logo_black.svg';
import bean from '../../icons/divider_logo.svg';
import blackBean from '../../icons/divider_black.svg';
import coffeItem1 from '../../img/coffe_house/coffe1.png';
import coffeItem2 from '../../img/coffe_house/coffe2.png';
import coffeItem3 from '../../img/coffe_house/coffe3.png';

export function MainPage() {
    return (
        <>
            <div className="main">
                <div className="container">
                    <nav className="pages">
                        <a href="#" className="logo"><img src={coffeLogo} alt="logo" /></a>
                        <a href='#' className="page">Coffee house</a>
                        <a href='#' className="page">Our coffee</a>
                        <a href='#' className="page">For your pleasure</a>
                    </nav>
                    <div className="main__promo">
                        <h1 className="main__header">Everything You Love About Coffee</h1>
                        <div className="divider">
                            <div></div>
                            <img src={bean} alt="bean" />
                            <div></div>
                        </div>
                        <h2 className="main__subheader">We makes every day full of energy and taste</h2>
                        <h2 className="main__title">Want to try our beans?</h2>
                        <button className="main__btn">More</button>
                    </div>
                </div>
            </div>

            <div className="about">
                <div className="container">
                    <h1 className="about__header">About Us</h1>
                    <div className="divider">
                        <div></div>
                        <img src={blackBean} alt="bean" />
                        <div></div>
                    </div>
                    <p className="about__descr">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face. <br />
                        <br />
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.
                    </p>
                </div>
            </div>

            <div className="best">
                <div className="container">
                    <h2 className="best__header">Our best</h2>
                    <div className="best__items">
                        <div className="best__item">
                            <img src={coffeItem1} alt="coffe" className="best__item-img" />
                            <a href='#' className="best__item-name">Solimo Coffee Beans 2 kg</a>
                            <div className="best__item-price">10.73$</div>
                        </div>
                        <div className="best__item">
                            <img src={coffeItem2} alt="coffe" className="best__item-img" />
                            <a href='#' className="best__item-name">Presto Coffee Beans 1 kg</a>
                            <div className="best__item-price">15.99$</div>
                        </div>
                        <div className="best__item">
                            <img src={coffeItem3} alt="coffe" className="best__item-img" />
                            <a href='#' className="best__item-name">AROMISTICO Coffee 1 kg</a>
                            <div className="best__item-price">6.99$</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="container">
                    <nav className="pages">
                        <a href="#" className="logo"><img src={coffeLogoBlack} alt="logo" /></a>
                        <a href="#" className="page">Coffee house</a>
                        <a href="#" className="page">Our coffee</a>
                        <a href="#" className="page">For your pleasure</a>
                    </nav>
                    <div className="divider">
                        <div></div>
                        <img src={blackBean} alt="bean" />
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

function showThis() {
    console.log(this);
}
showThis();