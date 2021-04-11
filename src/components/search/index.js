import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import MultiItemSlider from '../MultiItemSlider';
import Elem from './styles';

const Search = () => {
  
  return (
    <Elem.SearchWrapper>
      <Container>
        <Elem.SearchContainer>
          <input type="text" value=""  />
          <Elem.SearchField>
            <input type="text" value="" placeholder="Explore Celebrations" />
          </Elem.SearchField>
          <Elem.SelectDate active >Today</Elem.SelectDate>
          <Elem.SelectDate lg>Tomarrow</Elem.SelectDate>
          <Elem.Search >Search </Elem.Search>
        </Elem.SearchContainer>
        <Elem.CategoryWrapper>
          <Elem.CategoryItem>
            <span></span>
            Great Offers
          </Elem.CategoryItem>
          <Elem.CategoryItem>
            <span></span>
            Trending
          </Elem.CategoryItem>
          <Elem.CategoryItem>
            <span></span>
            Nearest
          </Elem.CategoryItem>
          <Elem.CategoryItem>
            <span></span>
            Top Rated
          </Elem.CategoryItem>
          <Elem.CategoryItem>
            <span></span>
            Recent
          </Elem.CategoryItem>
          <Elem.CategoryItem>
            <span></span>
            Most Searched
          </Elem.CategoryItem>
        </Elem.CategoryWrapper>
        <MultiItemSlider />
        <MultiItemSlider />
      </Container>
    </Elem.SearchWrapper>
  );
}

export default Search;