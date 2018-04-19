import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    projects: []
  }

  async componentDidMount() {
    const projects = await (await fetch('http://localhost:8000/wp-json/wp/v2/projects/')).json();
    this.setState({projects})
  }

  render() {
    const cloudinary = 'https://res.cloudinary.com/kuroikyu/image/upload';
    const iWidth = 400;
    const cOptions = `w_${iWidth}/f_auto/q_auto:good/dpr_auto`;

    if(this.state.projects.length < 1) {
      return <div className="loading">Loading</div>
    }

    const projects = this.state.projects.filter(project => project.acf.display);

    // const { data, data: { acf: projectDetails } } = this.state;
    // const title = data.title.rendered;
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

        {projects.map(project => (
          <div key={project.id} >
            <h2>{project.title.rendered}</h2>
            <p>{project.acf.description}</p>
            <p>{project.acf.display}</p>
            <img src={`${cloudinary}/${cOptions}/${project.acf.image_link}`} alt="test"/>
          </div>
        ) )}

      </div>
    );
  }
}

export default App;
