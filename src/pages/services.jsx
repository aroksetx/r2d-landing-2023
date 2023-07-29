import ServicesMainArea from '@components/extra-page/services';
import SEO from '@components/seo';
import FooterOne from '@layout/footer/footer-1';
import HeaderOne from '@layout/header/header-one';
import Wrapper from '@layout/wrapper';
import React from 'react';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Services'} />
            <HeaderOne headerClass={'header__two menu-sticky white-bg'} />
            <ServicesMainArea />
            <FooterOne />
        </Wrapper>
    );
};

export default index;