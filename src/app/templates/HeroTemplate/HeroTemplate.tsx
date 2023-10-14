import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import * as Styled from './HeroTemplate.styled'

export interface Props {
  title: string
  children: React.ReactNode
}

const HeroTemplate: React.FC<Props> = ({ title, children }) => (
  <HelmetProvider>
    <Styled.Container>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Styled.Header>{children}</Styled.Header>
    </Styled.Container>
  </HelmetProvider>
)

export default HeroTemplate
