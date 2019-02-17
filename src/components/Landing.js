import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome'
import { faBehance as Behance } from '@fortawesome/free-brands-svg-icons/faBehance'
import { faTwitter as Twitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faGithub as GitHub } from '@fortawesome/free-brands-svg-icons/faGithub'

import { Header, HeaderDetails, LandingImage } from './styles/header'
import { BodyText, HRule, StyledSocialContainer, ContactMeButton, ColorBlock } from './styles/body'

const SocialContainer = () => (
  <StyledSocialContainer>
    <a href="https://github.com/kuroikyu">
      <FAIcon icon={GitHub} />
    </a>
    <a href="https://twitter.com/kuroikyu">
      <FAIcon icon={Twitter} />
    </a>
    <a href="https://www.behance.net/kuroikyu">
      <FAIcon icon={Behance} />
    </a>
  </StyledSocialContainer>
)

const Landing = ({ windowWidth }) => {
  const cloudinary = 'https://res.cloudinary.com/kuroikyu/image/upload'
  const iWidth = windowWidth >= 1400 ? 1400 : windowWidth
  const cOptions = `w_${iWidth}/f_auto/q_auto:good/dpr_auto`
  return (
    <Header>
      <ColorBlock />
      <span className="myName">Álvaro J. Martínez</span>
      <h1>
        Front-end Developer &<br />
        Visual Designer
      </h1>
      <HeaderDetails>
        <BodyText>I design and build for the web</BodyText>
        <HRule />
        <SocialContainer />
        <ContactMeButton href="mailto:hello@kuroikyu.com">hello@kuroikyu.com</ContactMeButton>
      </HeaderDetails>
      <LandingImage
        src={`${cloudinary}/${cOptions}/v1524401357/kuroikyu.com/kuroikyu-landing`}
        alt="Alvaro J. Martinez"
      />
    </Header>
  )
}

Landing.propTypes = {
  windowWidth: PropTypes.number.isRequired,
}

export default Landing
export { SocialContainer }
