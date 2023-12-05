import { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

type AlertStoryType = {
  type: 'success' | 'error' | 'warning' | 'info'
  textSize: 'small' | 'large'
  title?: string
  content?: React.ReactNode | string
}

const AlertStory: AlertStoryType[] = [
  {
    type: 'success',
    title: 'Success',
    content: 'Records have been updated.',
    textSize: 'small',
  },
  {
    type: 'error',
    title: 'Error',
    content: 'Unable to save record.',
    textSize: 'small',
  },
  {
    type: 'warning',
    title: 'Warning',
    content: 'You have lost internet connectivity',
    textSize: 'small',
  },
  {
    type: 'info',
    title: 'Information',
    content: 'You look like you need some coffee.',
    textSize: 'small',
  },
]

type Story = StoryObj<typeof Alert>

export const Default: Story = {
  render: (args) => (
    <Alert key={111} type={args.type} textSize={args.textSize} title="Title" content="Content goes here" />
  ),
}

Default.args = {
  type: 'success',
}

export const Stacked: Story = {
  render: () => (
    <>
      {AlertStory.map((alert, index) => {
        return <Alert key={index} type={alert.type} title={alert.title || 'Title'} content={alert.content} />
      })}
    </>
  ),
}

const content = (
  <>
    Click <a href="https://example.com">here</a> to learn more.
  </>
)

export const WithLink: Story = {
  render: (args) => <Alert key={111} type={args.type} title="Information" content={content} />,
}

WithLink.args = {
  type: 'info',
}

export const LargeText: Story = {
  render: (args) => (
    <Alert key={111} type={args.type} textSize={args.textSize} title="Success" content="Succesfully created" />
  ),
}

LargeText.args = {
  type: 'success',
  textSize: 'large',
}
