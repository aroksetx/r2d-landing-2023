import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import about_time from '@assets/img/about/about-time.png';
import about_img from '@assets/img/about/about-img.png';

const AboutUsArea = () => {
    return (
        <section className="about__area about__area-padding pt-60 pb-60 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-xl-5">
                        <div className="about__img mb-60 p-relative wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay=".3s">
                            <Image src={about_img} style={{ width: '100%', height: 'auto' }} alt='About' />
                            <div className="about__time-img p-absolute w-img vert-move">
                                <Image src={about_time} style={{ width: '100%', height: 'auto' }} alt='About'  />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-7">
                        <div className="about__content mb-60 wow fadeInRight" data-wow-duration="1.5s" data-wow-delay=".5s">
                            <div className="section__title mb-35">
                                <span className="sub-title">about us</span>
                                <h2 className="title">A company involved in <br /> servicing, maintenance.</h2>
                            </div>
                            <div className="about__content-inner mb-35">
                                <p className="mb-15">From finance, retail, and travel, to social media, cybersecurity, adtech,
                                    and more, market leaders are leveraging web data to maintain their transt
                                    advantage. Discover how it can work for you.
                                </p>
                                <p>With over 60 years of experience, we understand what a vital role we
                                    play for our customers. We strive to work seamlessly with our customers
                                    as if we were an in-house department. Transport offers a host of logistic
                                    management services and supply chain solutions.
                                </p>
                            </div>
                            <div className="about__btn">
                                <Link className="fill-btn clip-btn" href="/about-us">learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsArea;