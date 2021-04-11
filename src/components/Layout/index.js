import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header';
import Footer from '../../components/footer';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
          <Header />
          {this.props.children}
          <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
    children: PropTypes.array,
}

export default Layout;