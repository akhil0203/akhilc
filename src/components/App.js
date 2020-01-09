import React from 'react';

import Navigation from './Navigation';
import Intro from './Intro';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import OpenSource from './OpenSource';
import Hackathon from './Hackathon';
import Contact from './Contact';

import { initGA, PageView } from './Shared/Tracking';

import './styles.scss';

class App extends React.Component {
  componentDidMount() {
    initGA('UA-92642042-1', { debug: false });
    PageView();
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Intro />
        <About />
        <Education />
        <Experience />
        <OpenSource />
        <Hackathon />
        <Contact />
      </div>
    );
  }
}

export default App;
