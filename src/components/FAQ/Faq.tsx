import './Faq.scss';
import { IoMdReturnRight, IoIosArrowDown } from "react-icons/io";

const Faq = () => {
    return (
        <div>
            <section className="faq-section">
                <div className="faq-title-container">
                    <h2>Frequently asked questions</h2>
                    <p className="faq-section-description">Guilding ventures to brand eminence through innovative designs</p>
                    <div className="faq-button">
                        <IoMdReturnRight />
                        <p>Email us for queries</p>
                    </div>
                </div>
                <div className="accordion-container">
                    <div className='accordion'>                   
                        <div className="dropdown">
                            <div className="dropdown-toggle">
                                <h3 className="dropdown-title">What is better? Which dsign package should i choose</h3>
                                <div>
<IoIosArrowDown />
                                </div>
                            </div>
                            <div className="dropdown-content">
                                <p>It ultimately depends on your specific needs and goals. The Starter packages are perfect if you have ongoing design needs or a series of projects you need to fulfill (as an agency, for example).
                                </p>
                                <br></br>
                                <p>A $3,550k startup+ package offers a much more complex engagement. It comes with more people on board, a lead designer (me), a senior level designer, and a no-code designer. We might also bring in an illustrator or a motion designer when needed.
                                </p>
                                <br></br>
                                <p>With a $3,550K+ package, you can benefit from continuous design support at the highest quality.
                                </p>
                                <br></br>
                                <p>It's also a great option if you need to get your MVP to market fast, and without any hassles. We've got proven record of client success.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='accordion'>
                        <div className="dropdown">
                            <div className="dropdown-toggle">
                                <h3 className="dropdown-title">What is better? Which dsign package should i choose</h3>
                                <div>
                                    <IoIosArrowDown />
                                </div>
                            </div>
                            <div className="dropdown-content">
                                <p>It ultimately depends on your specific needs and goals. The Starter packages are perfect if you have ongoing design needs or a series of projects you need to fulfill (as an agency, for example).
                                </p>
                                <br></br>
                                <p>A $3,550k startup+ package offers a much more complex engagement. It comes with more people on board, a lead designer (me), a senior level designer, and a no-code designer. We might also bring in an illustrator or a motion designer when needed.
                                </p>
                                <br></br>
                                <p>With a $3,550K+ package, you can benefit from continuous design support at the highest quality.
                                </p>
                                <br></br>
                                <p>It's also a great option if you need to get your MVP to market fast, and without any hassles. We've got proven record of client success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Faq