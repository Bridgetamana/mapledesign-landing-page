import Logo from '../../assets/img/Logo.svg';
import Stars from "../../assets/img/star.svg";
import Clients from "../../assets/img/clients.png"
import { IoMdReturnRight } from "react-icons/io";
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
    return (
        <div>
            <div className='stickynav'>
                <div className='menu-link-container'>
                    <a href="#about" className='menu-link'>About</a>
                    <a href="#services" className="menu-link">Services</a>
                    <a href="#work" className="menu-link">Work</a>
                    <a href="#price" className="menu-link">Pricing</a>
                    <a href="#faqs" className="menu-link">FAQs</a>
                </div>
            </div>
            <section className="hero-section">
                <div className='logo-container'>
                    <img src={Logo} alt="Mapledesign Logo" />
                </div>
                <div className="title-container">
                    <span className="slot-tag">
                        <p>Only 1 spot left</p>
                    </span>
                    <div className="title">
                        Your On-Demand <br />
                        Creative Design Team
                    </div>
                    <div className='description'>
                        Guiding ventures to brand eminence through innovative designs
                    </div>
                    <div className="button-wrapper">
                        <a href="#">
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