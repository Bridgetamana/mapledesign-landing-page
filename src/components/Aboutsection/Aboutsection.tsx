import { IoArrowForward } from "react-icons/io5";
import "./Aboutsection.scss";
import Slide1 from '../../assets/img/slide-one.png';
import Slide2 from '../../assets/img/slide-two.png';
import Slide3 from '../../assets/img/slide-three.png';
import Slide4 from '../../assets/img/slide-four.png';
import Slide5 from '../../assets/img/slide-five.png';
import Slide6 from '../../assets/img/slide-six.png';
const Aboutsection = () => {
    
    return (
        <div id="about">
            <section className="about-section" >
                <div className="about-wrapper">
                    <p className="title-tag">About us</p>
                    <div className="description-container">
                        <h4 className="title-description">We partner with companies, brands and startups of all sizes from across the gloBe</h4>
                        <a href="#" className='main-button'>
                            <div>

                                <p>Check our work in Figma</p>
                                <IoArrowForward />
                            </div>
                            <div className='bottom-border'></div>
                        </a>
                    </div>
                </div>
            </section>
            <div className="slide-wrapper">
                <div className="slider">
                    <div className="slides">
                        <img src={Slide1} alt="" />
                    </div>
                    <div className="slides">
                        <img src={Slide2} alt="" />
                    </div>
                    <div className="slides">
                        <img src={Slide3} alt="" />
                    </div>
                    <div className="slides">
                        <img src={Slide4} alt="" />
                    </div>
                    <div className="slides">
                        <img src={Slide5} alt="" />
                    </div>
                    <div className="slides">
                        <img src={Slide6} alt="" />
                    </div>
                    <div className="slides">
                        <img src={Slide1} alt="" />
                    </div>
                    <div className="slides">
                        <img src={Slide2} alt="" />
                    </div>
                    <div className="slides">
                        <img src={Slide3} alt="" />
                    </div>
                    <div className="slides">
                        <img src={Slide4} alt="" />
                    </div>
                    <div className="slides">
                        <img src={Slide5} alt="" />
                    </div>
                    <div className="slides">
                        <img src={Slide6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutsection