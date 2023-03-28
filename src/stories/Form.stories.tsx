import type { Meta, StoryObj } from '@storybook/react'
import type { FormikValues } from 'formik'
import { Form } from '../components/Forms/Form/Form'
import * as yup from 'yup'

const meta: Meta<typeof Form> = {
  title: 'Forms/Base Form',
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

const formOnSubmit = async (values: FormikValues) => {
  alert('Submitted')
  console.log(values)
}

export const TestSchema = {
  firstname: {
    value: 'TEST',
    validation: yup.string().min(6, 'Name must be at least 6 characters long').required('Required'),
  },
}

export const Default: Story = {
  render: () => (
    <Form onSubmit={() => undefined} schema={{}}>
      {() => <form>Add input components inside the form as children</form>}
    </Form>
  ),
}

export const Example: Story = {
  render: (args) => (
    <Form {...args} onSubmit={formOnSubmit} schema={TestSchema}>
      {() => (
        <form>
          <Form.Input label="First Name" name="firstname" placeholder="Enter your first name" required />

          <Form.Input label="Last Name" name="lastname" placeholder="Enter your last name" required />

          <Form.Input
            label="Address"
            name="address"
            placeholder="Enter your street name and house number, if applicable"
          />

          <Form.Select
            label="What is your favorite 90s sitcom?"
            name="favsitcom"
            options={[
              { value: 'name1', label: 'name1' },
              { value: 'name2', label: 'name2' },
              { value: 'name3', label: 'name3' },
            ]}
          />

          <Form.WYSIWYG
            label="Event Description"
            name="description"
            placeholder="write some description..."
            editor="textarea"
          />

          <Form.PlacesAutoComplete name="location" placeholder="Please select a location..." />

          <Form.Radio
            label="How many of these shows did you watch regularly?"
            name="regularviewer"
            options={[
              { name: '1', label: '1' },
              { name: '2', label: '2' },
              { name: '3', label: '3' },
            ]}
          />

          <Form.Checkbox
            label="Who are your favourite 90s sitcom characters?"
            name="favcharacters"
            options={[
              { name: 'name1', label: 'name1' },
              { name: 'name2', label: 'name2' },
              { name: 'name3', label: 'name3' },
            ]}
          />

          <Form.Upload label="Image" name="image" />

          <Form.Submit title="Submit Your Answers" />
        </form>
      )}
    </Form>
  ),
}
