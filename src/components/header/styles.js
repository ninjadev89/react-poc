
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 76px;
    // background: #E0247D 0% 0% no-repeat padding-box;
    background-image: linear-gradient(to right, #c31496 , #944ebe);
    justify-content:center;

    & .nav-link {
        text-align: left;
        font-size:12px;
        letter-spacing: 0px;
        color: #FFFFFF !important;
        margin-left:8px;
    }
`;


export default {
    HeaderWrapper,
}
