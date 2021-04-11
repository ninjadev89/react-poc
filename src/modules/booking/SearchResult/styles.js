
import styled from 'styled-components';
import searchItem from '../../../assets/images/searchItem.png';


const SearchResultWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 60px 0;
`;

const FilterWrapper = styled.div`
    border-right:1px solid #E8ECEF;
    padding-right: 15px;
    height: 100%;
`;

const FilterHeader = styled.div`
    padding-bottom:10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #E8ECEF;
    display:flex;
    align-items: center;
    justify-content: space-between;

    & span {
        font-size: 12px;
        colors: #D1D1D1;
        cursor : pointer;

        &:hover,
        &:focus {
            color: 
        }
    }
`;

const FilterItem = styled.div`
    margin-bottom : 20px;

    & h6 {
        font-size:12px;
        color: #5C575B;
        margin-bottom: 10px;
    }

    p, label {
        color: #261323;
        font-size:12px;
        margin-bottom: 5px;
    }
    .form-check-input:checked {
        background-color: #E0247D;
        border-color: #E0247D;
    }
`;

const FilterCategoryWrapper = styled.div`
    display:flex;
    align-items:center;

    & div {
        padding: 5px 12px;
        border: 1px solid #ECECEC;
        border-radius: 6px;
        color:#261323;
        font-size:12px;
        margin-right: 20px;
        cursor: pointer;

        &:hover,&:focus {
            color:#FFF;
            background-color:#E0247D;
        }
    }
`;

const SearchItemsCategoryWrapper = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #ECECEC;
`;

const SearchItemsHeader = styled.div`
    display: flex;
    align-items : center;
    color: #5C575B;
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 20px;

    h4 {
        color: #261323;
        margin:0 10px 0 0;
        font-size:14px;
    }

    span {
        margin-right: 12px;
        font-size: 12px;
        border:1px solid green;
        padding:2px 3px;
        border-radius: 6px;
    }
`;

const SearchItemsBody = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
`;

const SearchItem=styled.div`
    width:32%;
    height: 78px;
    background: #F7F8FA;
    border-radius: 5px;
    display:flex;
`;

const SearchItemImage = styled.div`
    width: 76px;
    height: 78px;
    background: transparent url(${searchItem});
    background-size: 100% auto;
    background-repeat: no-repeat;
    border-radius: 5px 0px 0px 5px;
`;

const SearchItemContent = styled.div`
    padding: 10px;
    font-size: 12px;

    & h6 {
        font-size: 14px;
        margin-bottom:4px;
    }

    p{
        margin-bottom:0;
    }
`;

export default {
    SearchResultWrapper,
    FilterWrapper,
    FilterHeader,
    FilterItem,
    FilterCategoryWrapper,
    SearchItemsCategoryWrapper,
    SearchItemsHeader,
    SearchItemsBody,
    SearchItem,
    SearchItemImage,
    SearchItemContent
}