import React from 'react';
import styled from 'styled-components';

import { SectionDetails, SectionTitle, SectionDescription } from './Projects';
import { SocialContainer, ContactMeButton } from './Landing';

const StyledFooter = styled.footer`
  --section-color: var(--pink);
  padding: 6.5em 0;
  margin: 4em 0 6em 0;

  ${SectionDescription} {
    max-width: 25em;
    span {
      color: var(--white);
    }
  }

  ${ContactMeButton} {
    margin: 0;
    margin-right: 4em;
  }
  @media (max-width: 425px) {
    padding: 6em 0;
    margin: 0;
    ${ContactMeButton} {
      margin: 1.5em auto;
    }
  }
`;

const ContactContainer = styled.div`
  margin-top: 3em;
  display: flex;
  align-items: center;
  @media (max-width: 425px) {
    flex-direction: column-reverse;
    place-items: center;
  }
`;

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
);

export default Footer;
