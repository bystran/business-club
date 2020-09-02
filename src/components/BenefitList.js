import React from 'react';
import { ReactComponent as CheckIcon} from '../assets/icons/check.svg';

const BenefitList = (props) => {
  const { benefits } = props;

  return (
    <div className="benefit-list">
      {benefits.map((b, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="benefit" key={index}>
          <CheckIcon />
          {b}
        </div>
      ))}
    </div>
  );
};

export default BenefitList;
