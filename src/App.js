import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ScrollableSection from 'react-update-url-on-scroll';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Vl from './components/VerticalLine';
import Home from './components/sections/Home';
import Events from './sections/Events';
import Members from './components/sections/Members';
import { initMembers } from './reducers/memberReducer';
import { initEvents } from './reducers/eventReducer';
import JoinUs from './components/sections/JoinUs';

import './sass/components/App.scss';

function App(props) {
  useEffect(() => {
    props.initMembers();
    props.initEvents();
  });
  return (
    <div className="App">
      <NavBar />

      <div className="sectionOneToThree">
        <Vl
          className="vl"
          color="#4DEDFF"
          sections={[
            { title: '01', top: '20px' },
            { title: '02', top: '600px' },
            { title: '03', top: '1050px' },
          ]}
        />
        <ScrollableSection name="about" meta={{ title: 'About' }}>
          <div>
            <Home />
          </div>

        </ScrollableSection>
      </div>
      <ScrollableSection name="events" meta={{ title: 'Events' }}>
        <div>
          <Events />
        </div>
      </ScrollableSection>
      <div className="sectionTwo">
        <Vl
          className="vl"
          color="#2C3E50"
          sections={[
            { title: '04', top: '120px' },
            { title: '05', top: '850px' },

          ]}

        />
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

      <Footer />

    </div>
  );
}

export default connect(null, { initMembers, initEvents })(App);
