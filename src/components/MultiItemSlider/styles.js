
import styled from 'styled-components';

const MultiItemSliderWrapper = styled.div`
    h4 {
        font-size: 18px;
        font-weight:bold;
        color:#261323;
        letter-spacing: 0.27px;
        margin-bottom: 15px;
    }

    & .react-multi-carousel-list {
        height:auto;
    }

    & .react-multi-carousel-dot-list {
        display:none;
    }

    .react-multiple-carousel__arrow {
        background: rgba(255,255,255,1);
        box-shadow: 3px 2px 13px #0000004A;
    }

    .react-multiple-carousel__arrow::before {
        color: #261323;
    }

    .react-multiple-carousel__arrow--left {
        left: 2px;
    }

    .react-multiple-carousel__arrow--right {
        right: 2px;
    }

`;

const MultiItemSliderItem = styled.div`
    max-width: 300px;
    width:90%;
    position:relative;
    height: 110px;
    border-radius: 6px;
    border:1px solid #ccc;

    & span {
        width: 100%;
        height: 34px;
        background: rgba(0,0,0,0.5);
        border-radius: 0px 0px 6px 6px;
        opacity: 1;
        position:absolute;
        bottom:0;
        left:0;
        right:0;
        font-size:14px;
        font-weight:500;
        color:#fff;
        padding: 5px 15px;
    }
`;

export default {
    MultiItemSliderWrapper,
    MultiItemSliderItem
}