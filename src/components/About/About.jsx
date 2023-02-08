import React from 'react'
import downloadIcon from '../../assets/icons/download-icon.svg'
import myImage from '../../assets/me.jpg'
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout
} from '../styles/About.styled'
import { SectionHeading, SectionTitle } from '../styles/SectionHeading'
import { StyledParagraph } from '../styles/Typography.styled'

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        {/* <AboutImageContainer> */}
          <AboutImage src={myImage} />
        {/* </AboutImageContainer> */}
        <AboutDetailsContainer>
          <StyledParagraph>
            My name is Azizxo'ja Saidrahmonov, a bachelor's degree student at
            Tashkent University of Information Technologies.
          </StyledParagraph>
          <StyledParagraph>
            I love creating responsive websites and web applications from
            scratch. The technologies, tools, and languages I am using to build
            my projects are HTML, CSS, JavaScript, TypeScript, React JS, Redux
            Toolkit, TailwindCSS, Bootstrap, Git and GitHub, and VS Code.
          </StyledParagraph>
          <StyledParagraph>
            I have an eagerness to learn something new every day, and I love to
            share my knowledge with my fellow students and developers. And I am
            looking forward to talking with you!
          </StyledParagraph>
          <Resume>
            <ResumeLink
              href='../../assets/my-cv.pdf'
              icon={downloadIcon}
              download
            >
              Download Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  )
}

export default About
