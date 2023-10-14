import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import storySnaps from 'test/utils/storySnaps'

import HomePage from './HomePage'
import * as stories from './HomePage.stories'

describe('app/pages/HomePage', () => {
  describe('stories', () => {
    storySnaps(stories)
  })

  describe('assertions', () => {
    const renderScreen = () =>
      render(
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>,
      )

    it('renders a logo', () => {
      renderScreen()
      const logo = screen.getByAltText(/logo/i)
      expect(logo).toBeInTheDocument()
    })

    it('renders a spinning logo', () => {
      renderScreen()
      const logo = screen.getByAltText(/logo/i)
      expect(logo).toHaveClass('animate-spin')
    })

    it('renders learn react link', () => {
      renderScreen()
      const linkElement = screen.getByText(/learn react/i)
      expect(linkElement).toBeInTheDocument()
    })
  })
})
