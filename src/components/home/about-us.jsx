import Link from 'next/link';
import React from 'react';
import about_img from '@assets/img/about/about-us-2.png';
import Image from 'next/image';
import 'react-modal-video/css/modal-video.min.css';
import VideoModal from '@components/common/modals/modal-video';
import useModal from '@hooks/use-modal';

const AboutUs = () => {
    const { isVideoOpen, setIsVideoOpen } = useModal();
    return (
        <>
            <section className="about__area-2 pt-120 pb-60 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-xl-5">
                            <div className="about__content-2 mb-60 wow fadeInRight" data-wow-duration="1.5s" data-wow-delay=".5s">
                                <div className="section__title mb-50">
                                    <span className="sub-title">about us</span>
                                    <h2 className="title"> Your Trusted Partner <br /> in  Reliable Transportation Solutions.</h2>
                                </div>
                                <div className="about__content-tab-2 mt-40">
                                    <ul className="nav mb-5" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active clip-lg-btn" id="approch-tab" data-bs-toggle="tab"
                                                data-bs-target="#approch" type="button" role="tab" aria-controls="approch"
                                                aria-selected="true">our approch</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link clip-lg-btn" id="goal-tab" data-bs-toggle="tab"
                                                data-bs-target="#goal" type="button" role="tab" aria-controls="goal"
                                                aria-selected="false">our goal</button>
                                        </li>
                                       
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="approch" role="tabpanel" aria-labelledby="approch-tab">
                                            <p>Our Approach: Delivering Beyond Expectations. 
                                                At the core of our approach lies a customer-centric focus. We firmly believe in understanding the 
                                                unique needs of each client and tailoring our services to match their requirements. 
                                                With a seamless blend of cutting-edge technology and personalized attention, we strive to 
                                                create lasting partnerships with our customers and become an extension of their businesses.
                                            </p>
                                            <div className="about__content-tab-btn mt-35">
                                                <Link className="fill-btn clip-md-btn" href="/about-us">learn more</Link>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="goal" role="tabpanel" aria-labelledby="goal-tab">
                                            <p>
                                            Our Goals: Efficiency, Reliability, and Customer Satisfaction.
                                                Our primary goal is to optimize transportation solutions to enhance efficiency and reliability. 
                                                By leveraging data-driven insights and the latest advancements in the industry, we aim to streamline our operations, 
                                                minimize delivery times, and reduce costs without compromising on quality. We also recognize the importance of sustainability and 
                                                are committed to adopting eco-friendly practices to minimize our environmental impact.
                                            </p>
                                            <div className="about__content-tab-btn mt-35">
                                                <Link className="fill-btn clip-md-btn" href="/about-us">learn more</Link>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-7">
                        
                            <div className="about__img-2 mb-60 ml-60 w-img p-relative wow fadeInLeft" data-wow-duration="1.5s"
                                data-wow-delay=".3s">
                                <Image src={about_img} style={{ width: "100%", height: "auto" }} alt="About" />
                                {/* TODO: uncoment when video will be needed */}
                                {/* <div className="about__btn-2">
                                    <button type='button'
                                        className="popup-video play-btn play-btn-white" onClick={() => setIsVideoOpen(true)}><i className="fas fa-play"></i>
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={"J72oMj5mWLw"} />
        </>

    );
};

export default AboutUs;