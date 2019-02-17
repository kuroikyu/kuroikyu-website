import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ExternalLink from 'react-feather/dist/icons/external-link'

import {
  SpacerBottom,
  SpacerTop,
  Main,
  SectionDetails,
  SectionTitle,
  SectionDescription,
  ProjectList,
  ProjectLink,
  Project,
} from './styles/projects'

class Projects extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired,
    windowWidth: PropTypes.number.isRequired,
  }

  render() {
    const { projects, windowWidth } = this.props
    const cloudinary = 'https://res.cloudinary.com/kuroikyu/image/upload'
    const iWidth = windowWidth >= 1400 ? 1400 : windowWidth
    const cOptions = `w_${iWidth}/f_auto/q_auto:eco/dpr_auto`

    return (
      <Main>
        <SpacerBottom />
        <SectionDetails>
          <SectionTitle>Projects</SectionTitle>
          <SectionDescription>
            Let's cut to the chase! Here's a quick look at my most recent work both design and code.
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
        <SpacerTop />
      </Main>
    )
  }
}

export default Projects
export { SectionDetails, SectionTitle, SectionDescription }
