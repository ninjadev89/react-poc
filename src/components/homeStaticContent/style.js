
import styled from 'styled-components';
import profileBg from '../../assets/images/profileBg.svg';

const AboutUsWrapper = styled.div`
   padding: 120px 0;
   background: #F7F8FA;

    @media (max-width: 768px) { 
        padding: 60px 0;
    }

   & p {
       font-size: 14px;
       color: #261323;
       line-height: 28px;
   }
`;

const AboutUsImage = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    & img {
        max-width:80%;
    }
`;

const SectionTitle = styled.h3`
    font-size: 36px;
    text-align: left;
    color: #261323;
    font-weight:bold;
    margin-bottom: 50px;

    @media (max-width: 768px) { 
        margin-bottom: 30px;
    }
`;

const TitleIcon = styled.div`
    display:flex;
    margin-bottom: 15px;
`;

const OurTeamWrapper = styled.div`
    padding: 120px 0;
    color: #261323;

    @media (max-width: 768px) { 
        padding: 60px 0;
    }
`;

const TeamMembersWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height: 100%;
`;

const TeamMemberWrapper = styled.div`
    text-align:center;
    width:170px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-image: url(${profileBg});
    background-size: 100% auto;
    background-repeat: no-repeat;
    padding-left:70px;

    @media (max-width: 768px) { 
        padding-left:40px;
        width: 120px;
    }
    
    & div {
        width: 96px;
        height:96px;
        margin-bottom: 15px;
        @media (max-width: 768px) { 
            width: 60px;
            height: 60px;
        }
        img {
            max-width:100%;
            height:auto;
        }
    }

    & h6 {
        color: #261323;
        font-size: 14px;
        margin-bottom : 2px;
    }

    p {
        font-size: 12px;
        color: #B5B5B5;
    }

`;

export default {
    AboutUsWrapper,
    AboutUsImage,
    SectionTitle,
    TitleIcon,
    TeamMembersWrapper,
    TeamMemberWrapper,
    OurTeamWrapper
}
