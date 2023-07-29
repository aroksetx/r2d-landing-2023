import Link from 'next/link';
import React from 'react';

const WidgetServices = () => {
    return (
        <div className="sidebar__widget mb-40">
            <div className="sidebar-title mb-25">
                <h4>Our Services</h4>
            </div>
            <ul className="widget-services">
                <li><Link href="/services-details/van-sprinter-delivery"><i className="fas fa-truck"></i>VAN/SPRINTER DELIVEY</Link></li>
                <li><Link href="/services-details/moving"><i className="fas fa-box"></i>MOVING</Link></li>
                <li><Link href="/services-details/box-truck-delivery"><i className="fas fa-truck-moving"></i>BOX TRUCK DELIVEY</Link></li>
            </ul>
        </div>
    );
};

export default WidgetServices;