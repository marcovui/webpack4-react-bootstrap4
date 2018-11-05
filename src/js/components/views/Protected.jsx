import React from 'react';
import HeaderHero from '../Structural/Header';

const Protected = (props) => {
  const { title } = props;
  const { subTitle } = props;
  return (
    <div>
      <HeaderHero title={title} />
      <div className="section">
        <div className="container">
          {subTitle}
        </div>
      </div>
    </div>
  );
};

export default Protected;