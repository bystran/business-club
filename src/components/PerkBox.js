import React from 'react';

import '../sass/components/PerkBox.scss';

const PerkBox = (props) => {
  const { heading, icon, children } = props;

  return (
    <div className="perk-box">
      <div className="perk-icon">
        {icon}
      </div>
      <h3 className="perk-heading">{heading}</h3>
      <p className="perk-text">
        {children}
      </p>

    </div>
  );
};

export default PerkBox;
