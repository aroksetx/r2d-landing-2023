import Image from 'next/image';
import React from 'react';
import preloader_icon from '@assets/img/logo/preloader-icon.gif';

const Preloader = () => {
  return (
    <>
      <div className="preloader">
        <Image src={preloader_icon} alt='preloader-icon' style={{ width: '100%', height: 'auto' }} />
      </div>

    </>
  );
};
export default Preloader;