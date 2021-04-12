
import styled from 'styled-components';
import homeBanner from '../../assets/images/homeBanner.png';
import bannerLeft from '../../assets/images/bannerLeft.svg';
import bannerRight from '../../assets/images/bannerRight.svg';


const BannerWrapper = styled.div`
    width: 100%;
    height: 300px;
    background-image: linear-gradient(to right, #c31496 , #944ebe);
    position: relative;
    z-index: 1;

    & .carousel-item {
        height: 300px;
        // background:url(${homeBanner});
        // background-size:cover;
        // background-repeat: no-repeat;
    }

    & .container {
        position:relative;
        height:100%;
    }

    & .carousel-caption {
        right: auto;
        left: 0;
        top: 0;
        bottom: auto;
        text-align: left;
        padding: 80px 20px;
        height: 100%;
        // display: flex;
        // flex-direction: column;
        // justify-content: center;

        & h3 {
            font-size: 28px;
            color: #FF9DBE;
            margin-bottom:0;
        }
        & p {
            font-size: 28px;
            color: #FFF;
        }
    }

    img {
        display:block;
        width:100%;
        height:auto;
    }

    .carousel-control-next,
    .carousel-control-prev {
        width: 72px;
        height: 72px;
        background: rgba(255,255,255,0.5);

        @media (max-width: 768px) {
            width: 32px;
            height: 32px;
        }
    }

    .carousel-control-prev-icon {
        background-image: url(${bannerLeft});
    }

    .carousel-control-next-icon {
        background-image: url(${bannerRight});
    }

    .carousel-control-next-icon,
    .carousel-control-prev-icon {
        width: 27px;
        height: 50px;        
        @media (max-width: 768px) {
            width: 20px;
            height: 24px;
        }
    }

    .carousel-control-prev {
        left: 30px;
        top:80px;
        @media (max-width: 768px) {
            left: 15px;
            top:auto;
            bottom : 80px;
        }
    }

    .carousel-control-next {
        right: 30px;
        top:80px;
        @media (max-width: 768px) {
            right: 15px;
            top:auto;
            bottom : 80px;
        }
    }

    .carousel-indicators {
        display:none;
    }

`;


export default {
    BannerWrapper,
}
