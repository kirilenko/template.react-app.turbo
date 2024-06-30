import type { Meta, StoryObj } from '@storybook/react'

import { HelloWorld } from '.'

const story: Meta<typeof HelloWorld> = {
  component: HelloWorld,
  title: 'HelloWorld',
}

export const HelloWorldDefault: StoryObj<typeof HelloWorld> = {
  args: {
    // color: 'magenta',
  },
  name: 'default',
  render: (props) => <HelloWorld {...props} />,
}

export default story
