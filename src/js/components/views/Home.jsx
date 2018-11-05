import React from 'react';
import HeaderHero from '../Structural/Header';
import ReactParallax from '../ReactParallax';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title } = this.props;
    const { subTitle } = this.props;
    const parallax = {
      bgImage: '/assets/images/milkyway.jpg',
      bgImageAlt: 'hero image',
      strength: 600
    };

    return (
      <React.Fragment>
        <ReactParallax {...parallax}>
          <HeaderHero title={title} />
        </ReactParallax>
        <div className="section">
          <div className="container">
            <div style={{ height: '100vh' }}>
              {subTitle}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;