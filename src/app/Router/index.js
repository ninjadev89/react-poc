import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from '../../components/Layout';
import { Signup } from '../../modules/auth/Signup';
// import './custom.css'

export default class AppRouter extends Component {
  //static displayName = App.name;

  render () {
        return (
            <div>
                <Layout>
                    <Route exact path='/' component={Signup} />
                </Layout>
            </div>
        );
    }
}