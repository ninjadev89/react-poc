
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 76px;
    background-image: linear-gradient(to right, #c31496 , #944ebe);
    justify-content:center;

    & .nav-link {
        text-align: left;
        font-size:12px;
        letter-spacing: 0px;
        color: #FFFFFF !important;
        margin-left:8px;
    }

    @media (max-width: 768px) { 
        height:auto;
        border-bootom: 1px solid #ccc;
    }
`;


export default {
    HeaderWrapper,
}
