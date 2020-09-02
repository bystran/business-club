import React from 'react';
import '../sass/underlined.scss';

const Underlined = (props) => {
  const { marginLeft, children, lineColor } = props;
  const style = {
    marginLeft,
    borderTopColor: lineColor,
  };

  return (
    <div className="underlined-cmp">
      <div className="content">{children}</div>
      <hr style={style} />
    </div>
  );
};

export default Underlined;
