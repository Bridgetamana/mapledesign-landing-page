import './Testimonial.scss';
import { IoMdReturnRight, IoMdPause, IoMdPlay, IoIosStar } from "react-icons/io";
import Testimonial1 from '../../assets/img/testimonial1.jpg';
import Testimonial3 from '../../assets/img/testimonial3.jpg';

const Testimonial = () => {
    return (
        <div id='testimonials'>
            <section className='testimonial-section'>
                <div className="testimonial-title-container">
                    <h2>Results speak for themselves so do our clients</h2>
                    <p className="testimonial-section-description">Guilding ventures to brand eminence through innovative designs</p>
                    <div className="testimonial-button">
                        <IoMdReturnRight />
                        <p>Check our pricing</p>
                    </div>
                </div>
                <div className="testimonials-container">
                    <div className="testimonial">
                        <div className="testimonial-wrapper">
                            <div className="testimonial-image">
                                <img src={Testimonial1} alt="" />

                            </div>
                            <div className="video-state-button">
                                <div className="play">
                                    <IoMdPlay />
                                </div>
                                <div className="pause">
                                    <IoMdPause />
                                </div>
                            </div>
                            <div className="testimonial-video-title">
                                <div className="textimonial-text-container">
                                    <h4>John Doe</h4>
                                    <p>CEO Steel AI</p>
                                </div>
                                <div className="testimonial-rate-container">
                                    <div>
                                        <p>5.0</p>
                                        <IoIosStar />
                                    </div>
                                    <h4 className="testimonial-rate-description">Excellent</h4>
                                </div>
                                <div className="testimonial-black-overlay">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial-wrapper">
                            <div className="testimonial-image">
                                <img src={Testimonial3} alt="" />

                            </div>
                            <div className="video-state-button">
                                <div className="play">
                                    <IoMdPlay />
                                </div>
                                <div className="pause">
                                    <IoMdPause />
                                </div>
                            </div>
                            <div className="testimonial-video-title">
                                <div className="textimonial-text-container">
                                    <h4>Jane Doe</h4>
                                    <p>CEO Steel AI</p>
                                </div>
                                <div className="testimonial-rate-container">
                                    <div>
                                        <p>5.0</p>
                                        <IoIosStar />
                                    </div>
                                    <h4 className="testimonial-rate-description">Excellent</h4>
                                </div>
                                <div className="testimonial-black-overlay">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial-wrapper">
                            <div className="testimonial-image">
                                <img src={Testimonial1} alt="" />

                            </div>
                            <div className="video-state-button">
                                <div className="play">
                                    <IoMdPlay />
                                </div>
                                <div className="pause">
                                    <IoMdPause />
                                </div>
                            </div>
                            <div className="testimonial-video-title">
                                <div className="textimonial-text-container">
                                    <h4>John Doe</h4>
                                    <p>CEO Steel AI</p>
                                </div>
                                <div className="testimonial-rate-container">
                                    <div>
                                        <p>5.0</p>
                                        <IoIosStar />
                                    </div>
                                    <h4 className="testimonial-rate-description">Excellent</h4>
                                </div>
                                <div className="testimonial-black-overlay">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial