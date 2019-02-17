import styled from 'styled-components'

export const Header = styled.header`
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
`

export const HeaderDetails = styled.div`
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
`

export const LandingImage = styled.img`
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
`
