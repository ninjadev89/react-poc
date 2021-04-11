
import styled from 'styled-components';

const FooterWrapper = styled.div`
    height: 420px;
    background: #F7F8FA;
    padding: 60px 0;
`;

const FooterLogo = styled.div`
    display:flex;
    width: 100px;
    margin-bottom:40px;
`;

const AppStoreButton = styled.button`
    display:block;
    width: 134px;
    height: 35px;
    background: #FFFFFF;
    box-shadow: 0px 1px 21px #E0247D24;
    border-radius: 6px;
    letter-spacing: 0px;
    color: #E0247D;
    font-size:12px;
    margin-bottom:20px;
    border: 1px solid transparent;

    &:hover,
    &:focus {
        background: #E0247D;
        color: #fff;
    }
`;

const footerLinks = styled.div`
    max-width: 180px;

    & h6 {
        margin: 15px 0 30px;
        letter-spacing: 0px;
        color: #261323;
        font-size:14px;
    }

    p{
        color: #B5B5B5;
        font-size: 14px;
        margin-bottom: 12px;
        line-height: 18px;
    }

    & a,a:hover,a:focus {
        color: #B5B5B5;
        font-size: 14px;
    }
`;

const RightsText = styled.p`
    margin: 60px 0 0px;
    text-align:center;
    color: #B5B5B5;
    font-size: 14px;
`;

export default {
    FooterWrapper,
    FooterLogo,
    AppStoreButton,
    footerLinks,
    RightsText
}
