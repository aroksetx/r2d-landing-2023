import React from 'react';
import FaqSection from './faq';
import Image from 'next/image';

const Overview = ({ item }) => {
    return (
        <div className="services__details-wrapper mb-60 globalinjector">
            <div className="services__details-img mb-35 m-img">
                <Image src={item?.image} style={{ width: "100%", height: "100%" }} alt="services" />
            </div>
            <div className="service__details-content mb-25">
                <div className="section__title mb-20">
                    <h3 className="title-sm">{item?.title && item?.title}</h3>
                </div>
                <div className="content-para">
                    {item?.content && item?.content}
                </div>
             
             
                {/* <FaqSection /> */}
            </div>
        </div>
    );
};

export default Overview;