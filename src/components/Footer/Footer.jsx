import React from 'react'
import {
  ArrowToTop,
  ContactHeader,
  ContactLink,
  Copyright,
  FooterArrowLine,
  FooterBigLink,
  FooterBigLinkContainer,
  FooterContact,
  FooterContacts,
  FooterLine,
  FooterSmallTitle,
  FooterSmallTitleWrapper,
  FooterSocials,
  Small,
  StyledFooter,
} from '../styles/Footer.styled'
import { animateScroll as scroll } from 'react-scroll'

const toTop = () => {
  scroll.scrollToTop({ delay: 0, duration: 0 })
}

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <StyledFooter>
      <FooterSmallTitleWrapper>
        <FooterSmallTitle>get in touch</FooterSmallTitle>
      </FooterSmallTitleWrapper>

      <FooterBigLinkContainer>
        <FooterBigLink
          href="mailto:asaydraxmonov15@gmail.com"
          data-hover="Let's talk!"
        >
          Need a developer?
        </FooterBigLink>
      </FooterBigLinkContainer>
      <FooterContacts>
        <FooterContact>
          <ContactHeader>Call me</ContactHeader>
          <ContactLink href="tel:+998910034502">+998910034502</ContactLink>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Social</ContactHeader>{' '}
          <FooterSocials>
            <ContactLink
              href="https://github.com/azizc0der"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </ContactLink>
            <ContactLink
              href="https://www.linkedin.com/in/azizc0der/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </ContactLink>
            <ContactLink
              href="https://t.me/azizc0der"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </ContactLink>
          </FooterSocials>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Let's grab a coffee.</ContactHeader>
          <ContactLink href="mailto:asaydraxmonov15@gmail.com">
            asaydraxmonov15@gmail.com
          </ContactLink>
        </FooterContact>
      </FooterContacts>

      <FooterArrowLine>
        <FooterLine />
        <ArrowToTop title="Back to Top" onClick={toTop}></ArrowToTop>
      </FooterArrowLine>

      <Copyright>
        <small>
          &copy; Copyright {year},{' '}
          <Small
            href="https://github.com/azizc0der"
            target="_blank"
            rel="noopener noreferrer"
          >
            Azizxo'ja Saidrahmonov
          </Small>
        </small>
      </Copyright>
    </StyledFooter>
  )
}

export default Footer
