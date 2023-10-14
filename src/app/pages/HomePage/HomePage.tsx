import React from 'react'
import logo from 'svgs/logo.svg'
import HeroTemplate from 'app/templates/HeroTemplate'

import * as Styled from './HomePage.styled'

const HomePage: React.FC = () => (
  <HeroTemplate title="Home Page">
    <Styled.LogoSpin
      src={logo}
      alt="logo"
    />
    <p>
      Edit <code>src/app/pages/HomePage</code> and save to reload.
    </p>
    <a
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </HeroTemplate>
)

export default HomePage
