import './price.scss';
import { IoMdReturnRight } from "react-icons/io";
import SingleDesigner from '../../assets/img/ico_plan_single_designer-1.svg';
import Time from '../../assets/img/time-icon.svg';
import Project from '../../assets/img/ico_plan_single_project.svg';
import Check from '../../assets/img/ico_plan_check.svg';

interface Plan {
    PlanName: string;
    description: string;
    services: { icon: string; text: string }[];
    additionalInfo: string;
    discountPrice: string;
    actualPrice: string;
}

const Price = () => {
    const plans: Plan[] = [
        {
            PlanName: "Starter",
            description: "Affordable and convenient",
            services: [
                { icon: SingleDesigner, text: "1x Senior Designer, 4 x days a week" },
                { icon: Time, text: "Task delivered in 24-48 hours" },
                { icon: Project, text: "1x active project" },
                { icon: Check, text: "Slack, Trello for updates" },
                { icon: Check, text: "Pause or resume when needed" },
                { icon: Check, text: "* No contract, cancel anytime" }
            ],
            additionalInfo: "Website development (+$500)",
            discountPrice: "$1,850/m",
            actualPrice: "$2,650",
        },
        {
            PlanName: "Startup",
            description: "Better quality, faster and more convienient",
            services: [
                { icon: SingleDesigner, text: "2x Senior + 1 Lead Designer, 5 x days a week" },
                { icon: Time, text: "Daily updates, priority support" },
                { icon: Project, text: "1x active project" },
                { icon: Check, text: "Slack, Trello, Zoom calls" },
                { icon: Check, text: "Pause or resume when needed" },
                { icon: Check, text: "* No contract, cancel anytime" }
            ],
            additionalInfo: "Framer/Webflow development included",
            discountPrice: "$3550/m",
            actualPrice: "$4,450",
        },
        {
            PlanName: "fixed scope",
            description: "One timer, scope based projects",
            services: [
                { icon: SingleDesigner, text: "fixed scope of work" },
                { icon: Time, text: "Delivered in milestones" },
                { icon: Project, text: "Custom development" },
                { icon: Check, text: "Slack, Trello + Zoom calls" },
                { icon: Check, text: "Pause or resume when needed" },
                { icon: Check, text: "* No contract, cancel anytime" }
            ],
            additionalInfo: "Framer/Webflow development included",
            discountPrice: "$1,000/m",
            actualPrice: "Starting from",
        }
    ];

    return (
        <div id='price'>
            <section className="price-section">
                <div className="price-title-container">
                    <h2>Clear Pricing</h2>
                    <span>Guiding ventures to brand eminence through innovative designs</span>
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
                <div className="plans-wrapper">
                    {plans.map((plan, index) => (
                        <div className="plans-container" key={index}>
                            <div className="price-container">
                                <h2 className='price'>{plan.PlanName}</h2>
                                <p className="price-description">{plan.description}</p>
                            </div>
                            <div className="price-text-container">
                                {plan.services.map((service, idx) => (
                                    <div className="plans-service-wrapper" key={idx}>
                                        <img src={service.icon} alt={`${plan.PlanName} icon`} className='plans-service-icon' />
                                        <p>{service.text}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="plans-button-container">
                                <p>{plan.additionalInfo}</p>
                                <a href="" className='switch'>
                                    <div className="switch-circle"></div>
                                </a>
                            </div>
                            <div className="price-buttons-container">
                                <div className="price-textholder">
                                    <div>

                                        <p className='discount-price'>{plan.discountPrice}</p>
                                        <img src="" alt="" />
                                    </div>
                                    <p className='actual-price'>{plan.actualPrice}</p>
                                </div>
                                <div className="price-action-button">
                                    Get Started
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Price;
