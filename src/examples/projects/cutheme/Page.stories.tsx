import { Meta, StoryObj } from '@storybook/react'

import { Main } from '../../../layouts/Main/Main'
import { Section } from '../../../layouts/Section/Section'
import { Container } from '../../../layouts/Container/Container'
import { Column } from '../../../layouts/Column/Column'

import { TopBar } from '../../../components/TopBar/TopBar'
import { HeroTextImage } from '../../../_deprecated/HeroTextImage/HeroTextImage'
import { FooterBasic } from '../../../components/Footer/FooterBasic/FooterBasic'
import { Heading } from '../../../components/Heading/Heading'
import { Card } from '../../../components/Card/Card'

import { NewsData as data } from '../../../data/NewsData'
import { Button } from '../../../components/Button/Button'
import { Embed } from '../../../components/Embed/Embed'
import { TopBarDataSingle } from '../../../data/TopBarData'

const meta: Meta = {
  title: 'Examples/Projects/cutheme/Page Layouts',
}

export default meta
type Story = StoryObj

const heroPara = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse
condimentum magna vel orci vulputate, eget vulputate neque porttitor.`

const SinglePara = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tortor pellentesque, posuere tellus
        vitae, sagittis justo. Vivamus imperdiet turpis nec elit ultricies, sed tempus diam dignissim. Suspendisse
        condimentum magna vel orci vulputate, eget vulputate neque porttitor. Suspendisse euismod, urna et gravida
        volutpat, tortor risus vehicula nisl, in vulputate lectus.
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

export const SinglePage: Story = {
  render: () => (
    <>
      <TopBar>
        <TopBar.Primary>
          <TopBar.Logo title="Raven Design System" link="https://carleton.ca/webservices">
            <a href="https://carleton.ca" className="cu-topbar--logo">
              <img
                className="culogo"
                src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg"
                width="130"
                height="35"
                alt="Logo"
              />
              <img
                className="cushield"
                src="https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg"
                width="28"
                height="35"
                alt="Logo"
              />
            </a>
          </TopBar.Logo>
          <TopBar.Aside />
        </TopBar.Primary>
        <TopBar.Secondary>
          <TopBar.Menu>
            {TopBarDataSingle.map((topBarLink, i) => (
              <>
                {!topBarLink.submenu && (
                  <a key={i} href={topBarLink.href} className="cu-topbar--parent-link">
                    {topBarLink.title}
                  </a>
                )}
                {topBarLink.submenu && (
                  <TopBar.SubMenu label={topBarLink.title}>
                    {topBarLink.submenu.map((topBarSubLink, s) => (
                      <a key={s} href={topBarSubLink.href} className="cu-topbar--more-nav">
                        {topBarSubLink.title}
                      </a>
                    ))}
                  </TopBar.SubMenu>
                )}
              </>
            ))}
          </TopBar.Menu>
        </TopBar.Secondary>
      </TopBar>

      <Main>
        <Section hasProse>
          <HeroTextImage>
            <HeroTextImage.Content
              title="Website and Application Development"
              paragraph={heroPara}
              headerType="h1"
              hasMediaCol
            >
              <div className="flex flex-wrap gap-4 buttons md:gap-6">
                <Button title="Primary" />
                <Button title="Secondary" color="grey" />
              </div>
            </HeroTextImage.Content>
            <HeroTextImage.Media image="https://picsum.photos/400/266" />
          </HeroTextImage>

          <h2>This is a header 2</h2>
          <SinglePara />

          <Embed>
            <Embed.PowerBi
              title="test"
              url="https://app.powerbi.com/view?r=eyJrIjoiYTU2ZTBkZjgtZDZmZS00YjliLWIwMzktN2RjMTY3YjEzM2FkIiwidCI6IjZhZDkxODk1LWRlMDYtNDg1ZS1iYzUxLWZjZTEyNmNjODUzMCIsImMiOjN9&pageName=ReportSectionc2accda99bdcb7ce79a1"
            />
          </Embed>

          <h3>This is a header 3</h3>
          <SinglePara />

          <Embed>
            <Embed.Kaltura
              title="test"
              url="https://mediaspace.carleton.ca/embed/secure/iframe/entryId/1_8q7610g9/uiConfId/36153741/st/0"
            />
          </Embed>

          <h4>This is a header 4</h4>
          <DoublePara />

          <Container>
            <Heading text="News Card Block" />
            <Column cols="3">
              {data.slice(0, 3).map((item) => (
                <Card key={item?.id}>
                  <Card.Figure>
                    <img src={item?.image} alt={item?.alt} width="400" height="266" />
                  </Card.Figure>
                  <Card.Content>
                    <Card.PostMeta date={item?.date} />
                    <Card.Header text={item?.title} />
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                  </Card.Content>
                  <Card.Badges tags={item?.tags} />
                </Card>
              ))}
              {data.slice(0, 3).map((item) => (
                <Card key={item?.id}>
                  <Card.Figure>
                    <img src={item?.image} alt={item?.alt} width="400" height="266" />
                  </Card.Figure>
                  <Card.Content>
                    <Card.PostMeta date={item?.date} />
                    <Card.Header text={item?.title} />
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                  </Card.Content>
                  <Card.Badges tags={item?.tags} />
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="News Card Block" />
            <Column cols="3">
              {data.slice(0, 3).map((item) => (
                <Card key={item?.id}>
                  <Card.Figure>
                    <img src={item?.image} alt={item?.alt} width="400" height="266" />
                  </Card.Figure>
                  <Card.Content>
                    <Card.PostMeta date={item?.date} />
                    <Card.Header text={item?.title} />
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                  </Card.Content>
                  <Card.Badges tags={item?.tags} />
                </Card>
              ))}
            </Column>
          </Container>

          <DoublePara />

          <h2>This is a header 2</h2>
          <SinglePara />

          <Container isGrey>
            <Heading text="News Card Block" />
            <Column cols="3">
              {data.slice(0, 3).map((item) => (
                <Card key={item?.id}>
                  <Card.Figure>
                    <img src={item?.image} alt={item?.alt} width="400" height="266" />
                  </Card.Figure>
                  <Card.Content>
                    <Card.PostMeta date={item?.date} />
                    <Card.Header text={item?.title} />
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                  </Card.Content>
                  <Card.Badges tags={item?.tags} />
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey maxWidth="5xl">
            <Heading text="News Card Block" />
            <Column cols="4" maxWidth="7xl">
              {data.slice(0, 4).map((item) => (
                <Card key={item?.id}>
                  <Card.Figure>
                    <img src={item?.image} alt={item?.alt} width="400" height="266" />
                  </Card.Figure>
                  <Card.Content>
                    <Card.PostMeta date={item?.date} />
                    <Card.Header text={item?.title} />
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                  </Card.Content>
                  <Card.Badges tags={item?.tags} />
                </Card>
              ))}
            </Column>
          </Container>

          <DoublePara />

          <h2>This is a header 2</h2>
          <SinglePara />

          <Container>
            <Heading text="News Card Block" />
            <Column cols="3">
              {data.slice(0, 3).map((item) => (
                <Card key={item?.id}>
                  <Card.Figure>
                    <img src={item?.image} alt={item?.alt} width="400" height="266" />
                  </Card.Figure>
                  <Card.Content>
                    <Card.PostMeta date={item?.date} />
                    <Card.Header text={item?.title} />
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                  </Card.Content>
                  <Card.Badges tags={item?.tags} />
                </Card>
              ))}
            </Column>
          </Container>

          <Container maxWidth="5xl">
            <Heading text="News Card Block" />
            <Column cols="4" maxWidth="7xl">
              {data.slice(0, 4).map((item) => (
                <Card key={item?.id}>
                  <Card.Figure>
                    <img src={item?.image} alt={item?.alt} width="400" height="266" />
                  </Card.Figure>
                  <Card.Content>
                    <Card.PostMeta date={item?.date} />
                    <Card.Header text={item?.title} />
                    <Card.Excerpt text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra laoreet lobortis. In hac habitasse platea dictumst. Nulla porta posuere est, aliquam mollis mi accumsan id. Morbi mauris ex, gravida eu sodales sed, tempor vel mauris." />
                  </Card.Content>
                  <Card.Badges tags={item?.tags} />
                </Card>
              ))}
            </Column>
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  ),
}