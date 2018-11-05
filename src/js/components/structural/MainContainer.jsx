import React, { Component } from 'react';
import Routes from '../../routes/Routes';
import RouteWithSubRoutes from '../../routes/RouteWithSubRoutes';

class MainContents extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // const { SeoTitle } = this.state;
    return (
      <React.Fragment>
        {Routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </React.Fragment>
    );
  }
}

export default MainContents;
