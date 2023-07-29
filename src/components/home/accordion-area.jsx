import React from 'react';
import Image from 'next/image';
import review_data from '@data/review-data';

const AccordionArea = () => {
    const accordion_data = [
        {
            id: 1,
            id_2: 'headingOne',
            btn: 'accordion-button ',
            aria_expanded: true,
            style: 'accordion-collapse collapse show',
            data_base_target: '#collapse1',
            aria_controls: 'collapse1',
            btn_name: 'servicing time frame',
            description: `
            At Ready2, we understand the critical importance of timely and reliable transportation services. 
            Our servicing time frame is carefully designed to meet the diverse needs of our valued clients, ensuring that deliveries are made promptly and efficiently.`
        },
        {
            id: 2,
            id_2: 'headingOne',
            btn: 'accordion-button collapsed',
            aria_expanded: false,
            style: 'accordion-collapse collapse ',
            data_base_target: '#collapse2',
            aria_controls: 'collapse2',
            btn_name: 'Solo Driving: Agility and Versatility',
            description: `
            With our solo driving option, we provide agile and versatile transportation solutions. 
            Our experienced solo drivers are well-versed in navigating various routes, whether short distances within the city or long-haul journeys between states. 
            Solo drivers possess the expertise and dedication to handle smaller shipments or urgent deliveries with precision and efficiency.
             This option is ideal for clients seeking quick turnarounds and the flexibility to adapt to dynamically changing delivery demands.
            `
        },
        {
            id: 3,
            id_2: 'headingOne',
            btn: 'accordion-button collapsed',
            aria_expanded: false,
            style: 'accordion-collapse collapse ',
            data_base_target: '#collapse3',
            aria_controls: 'collapse3',
            btn_name: 'Team Driving: Speedy Deliveries with Safety',
            description: `
                For those who need things to move fast, our team driving solution is the way to go. 
                Our dedicated teams of skilled drivers work together to keep things moving smoothly. 
                With team driving, we minimize rest breaks and maximize drive time, ensuring faster deliveries while never compromising on safety. 
                This option is perfect for long-distance hauls and time-critical shipments where every moment counts.
            `
        },
        {
            id: 33,
            id_2: 'headingThree',
            aria_expanded: true,
            btn: 'accordion-button collapsed',
            style: 'acaccordion-collapse collapse',
            aria_controls: 'collapse4',
            data_base_target: '#collapse4',
            btn_name: 'our own products',
            description: `
            we're always looking for cool ways to make our transportation services even better. That's why we're cooking up some awesome products of our own that'll add extra value and convenience to your logistics journey. 
            `
        },
        {
            id: 42,
            id_2: 'headingFour',
            aria_expanded: true,
            btn: 'accordion-button collapsed',
            style: 'accordion-collapse collapse',
            aria_controls: 'collapse5',
            data_base_target: '#collapse5',
            btn_name: 'troubleshooting process',
            description: `
            At Ready2, our troubleshooting process is a systematic and proactive approach designed to identify and resolve any issues that may arise, ensuring our operations run smoothly and our customers receive the best service possible. When challenges arise, we tackle them head-on with efficiency and precision.
            `
        }
    ]





    return (
        <section className="acc-testi grey-bg-3 pt-120 pb-35 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="accordion__wrapper accordion__wrapper-1 mb-85 mr-40">
                            <div className="accordion" id="accordionExample">
                                {
                                    accordion_data.map((item) => (
                                        <div className="accordion-item" key={item.id}>
                                            <h2 className="accordion-header">
                                                <button className={item.btn} type="button" data-bs-toggle="collapse"
                                                    data-bs-target={item.data_base_target} aria-expanded={item.aria_expanded} aria-controls={item.aria_controls}>
                                                    {item.btn_name}
                                                </button>
                                            </h2>
                                            <div id={item.aria_controls} className={item.style} aria-labelledby={item.id_2}
                                                data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="testimonial-two mb-85">
                            {
                                review_data?.map((item) => (
                                    <div className="testimonial__item p-relative mb-60" key={item.id}>
                                        <div className="testimonial__item-img f-left">
                                            <Image src={item.image} style={{ width: '100%', height: 'auto' }} alt="Testimonial" />
                                        </div>
                                        <div className="testimonial__item-content white-bg fix">
                                            <p>
                                                {item.description}
                                            </p>
                                            <div className="testimonial__item-bottom">
                                                <div className="testimonial__item-auth">
                                                    <h4>{item.name}</h4>
                                                    <h6>{item.title}</h6>
                                                </div>
                                                <div className="testimonial__item-rate">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AccordionArea;