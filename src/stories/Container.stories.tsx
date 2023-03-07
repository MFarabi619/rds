import type { Meta, StoryObj } from '@storybook/react'
import { Article } from '../layouts/Article/Article'
import { Aside } from '../layouts/Aside/Aside'
import { Column } from '../layouts/Column/Column'
import { Container } from '../layouts/Container/Container'
import { StackedList } from '../layouts/StackedList/StackedList'

const meta: Meta<typeof Container> = {
  title: 'Layouts/Container',
  component: Container,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Container>

export const Primary: Story = {}

Primary.args = {
  children: 'Section HTML5 tag as container component',
  bgColor: 'white',
  hasProse: false,
}

export const GreyBackground: Story = {
  args: {
    children: 'Container component with grey background',
    bgColor: 'grey',
  },
}

export const WithColumns: Story = {
  render: () => (
    <Container as="section">
      <Column cols="2/3">
        <Article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
            vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse
            condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida
            volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et
            malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus
            sapien in urna.
          </p>
          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
            vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse
            condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida
            volutpat, tortor risus vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis interdum nisi, et
            malesuada lectus. Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus
            sapien in urna.
          </p>
        </Article>
        <Aside>
          <StackedList hasShadow>
            <li className="px-6 py-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in,
              egestas vitae nulla.
            </li>
            <li className="px-6 py-5">Quisque auctor ultrices mauris, et semper urna aliquam quis.</li>
            <li className="px-6 py-5">Suspendisse vestibulum hendrerit.</li>
          </StackedList>
        </Aside>
      </Column>
    </Container>
  ),
}
