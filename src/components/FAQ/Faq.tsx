import { useState } from 'react';
import './Faq.scss';
import { IoMdReturnRight, IoIosArrowDown } from "react-icons/io";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [activeIndex2, setActiveIndex2] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const toggleAccordion2 = (index: number) => {
        setActiveIndex2(activeIndex2 === index ? null : index);
    };

    const faqs = [
        {
            question: "Can I cancel or pause my subscription?",
            answer: (
                <>
                    <p>Absolutely! You can cancel or pause your subscription at any time, for any reason.</p>
                    <br />
                    <p>You don't pay for any downtime you experience at your business/agency.</p>
                    <br />
                    <p>We'll be waiting for you whenever you're ready to resume work.</p>
                </>
            )
        },
        {
            question: "Do you offer refunds?",
            answer: (
                <>
                    <p>While we can't refund you the time we spent designing for you, we can refund all the unused days that are left from the existing billing cycle (minus the transaction fees).</p>
                    <br />
                    <p>We've worked with over 20 businesses since launching last year and not even once had a request for a refund. We're confident you'll 🖤 our designs too</p>
                </>
            )
        },
        {
            question: "What type of designs are not covered?",
            answer: (
                <>
                    <p>Maple Design does not currently cover certain design work, including 3D modeling, complex packaging, and extensive print design (such as magazines or books).</p>
                </>
            )
        }
    ];
    const faqs2 = [
        {
            question: "How do I get started?",
            answer: (
                <>
                    <p>Getting started is easy! Simply choose your package and book an intro call with me. If you need a custom quote, reach out to me via query@mapledesign.co and we'll price it separately.</p>
                    <br />
                    <p>After we both decide we're a good fit, I'll onboard you within a day and we'll be ready to start working on your project as soon as the next day.
</p>
                    <br />
                </>
            )
        },
        {
            question: "I just want new branding and a new website. How much will I pay?",
            answer: (
                <>
                    <p>The $1,850k package is enough to get a completely new branding and a single page website.
</p>
                    <br />
                    <p>If there's time left (and usually that's the case) we can also create social media templates and a mini brand book or more sub pages for the landing page
</p>
                </>
            )
        },
        {
            question: "I run an agency> Can I hire you to design for us?",
            answer: (
                <>
                    <p>Absolutely! We work with a wide range of clients, including other design agencies.
</p>
                    <br />
                    <p>To discuss your agency's design needs in detail and explore how we can support your projects, book a call for any of the above packages.

                    </p>
                </>
            )
        }
    ];

    return (
        <div id='faq'>
            <section className="faq-section">
                <div className="faq-title-container">
                    <h2>Frequently asked questions</h2>
                    <span className="faq-section-description">Guiding ventures to brand eminence through innovative designs</span>
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
                <div className="accordion-container">
                    <div className='accordion'>
                        {faqs.map((faq, index) => (
                            <div className={`dropdown ${activeIndex === index ? 'active' : ''}`} key={index}>
                                <div className={`dropdown-toggle ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
                                    <h3 className="dropdown-title">{faq.question}</h3>
                                    <IoIosArrowDown className="icon" />
                                </div>
                                <div className="dropdown-content">
                                    {faq.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='accordion'>
                        {faqs2.map((faq, index) => (
                            <div className={`dropdown ${activeIndex2 === index ? 'active' : ''}`} key={index}>
                                <div className={`dropdown-toggle ${activeIndex2 === index ? 'active' : ''}`} onClick={() => toggleAccordion2(index)}>
                                    <h3 className="dropdown-title">{faq.question}</h3>
                                    <IoIosArrowDown className="icon" />
                                </div>
                                <div className="dropdown-content">
                                    {faq.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Faq;
