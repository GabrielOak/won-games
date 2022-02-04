import { Meta, Story } from '@storybook/react/types-6-0'
import Main from '.'

const main = {
  title: 'Main',
  component: Main,
  args: {
    title: 'Title default',
    description: 'Description default'
  }
} as Meta

export default main

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'NextJS Boilerplate',
  description: 'TypeScript, ReactJS, NextJS e Styled Components'
}

export const Default: Story = (args) => <Main {...args} />
