import React from 'react';
import Header from '../structural/Header';
import ReactParallax from '../ReactParallax';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title } = this.props;
    const { subTitle } = this.props;
    return (
      <React.Fragment>
        <ReactParallax>
          <Header title={title} />
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