import React from 'react'
import { MemoryRouter } from 'react-router'
import type { Meta, StoryObj } from '@storybook/react'

import NotFoundPage from './NotFoundPage'

const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>
  ),
} satisfies Meta<typeof NotFoundPage>

export default meta
type Story = StoryObj<typeof meta>

export const Sample: Story = {
  args: {},
}
