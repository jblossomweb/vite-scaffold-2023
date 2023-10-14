import React from 'react'
import type { StoryFn, Meta } from '@storybook/react'
import { render, cleanup } from '@testing-library/react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyComponent = React.ComponentClass | React.FC<any>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type NoContext<Args = any> = (args: Args) => React.ReactElement

export interface StoryMeta {
  default: Meta<AnyComponent>
}

export interface Stories {
  [story: string]: StoryFn<AnyComponent>
}

const storySnaps = (stories: Stories | StoryMeta) => {
  const meta = (stories as StoryMeta).default
  const { component } = meta
  const Component = component as React.ComponentClass

  Object.keys(stories)
    .filter((key) => key !== 'default')
    .forEach((key) => {
      describe(key, () => {
        afterEach(cleanup)

        it('matches markup snapshot', () => {
          const { args } = (stories as Stories)[key]
          const template = meta.render ? (
            (meta.render as NoContext)(args)
          ) : (
            <Component {...args} />
          )
          const { asFragment } = render(template)
          expect(asFragment()).toMatchSnapshot()
        })
      })
    })
}

export default storySnaps
