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
  isPersistent: false
  title?: string
  content?: string
}

const AlertStory: AlertStoryType[] = [
  {
    type: 'success',
    title: 'Success!',
    content: 'Records have been updated.',
    textSize: 'small',
    isPersistent: false,
  },
  {
    type: 'error',
    title: 'Error!',
    content: 'Unable to save record.',
    textSize: 'small',
    isPersistent: false,
  },
  {
    type: 'warning',
    title: 'Warning',
    content: 'You have lost internet connectivity',
    textSize: 'small',
    isPersistent: false,
  },
  {
    type: 'info',
    title: 'Information',
    content: 'You look like you need some coffee.',
    textSize: 'small',
    isPersistent: false,
  },
]

type Story = StoryObj<typeof Alert>

export const Default: Story = {
  render: (args) => (
    <Alert.Alerter>
      <Alert key={111} type={args.type} isPersistent={args.isPersistent} textSize={args.textSize}>
        <Alert.Title>Title</Alert.Title>
        <Alert.Content>Content goes here</Alert.Content>
      </Alert>
    </Alert.Alerter>
  ),
}

Default.args = {
  type: 'success',
}

export const Multiline: Story = {
  render: (args) => (
    <Alert.Alerter>
      <Alert key={111} type={args.type}>
        <Alert.Title>Success</Alert.Title>
        <Alert.Content>Successfully created</Alert.Content>
      </Alert>
    </Alert.Alerter>
  ),
}

Multiline.args = {
  type: 'success',
}

export const Stacked: Story = {
  render: () => (
    <Alert.Alerter>
      {AlertStory.map((alert, index) => {
        return (
          <Alert key={index} type={alert.type}>
            <Alert.Title>{alert.title}</Alert.Title>
            <Alert.Content>{alert.content}</Alert.Content>
          </Alert>
        )
      })}
    </Alert.Alerter>
  ),
}

export const Persistant: Story = {
  render: (args) => (
    <Alert.Alerter>
      <Alert key={111} type={args.type} isPersistent textSize={args.textSize}>
        <Alert.Title>Success</Alert.Title>
        <Alert.Content>Successfully created</Alert.Content>
      </Alert>
    </Alert.Alerter>
  ),
}

Persistant.args = {
  type: 'success',
}

export const LargeText: Story = {
  render: (args) => (
    <Alert.Alerter>
      <Alert key={111} type={args.type} textSize={args.textSize} isPersistent>
        <Alert.Title>Success</Alert.Title>
        <Alert.Content>Successfully created</Alert.Content>
      </Alert>
    </Alert.Alerter>
  ),
}

LargeText.args = {
  type: 'success',
  textSize: 'large',
}
