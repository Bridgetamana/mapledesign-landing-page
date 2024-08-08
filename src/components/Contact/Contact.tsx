import './Contact.scss';
import { IoMdReturnRight, IoMdArrowUp } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import Clients from "../../assets/img/clients.png";
import Stars from "../../assets/img/star.svg";

const Contact = () => {
    return (
        <div>
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
                        <a href="#" className="client-link">
                            <div>
                                <IoMdReturnRight />
                                <p>Free discovery call</p>
                            </div>
                            <div className="underline"></div>
                        </a>
                    </div>
                </div>
                <div className="contact-form">
                    <div>
                        <form>
                            <div className='form-field-container'>
                                <div className="first-field">
                                    <div className='input-field'>
                                        <label htmlFor="first-name">First and last name</label>
                                        <input type="text"  maxLength={256} name='first-Name' placeholder='Your name' required />
                                    </div>
                                    <div className='input-field'>
                                        <label htmlFor="email">Business email</label>
                                        <input type="email" className='input-field'
                                            name='email' placeholder='name@company.com' required />
                                    </div>

                                </div>
                                <div className="second-field">
                                    <div className='input-field'>
                                        <label htmlFor="company-name">Company name</label>
                                        <input type="text" className='input-field' maxLength={256} name='company-name' placeholder='ACME Inc' required />
                                    </div>
                                    <div className='input-field'>
                                        <label htmlFor="website-url">Wbsite URL</label>
                                        <input type="website-url" className='input-field'
                                            name='website-url' placeholder='www.yourwebsite.com' required />
                                    </div>

                                </div>
                            </div>
                            {/* <div className="radio-container">
                                <div className="check-button">
                                    <div>
                                        <IoIosCheckmarkCircle />
                                        <p>UX and / or UI Audit</p>
                                    </div>
                                </div>
                                <div className="check-button">
                                    <div>
                                        <IoIosCheckmarkCircle />
                                        <p>Branding</p>
                                    </div>
                                </div>
                                <div className="check-button">
                                    <div>
                                        <IoIosCheckmarkCircle />
                                        <p>Website design</p>
                                    </div>
                                </div>
                                <div className="check-button">
                                    <div>
                                        <IoIosCheckmarkCircle />
                                        <p>Mobile/Web apps</p>
                                    </div>
                                </div>
                                <div className="check-button">
                                    <div>
                                        <IoIosCheckmarkCircle />
                                        <p>MVP/POC</p>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="select-container">
                                <div>
                                    <label htmlFor="">What stage are you at in your business?</label>
                                    <select name="business-stage" id="">
                                        <option value="I am launching a new project from scratch">I am launching a new project from scratch</option>
                                        <option value="Linkedin"> need help with a redesign project</option>
                                        <option value="I need ongoing design support">I need ongoing design support</option>
                                        <option value="Something else">Something else</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="">How did you hear about us</label>
                                    <select name="business-stage" id="">
                                        <option value="X-twitter">X-twitter</option>
                                        <option value="Linkedin"> LinkedIn</option>
                                        <option value="Instagram">Instagram</option>
                                        <option value="Youtube">Youtube</option>
                                        <option value="Google">Google</option>
                                    </select>
                                </div>
                                <button type="submit" className='form-submit-button'>Send message</button>
                            </div> */}
                        </form>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="footer-container">
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
                    <div className="footer-container">
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
                    <div className="footer-container">
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
                        <IoMdArrowUp fill=' #fff6'/></a>
                </div>
            </section>
        </div>
    )
}

export default Contact