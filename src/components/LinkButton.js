import React from 'react';

const LinkButton = (props) => {
  const {
    background, color, href, children,
  } = props;

  const style = {
    background,
    color,
  };

  return (
    <a
      href={href}
      style={style}
      className="link-btn"
    >
      {children}
    </a>
  );
};

export default LinkButton;
