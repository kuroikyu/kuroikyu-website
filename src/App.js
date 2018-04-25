import React, { Component } from 'react';

import Landing from './components/Landing';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  state = {
    projects: [],
    windowWidth: 756,
  };

  async componentDidMount() {
    const projects = await (await fetch('https://wp.kuroikyu.com/wp-json/wp/v2/projects/')).json();
    const windowWidth = window.innerWidth;
    this.setState({ projects, windowWidth });
  }

  render() {
    const { projects, windowWidth } = this.state;
    return (
      <div className="App">
        <Landing windowWidth={windowWidth} />
        <Projects projects={projects} windowWidth={windowWidth} />
        <Footer />
      </div>
    );
  }
}

export default App;
