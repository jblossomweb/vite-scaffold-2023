import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import storySnaps from 'test/utils/storySnaps'

import NotFoundPage from './NotFoundPage'
import * as stories from './NotFoundPage.stories'

describe('app/pages/NotFoundPage', () => {
  describe('stories', () => {
    storySnaps(stories)
  })

  describe('assertions', () => {
    const renderScreen = () =>
      render(
        <MemoryRouter>
          <NotFoundPage />
        </MemoryRouter>,
      )

    it('renders back to home link', () => {
      renderScreen()
      const backHome = screen.getByText(/back to home/i)
      expect(backHome).toBeInTheDocument()
    })
  })
})
