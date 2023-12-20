import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Container } from '../../layouts/Container/Container'
import { Main } from '../../layouts/Main/Main'
import { FooterBasic } from '../../components/Footer/FooterBasic/FooterBasic'
import { Column } from '../../layouts/Column/Column'
import { TopBar } from '../../components/TopBar/TopBar'
import { Heading } from '../../components/Heading/Heading'
import { Card } from '../../components/Card/Card'
import { PeopleData } from '../../data/PeopleData'
import { TextImage } from '../../components/TextImage/TextImage'

const meta: Meta = {
  title: 'Examples/Blocks',
}

export default meta
type Story = StoryObj

export const PeopleCardOptions: Story = {
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
            <TextImage.Content headerType="h1" title="People Cards">
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
                reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores
                accusamus in. Praesent quis ligula quis nulla malesuada tempor.
              </p>
            </TextImage.Content>
          </TextImage>

          <Container>
            <Heading text="People Cards: Default" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Card key={id} isCenter>
                  <a href={link}>
                    <Card.Figure isRound>
                      <img src={image} alt={alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${firstName} ${lastName}`} />
                      <Card.PeopleMeta jobTitle={jobTitle} email={email} phone={phone} />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="People Cards: Shadow on Hover" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Card key={id} hasShadow="onHover" isCenter>
                  <a href={link}>
                    <Card.Figure isRound>
                      <img src={image} alt={alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${firstName} ${lastName}`} />
                      <Card.PeopleMeta jobTitle={jobTitle} email={email} phone={phone} />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="People Cards: Shadow on Static & Hover" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Card key={id} hasShadow="onCard" isCenter>
                  <a href={link}>
                    <Card.Figure isRound>
                      <img src={image} alt={alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${firstName} ${lastName}`} />
                      <Card.PeopleMeta jobTitle={jobTitle} email={email} phone={phone} />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="People Cards: Default with Grey Bg" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Card key={id} isCenter>
                  <a href={link}>
                    <Card.Figure isRound>
                      <img src={image} alt={alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${firstName} ${lastName}`} />
                      <Card.PeopleMeta jobTitle={jobTitle} email={email} phone={phone} />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="People Cards: Shadow on Hover with Grey Bg" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Card key={id} hasShadow="onHover" isCenter>
                  <a href={link}>
                    <Card.Figure isRound>
                      <img src={image} alt={alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${firstName} ${lastName}`} />
                      <Card.PeopleMeta jobTitle={jobTitle} email={email} phone={phone} />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container>
            <Heading text="People Cards: Shadow on Static & Hover with Grey Bg" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Card key={id} hasShadow="onCard" isCenter>
                  <a href={link}>
                    <Card.Figure isRound>
                      <img src={image} alt={alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${firstName} ${lastName}`} />
                      <Card.PeopleMeta jobTitle={jobTitle} email={email} phone={phone} />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="People Cards: Default" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Card key={id} isCenter>
                  <a href={link}>
                    <Card.Figure isRound>
                      <img src={image} alt={alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${firstName} ${lastName}`} />
                      <Card.PeopleMeta jobTitle={jobTitle} email={email} phone={phone} />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="People Cards: Shadow on Hover" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Card key={id} hasShadow="onHover" isCenter>
                  <a href={link}>
                    <Card.Figure isRound>
                      <img src={image} alt={alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${firstName} ${lastName}`} />
                      <Card.PeopleMeta jobTitle={jobTitle} email={email} phone={phone} />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="People Cards: Shadow on Static & Hover" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Card key={id} hasShadow="onCard" isCenter>
                  <a href={link}>
                    <Card.Figure isRound>
                      <img src={image} alt={alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${firstName} ${lastName}`} />
                      <Card.PeopleMeta jobTitle={jobTitle} email={email} phone={phone} />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="People Cards: Default with Grey Bg" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Card key={id} isCenter>
                  <a href={link}>
                    <Card.Figure isRound>
                      <img src={image} alt={alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${firstName} ${lastName}`} />
                      <Card.PeopleMeta jobTitle={jobTitle} email={email} phone={phone} />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="People Cards: Shadow on Hover with Grey Bg" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Card key={id} hasShadow="onHover" isCenter>
                  <a href={link}>
                    <Card.Figure isRound>
                      <img src={image} alt={alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${firstName} ${lastName}`} />
                      <Card.PeopleMeta jobTitle={jobTitle} email={email} phone={phone} />
                    </Card.Content>
                  </a>
                </Card>
              ))}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="People Cards: Shadow on Static & Hover with Grey Bg" />
            <Column cols="3">
              {PeopleData.slice(0, 3).map(({ id, link, image, alt, firstName, lastName, jobTitle, email, phone }) => (
                <Card key={id} hasShadow="onCard" isCenter>
                  <a href={link}>
                    <Card.Figure isRound>
                      <img src={image} alt={alt} width={280} height={280} />
                    </Card.Figure>
                    <Card.Content>
                      <Card.Header text={`${firstName} ${lastName}`} />
                      <Card.PeopleMeta jobTitle={jobTitle} email={email} phone={phone} />
                    </Card.Content>
                  </a>
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
