import styled from 'styled-components'

export const BodyText = styled.p`
  --light-text: rgba(238, 238, 238, 0.8);
  color: var(--light-text);
  margin: 0;
`

export const HRule = styled.hr`
  width: 1em;
  margin: 0 auto;
`

export const StyledSocialContainer = styled.div`
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
`

export const ContactMeButton = styled.a`
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
`
export const ColorBlock = styled.div`
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
`
