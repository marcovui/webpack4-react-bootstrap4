import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Parallax, Background } from 'react-parallax';

class ReactParallax extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        {/* -----basic config-----*/}
        <Parallax
          bgImage="/assets/images/milkyway.jpg"
          bgImageAlt="the cat"
          strength={600}
        >
          <div style={{ height: '80vh' }}>
            {children}
          </div>
        </Parallax>
        {
          /*
          <Parallax
            strength={600}
          >
            <div style={{ height: '100vh' }}>
              {children}
            </div>
            <Background className="custom-bg">
              <img src="/assets/images/milkyway.jpg" alt="fill murray" />
            </Background>
          </Parallax>
          */
        }
      </div>
    );
  }
}
export default ReactParallax;

ReactParallax.propTypes = {
  children: PropTypes.element.isRequired
};