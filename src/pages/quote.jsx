import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';
import QuoteArea from '@components/extra-page/quote-area';
import FooterFour from '@layout/footer/footer-1';
import HeaderOne from '@layout/header/header-one';

const index = () => {
    return (
        <>
            <Wrapper>
                <SEO pageTitle={'Delport'} />
                <HeaderOne headerClass={'header__two menu-sticky white-bg'} />
                <QuoteArea />
                <FooterFour />
            </Wrapper>
        </>
    );
};

export default index;