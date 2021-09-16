import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';
import '../sass/Navbar.scss';

const Navbar = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [classes, setClasses] = useState('atTop');
  const callToActionLink = {
    ref: '/join', title: 'Join us',
  };
  const links = [

    { ref: '/about', title: 'About' },
    { ref: '/events', title: 'Events' },
    { ref: '/team', title: 'Team' },

  ];

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

  return (
    <header className={`header ${classes}`}>
      <Logo />
      <nav>
        <ul>
          {
                        links.map((link, index) => (
                          // eslint-disable-next-line react/no-array-index-key
                          <li key={index}>
                            <Link to={link.ref}>
                              <span>{link.title}</span>
                            </Link>
                          </li>
                        ))
                    }
          <li><Link to="blog-posts">Blog</Link></li>
        </ul>
        <div className="underlined">
          <Link to={callToActionLink.ref}>
            <span>{callToActionLink.title}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
