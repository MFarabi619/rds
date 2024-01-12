import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Container } from '../../layouts/Container/Container'
import { Main } from '../../layouts/Main/Main'
import { FooterBasic } from '../../components/Footer/FooterBasic/FooterBasic'
import { Column } from '../../layouts/Column/Column'
import { Panel } from '../../_deprecated/Panel/Panel'
import { Nav } from '../../components/Nav/Nav'
import { TextImage } from '../../components/TextImage/TextImage'
import { NavDataSingle, NavAsideData } from '../../data/NavData'

const meta: Meta = {
  title: 'Examples/Layouts',
}

export default meta
type Story = StoryObj

const SinglePara = () => {
  return (
    <>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
        reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in.
        Praesent quis ligula quis nulla malesuada tempor.
      </p>
    </>
  )
}

const DoublePara = () => {
  return (
    <>
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
        reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in.
        Praesent quis ligula quis nulla malesuada tempor.
      </p>
    </>
  )
}

export const LayoutSpacing: Story = {
  render: () => (
    <>
      <Nav>
        <Nav.Primary>
          <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
          <Nav.Menu menu={NavDataSingle} />
          <Nav.Aside menu={NavAsideData} />
        </Nav.Primary>
      </Nav>

      <Main>
        <Section hasProse>
          <TextImage>
            <TextImage.Content headerType="h1" title="Layout Spacing">
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
            </TextImage.Content>
          </TextImage>

          <h2>Not in a container</h2>
          <DoublePara />
          <h2>Not in a container</h2>
          <SinglePara />

          <Container isGrey>
            <SinglePara />
            <Column cols="2">
              <Column.Content>One</Column.Content>
              <Column.Content>One</Column.Content>
            </Column>
            <Column cols="2">
              <Column.Content>One</Column.Content>
              <Column.Content>One</Column.Content>
            </Column>
            <Panel hasBorder hasShadow>
              <p>foo</p>
            </Panel>
            <Column cols="2">
              <Column.Content>One</Column.Content>
              <Column.Content>One</Column.Content>
            </Column>
          </Container>

          <Container>
            <h2>This is a container</h2>
            <SinglePara />
            <Column cols="2">
              <Column.Content>
                <SinglePara />
              </Column.Content>
              <Column.Content>
                <SinglePara />
              </Column.Content>
            </Column>
            <SinglePara />
          </Container>

          <Container isGrey>
            <h2>This is a container</h2>
            <SinglePara />
            <Column cols="2">
              <Column.Content>
                <SinglePara />
              </Column.Content>
              <Column.Content>
                <SinglePara />
              </Column.Content>
            </Column>
            <SinglePara />
          </Container>

          <h2>Not in a container</h2>
          <DoublePara />
          <h2>Not in a container</h2>
          <SinglePara />
          <Panel hasBorder hasShadow>
            <p>foo</p>
          </Panel>
          <Panel hasBorder hasShadow>
            <p>foo</p>
          </Panel>
          <SinglePara />

          <Container>
            <h2>This is a container</h2>
            <SinglePara />
            <Panel hasBorder hasShadow>
              <p>foo</p>
            </Panel>
            <Panel hasBorder hasShadow>
              <p>foo</p>
            </Panel>
            <SinglePara />
          </Container>

          <Container isGrey>
            <h2>This is a container</h2>
            <SinglePara />
            <Panel hasBorder hasShadow>
              <p>foo</p>
            </Panel>
            <Panel hasBorder hasShadow>
              <p>foo</p>
            </Panel>
            <SinglePara />
          </Container>

          <h2>Not in a container</h2>
          <DoublePara />
          <h2>Not in a container</h2>
          <SinglePara />
          <Column cols="2">
            <Panel hasBorder hasShadow>
              <p>foo</p>
            </Panel>
            <Panel hasBorder hasShadow>
              <p>foo</p>
            </Panel>
          </Column>
          <SinglePara />

          <Container>
            <h2>This is a container</h2>
            <SinglePara />
            <Column cols="2">
              <Panel hasBorder hasShadow>
                <p>foo</p>
              </Panel>
              <Panel hasBorder hasShadow>
                <p>foo</p>
              </Panel>
            </Column>
            <SinglePara />
          </Container>

          <Container isGrey>
            <h2>This is a container</h2>
            <SinglePara />
            <Column cols="2">
              <Panel hasBorder hasShadow>
                <p>foo</p>
              </Panel>
              <Panel hasBorder hasShadow>
                <p>foo</p>
              </Panel>
            </Column>
            <SinglePara />
          </Container>

          <Container isGrey>
            <h2>This is a container</h2>
            <DoublePara />
          </Container>

          <Container isGrey>
            <h2>This is a container</h2>
            <DoublePara />
          </Container>

          <h2>Not in a container</h2>
          <DoublePara />

          <Container isGrey>
            <h2>This is a container</h2>
            <DoublePara />
          </Container>

          <Container>
            <h2>This is a container</h2>
            <DoublePara />
          </Container>

          <Container>
            <h2>This is a container</h2>
            <DoublePara />
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  ),
}
