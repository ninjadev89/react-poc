import React, { Component } from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

Layout.propTypes = {
    children: PropTypes.array,
}

export default Layout;