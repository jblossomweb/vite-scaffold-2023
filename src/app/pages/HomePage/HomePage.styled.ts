import styled from 'styled-components'
import tw from 'tailwind-styled-components'

export const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
`

export const LogoSpin = tw(Logo)`
  animate-spin
`
