import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ExternalLink from 'react-feather/dist/icons/external-link';
import { BodyText } from './Landing';

const Spacer = styled.div`
  background-color: var(--light-background);
  position: absolute;
  height: 5em;
  ${props => (props.bottom ? 'bottom: -5em;' : 'top: -5em;')};
  ${props => (props.bottom ? 'width: 6.5em;' : 'width: calc(100% - 6.5em);')};
  ${props => (props.bottom ? 'left: 0;' : 'right: 0;')};
`;

const Main = styled.main`
  --section-color: var(--purple);
  margin-top: 3em;
  position: relative;
  background-color: var(--light-background);
`;

const SectionDetails = styled.div`
  padding: 8rem 0rem 0 13rem;
`;

const SectionTitle = styled.h2`
  font-size: 4.4em;
  display: inline-block;
  margin: 0;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    height: 120%;
    width: calc(13rem + 70%);
    left: -13rem;
    top: -7.5%;
    z-index: -1;
    background: var(--section-color);
  }
`;

const SectionDescription = BodyText.extend`
  line-height: 2;
  margin-top: 2em;
`;

const ProjectList = styled.ul`
  margin: 0 13rem;
  padding: 5em 0 10em 0;
  list-style: none;

  display: grid;
  grid-row-gap: 3.25em;
  place-items: center;
  li {
    position: relative;
  }
`;

const ProjectLink = styled.a`
  text-decoration: none;

  display: flex;
  align-items: center;

  font-size: 1.3em;
  padding: 0.6em 1.2em;
  position: absolute;

  left: -1.5em;
  top: 2em;

  color: var(--dark-text);
  background: var(--white);
  box-shadow: 0px 3px 6px rgba(28, 24, 36, 0.3);

  transition: color 150ms ease;

  &:hover {
    color: var(--section-color);
  }

  svg {
    margin-left: 10px;
  }
`;

const Project = styled.img`
  width: 100%;
  max-width: 1400px;
`;

class Projects extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired,
    windowWidth: PropTypes.number.isRequired,
  };

  render() {
    const { projects, windowWidth } = this.props;
    const cloudinary = 'https://res.cloudinary.com/kuroikyu/image/upload';
    const iWidth = windowWidth >= 1400 ? 1400 : windowWidth;
    const cOptions = `w_${iWidth}/f_auto/q_auto:eco/dpr_auto`;

    return (
      <Main>
        <Spacer />
        <SectionDetails>
          <SectionTitle>Projects</SectionTitle>
          <SectionDescription>
            Let's cut to the chase! Here's a quick look at <br /> my most recent work both design
            and code.
          </SectionDescription>
        </SectionDetails>
        <ProjectList>
          {projects.map(project => (
            <div key={project.id}>
              <li>
                <ProjectLink href={project.acf.link}>
                  open <ExternalLink />
                </ProjectLink>
                <Project
                  src={`${cloudinary}/${cOptions}/${project.acf.image_link}/kuroikyu.com/kuroikyu-${
                    project.slug
                  }`}
                  alt={project.title.rendered}
                />
              </li>
            </div>
          ))}
        </ProjectList>
        <Spacer bottom />
      </Main>
    );
  }
}

export default Projects;
export { SectionDetails, SectionTitle, SectionDescription };
