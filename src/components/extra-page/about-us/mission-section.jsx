import Link from 'next/link';
import React from 'react';
import mission_img from '@assets/img/mission/mission-img1.jpg';
import Image from 'next/image';


const MissionSection = () => {
   return (
      <section className="mission__area p-relative fix grey-bg-4 mb-120">
         <div className="mission__img m-img">
            <Image src={mission_img} style={{ width: "100%", height: "auto" }} alt="mission" />
         </div>
         <div className="container">
            <div className="row g-0">
               <div className="col-lg-6">
                  <div className="mission__content wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                     <div className="section__title mb-35">
                        <span className="sub-title">Our Mission</span>
                        <h2 className="title">Unlock Your Logistics Potential
                        </h2>
                     </div>
                     <div className="mission__text">
                        <p>Let us take care of your cargo while you focus on growing your business. Contact us today for seamless and efficient logistics solutions!
                        </p>
                        <div className="mission__text-inner">
                           <div className="mission__text-contact">
                              <div className="single-contact-info d-flex align-items-center">
                                 <div className="contact-info-icon">
                                    <Link href="#"><i className="flaticon-envelope"></i></Link>
                                 </div>
                                 <div className="contact-info-text">
                                    <span>send email</span>
                                    <h5><Link href="mailto:info@ready2.top">info@ready2.top</Link> </h5>
                                 </div>
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

export default MissionSection;