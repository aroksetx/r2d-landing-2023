import Link from 'next/link';
import React from 'react';
import bg_1 from '@assets/img/cta/call-cat-bg-1.png';
import bg_2 from '@assets/img/cta/call-cta-bg-2.png';

const FooterOne = () => {

    const footer_data = [
        {
            id: 1,
            title: 'Call us now',
            img: bg_1,
            
            contact: 'tel:+12535698215',
            call_num: '+1 253 569 8215',
            icon: 'flaticon-telephone-call',
        },
        {
            id: 2,
            title: 'Write us now',
            img: bg_2,
            contact: 'info@ready2.top',
            call_num: 'info@ready2.top',
            icon: 'flaticon-envelope',
        },
    ]

    const handleSubmit = (e) => {
        e.prevenDefault()
    }
    return (
        <footer>
            <div className="footer-area footer__padd-1 p-relative footer-area1-bg pt-150 pb-50">
                <div className="call__cta position p-absolute">
                    <div className="container">
                        <div className="row">
                            {
                                footer_data.map((item) => (
                                    <div className="col-lg-6" key={item.id}>
                                        <div className="call__cta-wrapper call__cta-padd overlay overlay-red clip-box bg-css"
                                            style={{ backgroundImage: `url(${item.img.src})` }}>
                                            <div className="call__cta-content">
                                                <h6 className="call__cta-content-small-title">{item.title}</h6>
                                                <h3 className="call__cta-content-title"><Link href={item.contact}>{item.call_num}</Link></h3>
                                            </div>
                                            <div className="call__cta-icon">
                                                <i className={item.icon}></i>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-widget footer2-widget footer2-widget1 mb-50 pr-20">
                                <div className="footer-widget-title">
                                    <h4>about us</h4>
                                </div>
                                <p>
                                At Ready2, we take immense pride in our commitment to excellence and our dedication to providing top-notch transportation services.
                                </p>
                                <div className="footer-social-link mt-40">
                                    {/* <ul>
                                        <li><Link href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="https://twitter.com/"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="https://www.youtube.com/"><i className="fab fa-youtube"></i></Link></li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                     
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-widget footer2-widget footer2-widget3 mb-50 pl-55">
                                <div className="footer-widget-title">
                                    <h4>our services</h4>
                                </div>
                                <ul className="footer-widget-link-2">
                                    <li><i className="fas fa-truck"></i><Link href="/services-details/van-sprinter-delivery">Van/Sprinter Delivery</Link></li>
                                    <li><i className="fas fa-box"></i><Link href="/services-details/box-truck-delivery">Box Truck Delivery</Link></li>
                                    <li><i className="fas fa-home"></i><Link href="/services-details/moving">Moving</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-widget footer2-widget footer2-widget2 mb-50 pl-30">
                            
                               
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-widget footer2-widget footer2-widget4 mb-50 pl-10 pr-40">
                                <div className="footer-widget-title">
                                    <h4>Subscribe us</h4>
                                </div>
                                <p className="mb-20">Subscribe us & receive our office & update in your inbox directly</p>
                                <form onSubmit={handleSubmit} action="#" className="subscribe-form subscribe-form-footer1">
                                    <div className="s-clip p-relative s-input mb-10">
                                        <input type="text" placeholder="Enter your email" />
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <button type="submit">Subscribe Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-menu-area red-bg">
                <div className="container">
                    <div className="footer-menu-box two">
                        <div className="row align-items-center">
                            <div className="col-xxl-7 col-lg-5 ">
                                <div className="footer-menu mb-15">
                                    <nav>
                                        <ul>
                                            <li><Link href="/about-us">About</Link></li>
                                            <li><Link href="/contact">contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xxl-5 col-lg-7">
                                <div className="copy-right-text-2 mb-15">
                                    <p>Created by <Link href="https://chernomor.cc/">Chernomor LLC</Link> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterOne;