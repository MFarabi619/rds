import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Container } from '../../layouts/Container/Container'
import { Main } from '../../layouts/Main/Main'
import { FooterBasic } from '../../components/Footer/FooterBasic/FooterBasic'
import { StackedList } from '../../layouts/StackedList/StackedList'
import { TopBar } from '../../components/TopBar/TopBar'
import { Heading } from '../../components/Heading/Heading'
import { Listing } from '../../components/Listing/Listing'
import { NewsData } from '../../data/NewsData'
import { TextImage } from '../../components/TextImage/TextImage'

const meta: Meta = {
  title: 'Examples/Blocks',
}

export default meta
type Story = StoryObj

export const NewsListing: Story = {
  render: () => (
    <>
      <TopBar>
        <TopBar.Primary>
          <TopBar.Logo link="https://carleton.ca/webservices">
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
      </TopBar>

      <Main>
        <Section hasProse>
          <TextImage hasBorder>
            <TextImage.Content headerType="h1" title="News Listing">
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
            </TextImage.Content>
          </TextImage>

          <Container>
            <Heading text="News Listings: Default" />
            <StackedList hasShadow>
              {NewsData.slice(0, 4).map(({ id, title, link, excerpt, date, image, alt }) => (
                <Listing key={id}>
                  <Listing.Figure>
                    <img src={image} alt={alt} width="400" height="266" />
                  </Listing.Figure>
                  <Listing.Body>
                    <Listing.Header date={date}>{title}</Listing.Header>
                    <Listing.Excerpt text={excerpt} />
                    <Listing.Footer isType="button">
                      <a href={link}>Read more</a>
                    </Listing.Footer>
                  </Listing.Body>
                </Listing>
              ))}
            </StackedList>
          </Container>

          <Container>
            <Heading text="News Listings: One Column" />
            <StackedList cols="1" hasShadow>
              {NewsData.slice(0, 4).map(({ id, title, link, excerpt, date, image, alt }) => (
                <Listing key={id}>
                  <Listing.Figure>
                    <img src={image} alt={alt} width="400" height="266" />
                  </Listing.Figure>
                  <Listing.Body>
                    <Listing.Header date={date}>{title}</Listing.Header>
                    <Listing.Excerpt text={excerpt} />
                    <Listing.Footer isType="button">
                      <a href={link}>Read more</a>
                    </Listing.Footer>
                  </Listing.Body>
                </Listing>
              ))}
            </StackedList>
          </Container>

          <Container isGrey>
            <Heading text="News Listings: Default with Grey Bg" />
            <StackedList hasShadow>
              {NewsData.slice(0, 4).map(({ id, title, link, excerpt, date, image, alt }) => (
                <Listing key={id}>
                  <Listing.Figure>
                    <img src={image} alt={alt} width="400" height="266" />
                  </Listing.Figure>
                  <Listing.Body>
                    <Listing.Header date={date}>{title}</Listing.Header>
                    <Listing.Excerpt text={excerpt} />
                    <Listing.Footer isType="button">
                      <a href={link}>Read more</a>
                    </Listing.Footer>
                  </Listing.Body>
                </Listing>
              ))}
            </StackedList>
          </Container>

          <Container isGrey>
            <Heading text="News Listings: One Column with Grey Bg" />
            <StackedList cols="1" hasShadow>
              {NewsData.slice(0, 4).map(({ id, title, link, excerpt, date, image, alt }) => (
                <Listing key={id}>
                  <Listing.Figure>
                    <img src={image} alt={alt} width="400" height="266" />
                  </Listing.Figure>
                  <Listing.Body>
                    <Listing.Header date={date}>{title}</Listing.Header>
                    <Listing.Excerpt text={excerpt} />
                    <Listing.Footer isType="button">
                      <a href={link}>Read more</a>
                    </Listing.Footer>
                  </Listing.Body>
                </Listing>
              ))}
            </StackedList>
          </Container>

          <Heading text="News Listings: Offset" />

          <p>
            Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Etiam quis interdum nisi, et malesuada lectus. Aliquam
            luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
          </p>

          <StackedList header="Recent News" as="ul" cols="1" listType="posts" offset="right" hasShadow>
            {NewsData.slice(0, 3).map(({ id, title, link, excerpt, date, image, alt }) => (
              <Listing key={id}>
                <Listing.Figure>
                  <img src={image} alt={alt} width="400" height="266" />
                </Listing.Figure>
                <Listing.Body>
                  <Listing.Header date={date}>{title}</Listing.Header>
                  <Listing.Excerpt text={excerpt} />
                  <Listing.Footer isType="button">
                    <a href={link}>Read more</a>
                  </Listing.Footer>
                </Listing.Body>
              </Listing>
            ))}
          </StackedList>

          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor.
          </p>
          <p>
            Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Etiam quis interdum nisi, et malesuada lectus. Aliquam
            luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
          </p>
          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor.
          </p>
          <p>
            Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Etiam quis interdum nisi, et malesuada lectus. Aliquam
            luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
          </p>
          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor.
          </p>
          <p>
            Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Etiam quis interdum nisi, et malesuada lectus. Aliquam
            luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
          </p>
          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Nobis voluptatem dolorum et eum doloremque cupiditate
            velit. Praesentium architecto a distinctio aut reprehenderit ducimus.
          </p>
          <p>
            Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
            Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
            reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus
            in. Praesent quis ligula quis nulla malesuada tempor. Etiam quis interdum nisi, et malesuada lectus. Aliquam
            luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
          </p>
        </Section>
      </Main>

      <FooterBasic />
    </>
  ),
}
