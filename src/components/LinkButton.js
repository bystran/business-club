import React from 'react';
import { ScrollableLink } from 'react-update-url-on-scroll';

const LinkButton = (props) => {
  const {
    background, color, href, children,
  } = props;

  const style = {
    background,
    color,
  };

  return (
    <ScrollableLink href={href}>
      <span
        style={style}
        className="link-btn"
      >
        {children}
      </span>
    </ScrollableLink>
  );
};

export default LinkButton;
