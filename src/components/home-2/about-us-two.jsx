import Link from 'next/link';
import React from 'react';
import about_img_3 from '@assets/img/about/about-page-1.jpg';
import Image from 'next/image';

const AboutUsTwo = () => {
    return (
        <section className="about__3 about__gray-bg p-relative pt-120 pb-60">
            <div className="container">
                <div className="row align-items-center wow fadeInU" data-wow-duration="1.5s"
                    data-wow-delay=".3s">
                    <div className="col-xl-6 col-lg-6">
                        <div className="about__3-img-wrapper p-relative mb-60">
                            <div className="about__3-main w-img">
                                <Image src={about_img_3} style={{ width: '100%', height: 'auto' }} alt={"About"} />
                            </div>
                            <div className="about__3-text clip-box-sm">
                                <span><i className="far fa-trophy-alt"></i></span>
                                <h4 className="about__3-title">5 Years on a market</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="about__3-content mb-60">
                            <div className="section__title mb-30">
                                <span className="sub-title">about us</span>
                                <h2 className="title">Ready2: Seamless Solutions for Efficient Deliverie</h2>
                            </div>
                            <div className="about__3-content-inner p-relative">
                                <div className="about__3-content-left">
                                    <p>Whether it's a small package or a large freight, we handle each delivery with the utmost care and attention to detail. Our dedicated team of logistics experts works diligently to ensure your cargo reaches its destination safely and on time, no matter the distance.
                                    </p>
                                    
                                </div>
                                <div className="about__3-content-right">
                                    <div className="about__3-shadow">
                                        <div className="about__3-content-num">
                                            <h2>5</h2>
                                            <h6>States</h6>
                                        </div>
                                    </div>
                                    <div className="about__3-shadow">
                                        <div className="about__3-content-num">
                                            <h2>45</h2>
                                            <h6>Trucks</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsTwo;