import { useState, useEffect } from 'react';
import Logo from '../../assets/img/Logo.svg';
import Stars from "../../assets/img/star.svg";
import Clients from "../../assets/img/clients.png"
import { IoMdReturnRight, IoMdMenu, IoMdClose } from "react-icons/io";
import { LuUserCheck2 } from "react-icons/lu";
import "./herosection.scss";
import Carscoup from '../../assets/img/carscoup-logo.svg';
import Classpass from '../../assets/img/classpass-logo.svg';
import Grame from '../../assets/img/grame-logo.svg';
import Outreach from '../../assets/img/outreach-logo.svg';
import Pawjourr from '../../assets/img/pawjourr-logo.svg';
import Quadrata from '../../assets/img/quadrata-logo.svg';
import Reicapital from '../../assets/img/reicapital-logo.svg';
import Spring from '../../assets/img/spring-logo.svg';
import Square from '../../assets/img/square-logo.svg';

const HeroSection = () => {

    // Tag-loader
    const [isLoading, setLoading] = useState(true);
    const [isMenuOpen, setMenuOpen] = useState(false);


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    return (
        <div>
            <div className="nav">
                <div className='nav-wrapper'>
                    <div className="navbar">
                        <a href="#">
                            <img src={Logo} alt="" />
                        </a>
                        <nav className={isMenuOpen ? 'open' : ''}>
                            <ul className='nav-items'>
                                <li><a href="#about">about</a></li>
                                <li><a href="#about">services</a></li>
                                <li><a href="#about">work</a></li>
                                <li><a href="#about">pricing</a></li>
                                <li><a href="#about">faqs</a></li>
                                <li><a href="#about" className='yellow'>contact us</a></li>
                            </ul>
                            <button className={`toggle-button ${isMenuOpen ? 'exit' : 'menu'}`} onClick={toggleMenu}>
                                <IoMdMenu className={`icon ${isMenuOpen ? 'hidden' : ''}`} />
                                <IoMdClose className={`icon ${isMenuOpen ? '' : 'hidden'}`} />
                            </button>
                        </nav>
                        <div className='menu-button' onClick={toggleMenu}>
                            <IoMdMenu />
                        </div>
                        <div className="desktop-nav">
                            <div>

                            <a href="#about">About</a>
                            <a href="#services">Services</a>
                            <a href="#work">Work</a>
                            <a href="#price">Pricing</a>
                            <a href="#faqs">FAQs</a>
                            </div>
                        </div>
                            <a href="#contact-us " className='yellow-nav-link'>Contact us
                                <LuUserCheck2 />
                            </a>
                    </div>
                </div>
            </div>
            <section className="hero-section">
                
                <div className="title-container">
                    <span className="slot-tag">
                        <span className='dot'></span>
                        {isLoading ? (
                            <p
                                className={isLoading ? "" : "hidden"}
                            >Loading slots...</p>
                        ) : (
                            <p>Only 2 spot left</p>
                        )}
                    </span>
                    <div className="title">
                        Your On-Demand <br />
                        Creative Design Team
                    </div>
                    <div className='description'>
                        Guiding ventures to brand eminence through innovative designs
                    </div>
                    <div className="button-wrapper">
                        <a href="#" className='main-button'>
                            <div>

                                <IoMdReturnRight />
                                <p>Free discovery call</p>
                            </div>
                            <div className='bottom-border'></div>
                        </a>
                        <div className='client-review-container'>
                            <div className='client-avatar-container'>
                                <img src={Clients} alt="" className='one' />
                            </div>
                            <div className="review-wrapper">
                                <img src={Stars} alt="" className='stars' />
                                <div className='client-text'>Loved by founders worldwide</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="trail">
                <img src="" alt="" />
            </div>
            <div className='companies-slider'>
                <div>
                    <img src={Carscoup} alt="" className='logo-img_1' />
                    <img src={Classpass} alt="" className='logo-img_2' />
                    <img src={Grame} alt="" className='logo-img_3' />
                    <img src={Outreach} alt="" className='logo-img_4' />
                    <img src={Pawjourr} alt="" className='logo-img_5' />
                    <img src={Quadrata} alt="" className='logo-img_6' />
                    <img src={Reicapital} alt="" className='logo-img_7' />
                    <img src={Spring} alt="" className='logo-img_8' />
                    <img src={Square} alt="" className='logo-img_8' />
                    <img src={Carscoup} alt="" className='logo-img_1' />
                    <img src={Classpass} alt="" className='logo-img_2' />
                    <img src={Grame} alt="" className='logo-img_3' />
                    <img src={Outreach} alt="" className='logo-img_4' />
                    <img src={Pawjourr} alt="" className='logo-img_5' />
                    <img src={Quadrata} alt="" className='logo-img_6' />
                    <img src={Reicapital} alt="" className='logo-img_7' />
                    <img src={Spring} alt="" className='logo-img_8' />
                    <img src={Square} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection