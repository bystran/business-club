import React from 'react';
import Amplify from 'aws-amplify';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import awsconfig from './aws-exports';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';

import { initMembers } from './reducers/memberReducer';
import { initEvents } from './reducers/eventReducer';

import './sass/components/App.scss';
import BlogPostsPage from './components/pages/BlogPostsPage';
import MentorshipPage from './components/pages/MentorshipPage';
import FaqPage from "./components/pages/FaqPage";

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/mentorship-programme">
            <MentorshipPage />
          </Route>

          <Route path="/Faq">
            <FaqPage/>
          </Route>

          <Route path={['/about', '/']}>
            <HomePage />
          </Route>
        </Switch>
      </Router>
      <Footer />

    </div>
  );
}

export default connect(null, { initMembers, initEvents })(App);
