import React, { Component } from 'react';

import Landing from './components/Landing';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';
import projectsData from './projects.json'

class App extends Component {
  state = {
    projects: [],
    windowWidth: 756,
  };

  async componentDidMount() {
    // Reinstate data from localStorage
    const localStorageData = localStorage.getItem('kuroikyu.com-state');
    if (localStorageData) {
      this.setState(JSON.parse(localStorageData));
    }

    // Fetch projects from API
    const windowWidth = window.innerWidth;
    this.setState({ projects, windowWidth });
    const projects = projectsData
  }

  componentDidUpdate() {
    const state = JSON.stringify(this.state);
    localStorage.setItem('kuroikyu.com-state', state);
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
