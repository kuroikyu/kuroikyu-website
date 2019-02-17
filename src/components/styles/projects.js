import styled from 'styled-components'
import { BodyText } from './body'

export const SpacerBottom = styled.div`
  --spacer-height: 5em;
  --spacer-width: 6.5em;
  background-color: var(--light-background);
  position: absolute;
  height: var(--spacer-height);

  width: var(--spacer-width);
  bottom: calc(-1 * var(--spacer-height));
  left: 0;

  @media (max-width: 1300px) {
    --spacer-height: 3em;
    --spacer-width: 4em;
  }
  @media (max-width: 425px) {
    --spacer-height: 2em;
    --spacer-width: 2em;
  }
`

export const SpacerTop = SpacerBottom.extend`
  left: initial;
  width: calc(100% - var(--spacer-width));
  top: calc(-1 * var(--spacer-height));
  right: 0;
`

export const Main = styled.main`
  --section-color: var(--purple);
  margin-top: 3em;
  position: relative;
  background-color: var(--light-background);
`

export const SectionDetails = styled.div`
  padding: 8rem 0rem 0 13rem;
  @media (max-width: 1300px) {
    padding: 6rem 0 0 8rem;
  }
  @media (max-width: 425px) {
    padding: 3rem 2rem 0 2rem;
  }
`

export const SectionTitle = styled.h2`
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
  @media (max-width: 425px) {
    font-size: 3.2em;
  }
`

export const SectionDescription = BodyText.extend`
  line-height: 2;
  margin-top: 2em;
  max-width: 22em;
`

export const ProjectList = styled.ul`
  margin: 0 13rem;
  padding: 5em 0 10em 0;
  list-style: none;

  display: grid;
  grid-row-gap: 3.25em;
  place-items: center;
  li {
    position: relative;
  }
  @media (max-width: 1300px) {
    margin: 0 8rem;
    padding-bottom: 8rem;
  }
  @media (max-width: 1024px) {
    margin: 0 4rem;
    padding-bottom: 6rem;
  }
  @media (max-width: 425px) {
    padding-bottom: 4rem;
  }
  @media (max-width: 425px) {
    margin: 0;
    grid-row-gap: 7em;
  }
`

export const ProjectLink = styled.a`
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
  @media (max-width: 425px) {
    font-size: 1em;
    top: -1.75em;
    left: 2em;
  }
`

export const Project = styled.img`
  width: 100%;
  max-width: 1400px;
`
