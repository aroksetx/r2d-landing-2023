
import RegisterArea from "@components/login-register/register-area";
import HeaderOne from "@layout/header/header-one";
import FooterOne from '@layout/footer/footer-1';
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import Wrapper from "@layout/wrapper";
import SEO from "@components/seo";


export default function Register() {
  return (
    <Wrapper>
      <SEO pageTitle={'Delport'} />
      <HeaderOne headerClass={'header__two menu-sticky white-bg'}/>
      <Breadcrumb title="Register" subTitle="Register" />
      <RegisterArea/>
      <FooterOne/>
    </Wrapper>
  )
}