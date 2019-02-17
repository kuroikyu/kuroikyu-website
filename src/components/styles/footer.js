import styled from 'styled-components'
import { ContactMeButton } from './body'
import { SectionDescription } from './projects'

export const StyledFooter = styled.footer`
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
`

export const ContactContainer = styled.div`
  margin-top: 3em;
  display: flex;
  align-items: center;
  @media (max-width: 425px) {
    flex-direction: column-reverse;
    place-items: center;
  }
`
