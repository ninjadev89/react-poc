
import styled from 'styled-components';

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position:relative;
  z-index:2;
  padding-bottom: 100px;
`;

const SearchContainer = styled.div`
    width: 90%;
    background: #fff;
    height: 90px;
    padding: 25px;
    display: flex;
    flex-direction: row;
    align-items:center;
    box-shadow: 0px 9px 22px #0000000F;
    border-radius: 15px;
    z-index: 3;
    position: relative;
    margin: -45px auto 0;

    & input {
      height : 38px;
      background: #F7F8FA 0% 0% no-repeat padding-box;
      border: 1px solid #F5F5F5;
      border-radius: 58px;
      margin-right: 15px;
      padding: 0 15px;

      &:focus {
        
        outline:none;
      }
    }

`;

const SearchField = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SelectDate = styled.button`
  margin-left: 15px;
  height: 28px;
  border: 1px solid ${props => props.active ? "#E0247D" : "#E2E2E2"} ;
  border-radius: 6px;
  background:#fff;
  font-size:12px;
  padding: 0 6px;
  min-width: ${props => props.lg ? "80px" : "60px"};
  display:inline-block;
  color:${props => props.active ? "#E0247D" : "#E2E2E2"}

`;

const Search = styled.button`
    min-width: 140px;
    height:38px;
    background: transparent linear-gradient(106deg, #BF04B3 0%, #D92387 25%, #F22764 53%, #F2DB94 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 6px;
    opacity: 1;
    color: #FFFFFF;
    text-shadow: 0px 2px 2px #0000004A;
    font-size:13px;
    display:inline-block;
    margin-left: 20px;
    border:1px solid #E2E2E2;
`;

const CategoryWrapper = styled.div`
    width:100%;
    margin: 40px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const CategoryItem = styled.div`
    min-width:130px;
    border:1px solid #E2E2E2;
    font-size: 12px;
    display: flex;
    align-items: center;
    margin-right: 20px;
    padding: 6px 12px;
    box-shadow: 0px 5px 13px #00000012;
    border: 1px solid #F7F8FA;
    border-radius: 6px;
    height: 38px;
    color: #261323;
`;

export default {
  SearchWrapper,
  SearchField,
  SearchContainer,
  SelectDate,
  Search,
  CategoryWrapper,
  CategoryItem
}