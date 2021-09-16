import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = (props) => {
  const {
    background, color, href, children,
  } = props;

  const style = {
    background,
    color,
  };

  return (
    <Link
      to={href}
      duration={500}
    >
      <span
        style={style}
        className="link-btn"
      >
        {children}
      </span>
    </Link>
  );
};

export default LinkButton;
