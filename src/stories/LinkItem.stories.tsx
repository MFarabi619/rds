import type { Meta, StoryObj } from '@storybook/react'
import { LinkItem } from '../components/Listings/LinkItem/LinkItem'
import { LinkItemData as data } from '../components/Listings/LinkItem/LinkItemData'
import { StackedList } from '../layouts/StackedList/StackedList'

export default {
  title: 'Cards & Lists/Lists/Link Item',
  component: LinkItem,
  argTypes: {},
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
} as Meta<typeof LinkItem>

type Story = StoryObj<typeof LinkItem>

export const Default: Story = {
  render: (args) => (
    <LinkItem as="div" link={args.link}>
      <LinkItem.Content>
        <LinkItem.Title as="h2" fontSize={args.fontSize} title={args.title} />
      </LinkItem.Content>
    </LinkItem>
  ),
}

Default.args = {
  fontSize: 'base',
  title: 'Job item title',
  link: 'https://carleton.ca',
}

export const SingleItemList: Story = {
  render: (args) => (
    <StackedList hasBorder>
      <LinkItem as="li" link={args.link}>
        <LinkItem.Content>
          <LinkItem.Title as="h3" fontSize={args.fontSize} title={args.title} />
        </LinkItem.Content>
      </LinkItem>
    </StackedList>
  ),
}
SingleItemList.args = {
  ...Default.args,
}

export const MultiItemList: Story = {
  render: () => (
    <StackedList header="Link listing" hasBorder hasShadow>
      {data.map(({ id, title, link }) => (
        <LinkItem key={id} as="li" link={link}>
          <LinkItem.Content>
            <LinkItem.Title title={title} link={link} />
          </LinkItem.Content>
        </LinkItem>
      ))}
    </StackedList>
  ),
}
