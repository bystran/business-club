import React, { useState, useEffect } from 'react';
import { ScrollableLink } from 'react-update-url-on-scroll';
import { ReactComponent as Logo } from '../assets/logo.svg';
import '../sass/Navbar.scss';

const Navbar = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [classes, setClasses] = useState('atTop');

  const handleScroll = () => {
    const pastPos = scrollPos;
    const currentPos = window.pageYOffset;
    let classString = '';

    if (currentPos < 20) {
      classString = 'atTop';
    }

    if (currentPos > pastPos) {
      classString = classString.concat(' hidden');
    }

    setScrollPos(currentPos);
    setClasses(classString);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const links = [

    { ref: '/about', title: 'About' },
    { ref: '/events', title: 'Events' },
    { ref: '/team', title: 'Team' },

  ];

  const callToActionLink = {
    ref: '/join', title: 'Join us',
  };

  return (
    <header className={`header ${classes}`}>
      <Logo />
      <nav>
        <ul>
          {
                        links.map((link, index) => (
                          // eslint-disable-next-line react/no-array-index-key
                          <li key={index}>
                            <ScrollableLink href={link.ref}>
                              <span>{link.title}</span>
                            </ScrollableLink>
                          </li>
                        ))
                    }

        </ul>
        <div className="underlined">
          <ScrollableLink href={callToActionLink.ref}>
            <span>{callToActionLink.title}</span>
          </ScrollableLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
