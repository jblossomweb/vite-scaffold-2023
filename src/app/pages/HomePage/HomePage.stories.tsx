import React from 'react'
import { MemoryRouter } from 'react-router'
import type { Meta, StoryObj } from '@storybook/react'

import HomePage from './HomePage'

const meta = {
  title: 'pages/HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ),
} satisfies Meta<typeof HomePage>

export default meta
type Story = StoryObj<typeof meta>

export const Sample: Story = {
  args: {},
}
