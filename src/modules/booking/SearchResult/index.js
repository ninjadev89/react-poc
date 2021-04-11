import React from 'react';
import {Container,Row,Col,Form} from 'react-bootstrap';

import Elem from './styles';

const SearchResult = () => {
  
  return (
    <Elem.SearchResultWrapper>
        <Container>
            <Row>
                <Col md={3}>
                    <Elem.FilterWrapper>
                        <Elem.FilterHeader>
                            FILTERS
                            <span>Reset</span>
                        </Elem.FilterHeader>
                        <Elem.FilterItem>
                            <h6>Price</h6>
                            <Form.Group controlId="formBasicRange">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="range" />
                            </Form.Group>
                            {/* <p>Low to High</p>
                            <p>High to Low</p> */}
                        </Elem.FilterItem>
                        <Elem.FilterItem>
                            <h6>Sort Price</h6>
                            <Form.Check 
                                type={'radio'}
                                id={'priceLowtoHigh'}
                                label={'Low to High'}
                                name={'price'}
                            />
                            <Form.Check
                                type={'radio'}
                                label={"High to Low"}
                                id={'priceHightoLow'}
                                name={'price'}
                            />
                        </Elem.FilterItem>
                        <Elem.FilterItem>
                            <h6>Sort Ratings</h6>
                            <Form.Check 
                                type={'radio'}
                                id={'ratingLowtoHigh'}
                                label={'Low to High'}
                                name={'rating'}
                            />
                            <Form.Check
                                type={'radio'}
                                label={"High to Low"}
                                id={'ratingHightoLow'}
                                name={'rating'}
                            />
                            {/* <p>Low to High</p>
                            <p>High to Low</p> */}
                        </Elem.FilterItem>
                    </Elem.FilterWrapper>
                </Col>
                <Col md={9}>
                    <Elem.FilterCategoryWrapper>
                        <div>
                            + Availability
                        </div>
                        <div>
                            Top Rated Vendors
                        </div>
                        <div>
                            Nearest
                        </div>
                    </Elem.FilterCategoryWrapper>
                    <Elem.SearchItemsCategoryWrapper>
                        <Elem.SearchItemsHeader>
                            <h4>Vendor Name 1</h4>
                            <span>4.2</span>
                            304, Mall Road, Hi-Tech City
                        </Elem.SearchItemsHeader>
                        <Elem.SearchItemsBody>
                            <Elem.SearchItem>
                                <Elem.SearchItemImage>
                                    {/* <img src={} alt="Event photo" /> */}
                                </Elem.SearchItemImage>
                                <Elem.SearchItemContent>
                                    <h6>Silver Birthday</h6>
                                    <p>660 Per Participant</p>
                                    <p>Min: 30   Max: 50</p>
                                </Elem.SearchItemContent>
                            </Elem.SearchItem>
                            <Elem.SearchItem>
                                <Elem.SearchItemImage>
                                    {/* <img src={} alt="Event photo" /> */}
                                </Elem.SearchItemImage>
                                <Elem.SearchItemContent>
                                    <h6>Silver Birthday</h6>
                                    <p>660 Per Participant</p>
                                    <p>Min: 30   Max: 50</p>
                                </Elem.SearchItemContent>
                            </Elem.SearchItem>
                            <Elem.SearchItem>
                                <Elem.SearchItemImage>
                                    {/* <img src={} alt="Event photo" /> */}
                                </Elem.SearchItemImage>
                                <Elem.SearchItemContent>
                                    <h6>Silver Birthday</h6>
                                    <p>660 Per Participant</p>
                                    <p>Min: 30   Max: 50</p>
                                </Elem.SearchItemContent>
                            </Elem.SearchItem>
                        </Elem.SearchItemsBody>
                    </Elem.SearchItemsCategoryWrapper>
                    <Elem.SearchItemsCategoryWrapper>
                        <Elem.SearchItemsHeader>
                            <h4>Vendor Name 2</h4>
                            <span>4.2</span>
                            304, Mall Road, Hi-Tech City
                        </Elem.SearchItemsHeader>
                        <Elem.SearchItemsBody>
                            <Elem.SearchItem>
                                <Elem.SearchItemImage>
                                    {/* <img src={} alt="Event photo" /> */}
                                </Elem.SearchItemImage>
                                <Elem.SearchItemContent>
                                    <h6>Silver Birthday</h6>
                                    <p>660 Per Participant</p>
                                    <p>Min: 30   Max: 50</p>
                                </Elem.SearchItemContent>
                            </Elem.SearchItem>
                            <Elem.SearchItem>
                                <Elem.SearchItemImage>
                                    {/* <img src={} alt="Event photo" /> */}
                                </Elem.SearchItemImage>
                                <Elem.SearchItemContent>
                                    <h6>Silver Birthday</h6>
                                    <p>660 Per Participant</p>
                                    <p>Min: 30   Max: 50</p>
                                </Elem.SearchItemContent>
                            </Elem.SearchItem>
                            <Elem.SearchItem>
                                <Elem.SearchItemImage>
                                    {/* <img src={} alt="Event photo" /> */}
                                </Elem.SearchItemImage>
                                <Elem.SearchItemContent>
                                    <h6>Silver Birthday</h6>
                                    <p>660 Per Participant</p>
                                    <p>Min: 30   Max: 50</p>
                                </Elem.SearchItemContent>
                            </Elem.SearchItem>
                        </Elem.SearchItemsBody>
                    </Elem.SearchItemsCategoryWrapper>
                    <Elem.SearchItemsCategoryWrapper>
                        <Elem.SearchItemsHeader>
                            <h4>Vendor Name 3</h4>
                            <span>4.2</span>
                            304, Mall Road, Hi-Tech City
                        </Elem.SearchItemsHeader>
                        <Elem.SearchItemsBody>
                            <Elem.SearchItem>
                                <Elem.SearchItemImage>
                                    {/* <img src={} alt="Event photo" /> */}
                                </Elem.SearchItemImage>
                                <Elem.SearchItemContent>
                                    <h6>Silver Birthday</h6>
                                    <p>660 Per Participant</p>
                                    <p>Min: 30   Max: 50</p>
                                </Elem.SearchItemContent>
                            </Elem.SearchItem>
                            <Elem.SearchItem>
                                <Elem.SearchItemImage>
                                    {/* <img src={} alt="Event photo" /> */}
                                </Elem.SearchItemImage>
                                <Elem.SearchItemContent>
                                    <h6>Silver Birthday</h6>
                                    <p>660 Per Participant</p>
                                    <p>Min: 30   Max: 50</p>
                                </Elem.SearchItemContent>
                            </Elem.SearchItem>
                            <Elem.SearchItem>
                                <Elem.SearchItemImage>
                                    {/* <img src={} alt="Event photo" /> */}
                                </Elem.SearchItemImage>
                                <Elem.SearchItemContent>
                                    <h6>Silver Birthday</h6>
                                    <p>660 Per Participant</p>
                                    <p>Min: 30   Max: 50</p>
                                </Elem.SearchItemContent>
                            </Elem.SearchItem>
                        </Elem.SearchItemsBody>
                    </Elem.SearchItemsCategoryWrapper>
                </Col>
            </Row>
        </Container>
    </Elem.SearchResultWrapper>
  );
}

export default SearchResult;