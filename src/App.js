import React, { Component } from 'react';

import Landing from './components/Landing';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
  state = {
    projects: [],
  };

  async componentDidMount() {
    // const projects = await (await fetch('http://localhost:8000/wp-json/wp/v2/projects/')).json();
    // this.setState({ projects });
  }

  render() {
    const projects = this.state.projects.filter(project => project.acf.display);

    return (
      <div className="App">
        <Landing />
        <Projects projects={projects} />
      </div>
    );
  }
}

export default App;
