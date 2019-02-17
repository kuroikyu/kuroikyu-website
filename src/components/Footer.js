import React from 'react'

import { SectionDetails, SectionTitle } from './Projects'
import { SocialContainer } from './Landing'
import { ContactMeButton } from './styles/body'
import { SectionDescription } from './styles/projects'
import { StyledFooter, ContactContainer } from './styles/footer'

const Footer = () => (
  <StyledFooter>
    <SectionDetails>
      <SectionTitle>Get in touch</SectionTitle>
      <SectionDescription>
        Do you want to see one of your projects come to life?
        <br />
        <span>Go ahead and click below!</span>
      </SectionDescription>
      <ContactContainer>
        <ContactMeButton href="mailto:hello@kuroikyu.com">hello@kuroikyu.com</ContactMeButton>
        <SocialContainer />
      </ContactContainer>
    </SectionDetails>
  </StyledFooter>
)

export default Footer
