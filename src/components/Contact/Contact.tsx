import './Contact.scss';
import { IoMdReturnRight, IoMdArrowUp } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import Clients from "../../assets/img/clients.png";
import Stars from "../../assets/img/star.svg";

const Contact = () => {
    return (
        <div id='contact-us'>
            <section className="contact-section">
                <div className="contact-title-container">
                    <div className="slot-container">
                        <p>Only 2 spots left for August</p>
                    </div>
                    <div className="footer-title">Get in touch with us</div>
                    <div className="footer-description">
                        The only design and development subscription you'd ever need
                    </div>
                    <div className="footer-cta">
                        <div className="straight-line"></div>
                        <div className="client-profile-container">
                            <img src={Clients} alt="" className="client-profile" />
                            <div className="client-profile-text">
                                <img src={Stars} alt="" className='stars' />
                                <p className='client-text'>Loved by founders worldwide</p>
                            </div>
                        </div>
                        <div className='main-button-wrapper'>
                            <a href="#" className='main-button'>
                                <div>
                                    <IoMdReturnRight />
                                    <p>Free discovery call</p>
                                </div>
                                <div className='bottom-border'></div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="footer-container1">
                        <div className="footer-link">
                            <p>Our contacts</p>
                            <div className="details">
                                <a href="tel:+1234654390">1234654390</a>
                                <a href="mailto:">query@mabledesign.co</a>
                            </div>
                        </div>
                        <div className="footer-link">
                            <p>Location</p>
                            <div className="details">
                                <a href="#">Operating Remotely</a>

                            </div>
                        </div>
                    </div>
                    <div className="footer-container2">
                        <p className='gray'>Visit</p>
                        <div className="link-block">
                            <div className="link">
                                <a href="#">Our work</a>
                                <GoArrowUpRight />
                            </div>
                            <div className="link">
                                <a href="#">services</a>
                                <GoArrowUpRight />
                            </div>
                            <div className="link">
                                <a href="#">works</a>
                                <GoArrowUpRight />
                            </div>
                            <div className="link">
                                <a href="#">pricing</a>
                                <GoArrowUpRight />
                            </div>
                            <div className="link">
                                <a href="#">testimonials</a>
                                <GoArrowUpRight />
                            </div>
                            <div className="link">
                                <a href="#">faqs</a>
                                <GoArrowUpRight />
                            </div>
                        </div>
                    </div>
                    <div className="footer-container2">
                        <p className='gray'>Connect</p>
                        <div className="link-block">

                            <div className="link">
                                <a href="#">twitter</a>
                                <GoArrowUpRight />
                            </div>
                            <div className="link">
                                <a href="#">linkedin</a>
                                <GoArrowUpRight />
                            </div>
                            <div className="link">
                                <a href="#">instagram</a>
                                <GoArrowUpRight />
                            </div>
                            <div className="link">
                                <a href="#">Behance</a>
                                <GoArrowUpRight />
                            </div>
                            <div className="link">
                                <a href="#">Dribble</a>
                                <GoArrowUpRight />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-slider">
                    <p className="footer-text-slider">Get in contact •</p>
                    <p className="footer-text-slider">Get in contact •</p>
                    <p className="footer-text-slider">Get in contact •</p>
                    <p className="footer-text-slider">Get in contact •</p>
                </div>
                <div className="footer-bottom">
                    <p>
                        All rights reserved 2024 © Maple Design
                    </p>
                    <p>Operating remotely</p>
                    <a href="#">
                        <p>Back to top</p>
                        <IoMdArrowUp fill=' #fff6' /></a>
                </div>
            </section>
        </div>
    )
}

export default Contact