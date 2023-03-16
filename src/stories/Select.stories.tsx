/* eslint-disable @typescript-eslint/no-empty-function */
import type { Meta, StoryObj } from '@storybook/react'
import { Form } from '../components/Forms/Form/Form'

const meta: Meta<typeof Form> = {
  title: 'Forms/Select',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

type Story = StoryObj<typeof Form>

export const Default: Story = {
  render: () => (
    <Form onSubmit={() => {}} schema={{}} initialValues={InitialValues}>
      <Form.Select
        label="What is your favorite 90s sitcom?"
        name="favsitcom"
        options={[{ value: 'name', label: 'name' }]}
      />
    </Form>
  ),
}

const InitialValues = {
  firstname: 'ish',
  description: ' sample description',
  regularviewer: '2',
  location: 'Carleton University, Colonel By Drive, Ottawa, ON, Canada',
  favsitcom: 'familymatter',
  favcharacters: ['kellykapowski', 'carltonbanks'],
}
