import React, { Component } from 'react';

import Landing from './components/Landing';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
  state = {
    projects: [],
    windowWidth: 756,
  };

  async componentDidMount() {
    const projects = await (await fetch('http://192.168.0.10:8000/wp-json/wp/v2/projects/')).json();
    const windowWidth = window.innerWidth;
    this.setState({ projects, windowWidth });
  }

  render() {
    return (
      <div className="App">
        <Landing />
        <Projects projects={this.state.projects} windowWidth={this.state.windowWidth} />
      </div>
    );
  }
}

export default App;
