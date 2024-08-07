import './work.scss';
import { IoMdReturnRight } from "react-icons/io";
import Casestudyimage1 from '../../assets/img/work-image1.png';
import Casestudyimage2 from '../../assets/img/work-image2.png';
import Casestudyimage3 from '../../assets/img/work-image3.png';
import Casestudyimage4 from '../../assets/img/work-image4.png';

const Work = () => {
    return (
        <div id='work'>
            <section className="work-section">
                <div className="work-title-container">
                    <h2>our case studies</h2>
                    <span>Guiding ventures to brand eminence through innovative designs</span>
                    <div className="work-button">
                        <IoMdReturnRight />
                        <p>Check our work</p>
                    </div>
                    <div className='work-border'></div>
                </div>
                <div className="slide-wrapper">
                    <div className="slider">
                        <div className="slides">
                            <img src={Casestudyimage1} alt="" />
                        </div>
                        <div className="slides">
                            <img src={Casestudyimage2} alt="" />
                        </div>
                        <div className="slides">
                            <img src={Casestudyimage3} alt="" />
                        </div>
                        <div className="slides">
                            <img src={Casestudyimage4} alt="" />
                        </div>
                        <div className="slides">
                            <img src={Casestudyimage1} alt="" />
                        </div>
                        <div className="slides">
                            <img src={Casestudyimage2} alt="" />
                        </div>
                        <div className="slides">
                            <img src={Casestudyimage3} alt="" />
                        </div>
                        <div className="slides">
                            <img src={Casestudyimage4} alt="" />
                        </div>
                        <div className="slides">
                            <img src={Casestudyimage1} alt="" />
                        </div>
                        <div className="slides">
                            <img src={Casestudyimage2} alt="" />
                        </div>
                        <div className="slides">
                            <img src={Casestudyimage3} alt="" />
                        </div>
                        <div className="slides">
                            <img src={Casestudyimage4} alt="" />
                        </div>
                        
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Work