import React, { useEffect } from 'react';
import { Hub, DataStore } from 'aws-amplify';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Element as ScrollableSection, scroller } from 'react-scroll';
import NavBar from '../Navbar';
import Vl from '../VerticalLine';
import Home from '../sections/Home';
import Events from '../sections/Events';
import Perks from '../sections/Perks';
import Members from '../sections/Members';
import ClubStats from '../sections/ClubStats';
import { initMembers } from '../../reducers/memberReducer';
import { initEvents } from '../../reducers/eventReducer';
import JoinUs from '../sections/JoinUs';

const HomePage = (props) => {
  const { initMembers: fetchMembers, initEvents: fetchEvents } = props;
  const location = useLocation();
  const initializeMembers = () => {
    const removeListener = Hub.listen('datastore', async (capsule) => {
      const { payload: { event } } = capsule;
      if (event === 'ready') {
        fetchMembers();
      }
    });

    DataStore.start();

    return () => {
      removeListener();
    };
  };
  const scrollToSectionOnLoad = (section) => {
    scroller.scrollTo(section, {
      duration: 500,
      delay: 200,
      smooth: true,
    });
  };

  const getSectionFromPath = (path) => {
    if (path && path.length > 2) {
      return path.slice(1).split('/')[0];
    }
    return '';
  };

  useEffect(() => {
    fetchEvents();
    return initializeMembers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    scrollToSectionOnLoad(getSectionFromPath(location.pathname));
  }, [location]);

  return (
    <div className="App">
      <NavBar />
      <div className="sectionOneToThree">
        <Vl
          className="vl"
          color="#4DEDFF"
          sections={[
            { title: '01', top: '0px' },
            { title: '02', top: '600px' },
          ]}
        />
        <ScrollableSection name="about" meta={{ title: 'About' }}>
          <div>
            <Home />
          </div>

        </ScrollableSection>
      </div>
      <div className="sectionTwo">
        <Vl
          className="vl"
          color="#2C3E50"
          sections={[
            { title: '03', top: '50px' },
            { title: '04', top: '600px' },
            { title: '06', top: '2150px' },
          ]}

        />
        <ScrollableSection name="events" meta={{ title: 'Events' }}>
          <div>
            <Events />
          </div>
        </ScrollableSection>
        <Perks />
        <ClubStats />
        <ScrollableSection name="team" meta={{ title: 'Team' }}>
          <div>
            <Members />
          </div>
        </ScrollableSection>

        <ScrollableSection name="join" meta={{ title: 'Join us' }}>
          <div>
            <JoinUs />
          </div>
        </ScrollableSection>

      </div>

    </div>
  );
};

export default connect(null, { initMembers, initEvents })(HomePage);
