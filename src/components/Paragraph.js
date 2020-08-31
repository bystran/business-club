import React from 'react';
import Underlined from './Underlined';

import '../sass/components/Paragraph.scss';

const Paragraph = (props) => {
  const { heading, children } = props;

  return (
    <div className="paragraph-wrapper">

      <Underlined
        marginLeft="-10%"
      >
        {heading}
      </Underlined>
      <p>
        {children}
      </p>
    </div>
  );
};

export default Paragraph;
