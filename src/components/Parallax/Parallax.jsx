import React from 'react'
import { Parallax } from 'react-parallax'
import parralaxImage from '../../assets/quote-background.jpg'
import { ParallaxContainer, ParallaxText } from '../styles/Parallax.styled'

const ParallaxComponent = () => {
  return (
    <Parallax bgImage={parralaxImage} strength={-200} style={{ width: '100%' }}>
      <ParallaxContainer>
        <ParallaxText>Only those <br /> WHO <br /> stay to the end will <br /> SUCCEED!</ParallaxText>
      </ParallaxContainer>
    </Parallax>
  )
}

export default ParallaxComponent
