import React from 'react';
import styled from 'styled-components';
import FAIcon from '@fortawesome/react-fontawesome';
import Behance from '@fortawesome/fontawesome-free-brands/faBehance';
import Twitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import GitHub from '@fortawesome/fontawesome-free-brands/faGithub';

const Header = styled.header`
  padding: 8rem 0rem 0 13rem;
  position: relative;
  --section-color: var(--green);
  height: 100vh;
  max-height: 1250px;
  .myName {
    font-family: var(--title-font);
    font-size: 1.3em;
    text-transform: uppercase;
    padding-left: 0.3rem;
  }
`;

const HeaderDetails = styled.div`
  margin-top: 4em;
  margin-left: 4em;
  width: 20rem;
  height: 15em;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  font-size: 1.2em;
`;

const BodyText = styled.p`
  --light-text: rgba(238, 238, 238, 0.8);
  color: var(--light-text);
`;

const HRule = styled.hr`
  width: 1em;
`;

const StyledSocialContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 24px);
  grid-column-gap: 2em;
  justify-items: center;
  justify-content: center;
  a {
    padding: 0.5em;
    text-decoration: none;
    color: inherit;
    transition: color 150ms ease;
    &:hover {
      color: var(--section-color);
    }
  }
`;

const ContactMeButton = styled.a`
  position: relative;

  text-decoration: none;
  color: var(--black);

  background: var(--white);
  padding: 1em 2em;
  margin: 0 auto;
  top: 0;
  left: 0;
  transition: box-shadow 150ms linear;
  box-shadow: 8px 8px 0 0 var(--light-text);
  &:hover {
    box-shadow: 8px 8px 0 0 var(--section-color), 0 0 1.5em -5px var(--section-color);
  }
`;

const LandingImage = styled.img`
  height: auto;
  width: 55vw;
  max-width: 1400px;
  position: absolute;
  right: 0;
  top: 0;
  padding-top: inherit;
  z-index: -1;
`;

const ColorBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: var(--section-color);
  width: 6.5em;
  height: 18.2em;
`;

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
);

const Landing = ({ windowWidth }) => {
  const cloudinary = 'https://res.cloudinary.com/kuroikyu/image/upload';
  const iWidth = windowWidth >= 1400 ? 1400 : windowWidth;
  const cOptions = `w_${iWidth}/f_auto/q_auto:good/dpr_auto`;
  return (
    <Header>
      <ColorBlock />
      <span className="myName">Álvaro J. Martínez</span>
      <h1>
        Front-end Developer &<br />Visual Designer
      </h1>
      <HeaderDetails>
        <BodyText>I design and build for the web</BodyText>
        <HRule />
        <SocialContainer />
        <ContactMeButton href="mailto:hello@kuroikyu.com">hello@kuroikyu.com</ContactMeButton>
      </HeaderDetails>
      <LandingImage
        src={`${cloudinary}/${cOptions}/v1524401357/kuroikyu.com/kuroikyu-landing`}
        // src="http://res.cloudinary.com/kuroikyu/image/upload/c_crop,g_west,h_2700,w_3850,x_0/v1524401357/kuroikyu.com/kuroikyu-landing"
        alt="Alvaro J. Martinez"
      />
    </Header>
  );
};

export default Landing;
export { BodyText, SocialContainer, ContactMeButton };
