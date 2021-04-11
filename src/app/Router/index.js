import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from '../../components/Layout';
// import { Signup } from '../../modules/auth/Signup';
import LandingPage from '../../modules/booking/landingPage';
import SearchResult from '../../modules/booking/SearchResult';

export default class AppRouter extends Component {

  render () {
        return (            
            <Layout>
                {/* <Route exact path='/' component={Signup} /> */}
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/SearchResults' component={SearchResult} />
                
            </Layout>           
        );
    }
}