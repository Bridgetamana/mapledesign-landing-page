import { useState } from "react";
import "./service.scss";
import { MdArrowOutward } from "react-icons/md";
import Imageoverlay from '../../assets/img/image-overlay.png';
import Imageoverlay2 from '../../assets/img/image-overlay2.png';
import Imageoverlay3 from '../../assets/img/image-overlay3.png';
import Imageoverlay4 from '../../assets/img/image-overlay4.png';
import Imageoverlay5 from '../../assets/img/image-overlay5.png';
import Imageoverlay6 from '../../assets/img/image-overlay6.png';
import Eyeclose from '../../assets/img/eye-hide.svg';
import Eyeopen from "../../assets/img/eye-show.svg";

const Service = () => {
    const [isEyeOpen, setIsEyeOpen] = useState(true);
    const [isImageVisible, setIsImageVisible] = useState(true);
    const [isTagsVisible, setIsTagsVisible] = useState(true);
    const [isServiceNumberVisible, setIsServiceNumberVisible] = useState(false);


    const toggleVisibility = () => {
        setIsEyeOpen(!isEyeOpen);
        setIsImageVisible(!isImageVisible);
        setIsTagsVisible(!isTagsVisible);
        setIsServiceNumberVisible(!isServiceNumberVisible);
    };

    const services = [
        {
            number: 1,
            tags: ['Logo design', 'Brand Identity Design', 'Brand Strategy', 'Brand Collateral', 'Brand Guidelines'],
            text: 'Logo & Brand design',
            imageOverlay: Imageoverlay,
        },
        {
            number: 2,
            tags: ['UI/UX', 'User Research & Testing', 'Product Strategy', 'Wireframes &cFlow', 'Design Systems'],
            text: 'Mobile app design',
            imageOverlay: Imageoverlay2,
        },
        {
            number: 3,
            tags: ['UI/UX', 'User Research & Testing', 'Product Strategy', 'Wireframes & Flow', 'Brand Guidelines'],
            text: 'Web app design',
            imageOverlay: Imageoverlay3,
        },
        {
            number: 4,
            tags: ['UI/UX', 'UI/UX', 'Content Strategy', 'Visual Design', 'Content Management', 'User Testing'],
            text: 'Website design',
            imageOverlay: Imageoverlay4,
        },
        {
            number: 5,
            tags: ['Prototyping', 'Frontend development', 'CMS', 'User Testing', 'Training and support', 'HTML, CSS & Javascript'],
            text: 'Webflow development',
            imageOverlay: Imageoverlay5,
        },
        {
            number: 6,
            tags: ['Prototyping', 'Frontend development', 'SEO & Analytics', 'User Testing', 'Training & Support'],
            text: 'Framer development',
            imageOverlay: Imageoverlay6,
        },

    ];

    return (
        <div className="section-three">
            <section className="number-section">
                <div className="title-tag">in numbers</div>
                <div className="number-container">
                    <div className="number-details">
                        <h2 className="number-title">10M+</h2>
                        <div className="number-description">
                            More than USD 10 million raised by our clients from our
                            collaboration
                        </div>
                    </div>
                    <div className="number-details">
                        <h2 className="number-title">40+</h2>
                        <div className="number-description">
                            We have helped 40+ business in building from scratch

                        </div>
                    </div>
                    <div className="number-details">
                        <h2 className="number-title">10+</h2>
                        <div className="number-description">
                            We have more than 10 years of experience serving and building for the customers
                        </div>
                    </div>
                    <div className="number-details">
                        <h2 className="number-title">3K+</h2>
                        <div className="number-description">
                            Thousands of design requests processed for clients from across the globe
                        </div>
                    </div>
                </div>
            </section>
            <section className="service-section" id="service">
                <div className="tag-title">services</div>
                <div>

                        <div className="sticky-position">
                        {services.map((service, index) => (

                            <div className="service-container" key={index}>
                                <div className="service-wrapper">
                                    {isServiceNumberVisible && (

                                    <h2 className="service-number">{service.number}</h2>
                                    )}
                                    <div className="service-tag-container">
                                        {isTagsVisible && (
                                        <div>
                                        {service.tags.map((tag, index) => (
                                                <span key={index} className="service-tag">
                                                    <p>{tag}</p>
                                                </span>
                                            ))}
                                        
                                        </div>
                                        )}
                                    </div>
                                    <div className="service-text-container">
                                        <a href="#">
                                            <p>{service.text}</p>
                                            <div className="arrow-circle">
                                                <MdArrowOutward />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="white-overlay"></div>
                                    {isImageVisible && (
                                        <div>
                                            <img src={service.imageOverlay} alt="Overlay" className="image-overlay" />
                                            <div className="gradiant-linear"></div>
                                        </div>
                                    )}
                                    <div className="gradiant-linear"></div>
                                    <div className="eye-container" onClick={toggleVisibility}>
                                        {isEyeOpen ? (
                                            <img src={Eyeopen} className="open-eye" alt="Open Eye" />
                                        ) : (
                                            <img src={Eyeclose} className="close-eye" alt="Close Eye" />
                                        )}
                                    </div>
                                </div>
                            </div>
                    ))}
                        </div>
                </div>
            </section>

        </div>
    )
}

export default Service