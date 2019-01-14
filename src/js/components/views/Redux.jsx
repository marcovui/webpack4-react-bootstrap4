import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderHero from '../structural/Header';
import store from '../../redux/store/index';
// import { addArticle } from '../../redux/actions/index';
import RouteWithSubRoutes from '../../routes/RouteWithSubRoutes';

// window.store = store;
// window.addArticle = addArticle;

const Redux = ({ routes }) => (
  <div>
    <HeaderHero title="Redux" />
    <div className="section">
      <div className="container">
        <ul>
          <li>
            <NavLink to="/redux/list">
              {'List'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/redux/form">
              {'Form'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/redux/fetch">
              {'Fetch'}
            </NavLink>
          </li>
        </ul>
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </div>
    </div>
  </div>
);

export default Redux;