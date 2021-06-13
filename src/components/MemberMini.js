/* eslint-disable import/no-dynamic-require */
import React from 'react';
import BaseImg from '../assets/user.png';
import '../sass/membermini.scss';
import { ReactComponent as ZoomInIcon } from '../assets/icons/zoom_in.svg';

const MemberMini = (props) => {
  const { name, img, position } = props;

  const handleEroror = (e) => {
    e.target.src = BaseImg;
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className="member-small"
      onClick={() => props.onClick()}
      role="button"
      tabIndex={0}
    >
      <div className="circle-img-cropper">
        <img
          // eslint-disable-next-line global-require
          src={img}
          alt="profile img"
          onError={handleEroror}
        />
      </div>

      <h3>{name.split(' ')[0]}</h3>
      <h4>{position}</h4>
      <div className="zoom-in-icon">
        <ZoomInIcon />
      </div>
    </div>
  );
};

export default MemberMini;
