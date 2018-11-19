import React from 'react';
import HeaderHero from '../structural/Header';
import ReactParallax from '../ReactParallax';
import Accordion from '../Accordion';


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
        <Accordion />
        <br />
        <Accordion />
      </React.Fragment>
    );
  }
}

export default Home;