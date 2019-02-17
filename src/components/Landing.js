import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome'
import { faBehance as Behance } from '@fortawesome/free-brands-svg-icons/faBehance'
import { faTwitter as Twitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faGithub as GitHub } from '@fortawesome/free-brands-svg-icons/faGithub'

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
  @media (max-width: 1750px) {
    height: auto;
    margin-bottom: 10em;
  }
  @media (max-width: 1300px) {
    padding: 6rem 0 0 8rem;
  }

  @media (max-width: 1024px) {
    padding: 5rem 0 2rem 0;
    h1,
    .myName {
      margin-left: 8rem;
    }
  }
  @media (max-width: 425px) {
    padding: 5rem 1rem;
    h1,
    .myName {
      margin-left: 0rem;
    }
  }
  @media (max-width: 415px) {
    padding: 4rem 1rem 2rem 1rem;
    h1 {
      font-size: 3.2em;
    }
  }
  @media (max-width: 375px) {
    h1 {
      font-size: 3em;
    }
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
  @media (max-width: 1750px) {
    margin-top: 2em;
    margin-left: 3.5em;
  }
  @media (max-width: 1300px) {
    height: 12em;
  }
  @media (max-width: 1024px) {
    width: auto;
    margin: 4em auto;
  }
`;

const BodyText = styled.p`
  --light-text: rgba(238, 238, 238, 0.8);
  color: var(--light-text);
  margin: 0;
`;

const HRule = styled.hr`
  width: 1em;
  margin: 0 auto;
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
  @media (max-width: 1750px) {
    max-width: 45vw;
  }
  @media (max-width: 1024px) {
    position: initial;
    max-width: initial;
    display: block;
    width: 100%;
    padding: 0 4rem;
  }
  @media (max-width: 425px) {
    padding: 0;
  }
`;

const ColorBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: var(--section-color);
  width: 6.5em;
  height: 18.2em;
  @media (max-width: 1300px) {
    width: 4em;
  }
  @media (max-width: 425px) {
    height: 1rem;
    width: 50%;
  }
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
        alt="Alvaro J. Martinez"
      />
    </Header>
  );
};

Landing.propTypes = {
  windowWidth: PropTypes.number.isRequired,
};

export default Landing;
export { BodyText, SocialContainer, ContactMeButton };
