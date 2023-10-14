import React from 'react'
import { Link } from 'react-router-dom'

import HeroTemplate from 'app/templates/HeroTemplate'

const NotFoundPage: React.FC = () => (
  <HeroTemplate title="404: Not Found">
    <h1>Sorry! That page was not found.</h1>
    <p>
      <Link to="/">Back to Home</Link>
    </p>
  </HeroTemplate>
)

export default NotFoundPage
