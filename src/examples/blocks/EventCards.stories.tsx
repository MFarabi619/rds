import type { Meta, StoryObj } from '@storybook/react'
import { Section } from '../../layouts/Section/Section'
import { Container } from '../../layouts/Container/Container'
import { Main } from '../../layouts/Main/Main'
import { FooterBasic } from '../../components/Footer/FooterBasic/FooterBasic'
import { Column } from '../../layouts/Column/Column'
import { TopBar } from '../../components/TopBar/TopBar'
import { HeroTextImage } from '../../_deprecated/HeroTextImage/HeroTextImage'
import { Heading } from '../../components/Heading/Heading'
import { Card } from '../../components/Card/Card'
import { EventData } from '../../data/EventData'

const meta: Meta = {
  title: 'Examples/Blocks',
}

export default meta
type Story = StoryObj

export const EventCardOptions: Story = {
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
          <HeroTextImage maxWidth="5xl" hasBorder>
            <HeroTextImage.Content title="Event Card Options" headerType="h1" />
          </HeroTextImage>

          <Container>
            <Heading text="Event Cards: Default" />
            <Column cols="3">
              {EventData.slice(0, 3).map(
                ({
                  id,
                  title,
                  link,
                  image,
                  alt,
                  startDate,
                  endDate,
                  on_campus,
                  on_campus_building,
                  on_campus_room_number,
                  event_address,
                }) => (
                  <Card key={id}>
                    <a href={link}>
                      <Card.Figure>
                        <img src={image} alt={alt} width={400} height={175} />
                      </Card.Figure>
                      <Card.Content>
                        <Card.DateBox startDate={startDate} endDate={endDate} />
                        <Card.Header text={title} />
                        <Card.EventMeta
                          startDateTime={startDate}
                          endDateTime={endDate}
                          onCampus={on_campus}
                          onCampusBuilding={on_campus_building}
                          onCampusRoomNumber={on_campus_room_number}
                          eventAddress={event_address}
                        />
                      </Card.Content>
                    </a>
                  </Card>
                ),
              )}
            </Column>
          </Container>

          <Container>
            <Heading text="Event Cards: Shadow on Hover" />
            <Column cols="3">
              {EventData.slice(0, 3).map(
                ({
                  id,
                  title,
                  link,
                  image,
                  alt,
                  startDate,
                  endDate,
                  on_campus,
                  on_campus_building,
                  on_campus_room_number,
                  event_address,
                }) => (
                  <Card key={id} hasShadow="onHover">
                    <a href={link}>
                      <Card.Figure>
                        <img src={image} alt={alt} width={400} height={175} />
                      </Card.Figure>
                      <Card.Content>
                        <Card.DateBox startDate={startDate} endDate={endDate} />
                        <Card.Header text={title} />
                        <Card.EventMeta
                          startDateTime={startDate}
                          endDateTime={endDate}
                          onCampus={on_campus}
                          onCampusBuilding={on_campus_building}
                          onCampusRoomNumber={on_campus_room_number}
                          eventAddress={event_address}
                        />
                      </Card.Content>
                    </a>
                  </Card>
                ),
              )}
            </Column>
          </Container>

          <Container>
            <Heading text="Event Cards: Shadow on Static & Hover" />
            <Column cols="3">
              {EventData.slice(0, 3).map(
                ({
                  id,
                  title,
                  link,
                  image,
                  alt,
                  startDate,
                  endDate,
                  on_campus,
                  on_campus_building,
                  on_campus_room_number,
                  event_address,
                }) => (
                  <Card key={id} hasShadow="onCard">
                    <a href={link}>
                      <Card.Figure>
                        <img src={image} alt={alt} width={400} height={175} />
                      </Card.Figure>
                      <Card.Content>
                        <Card.DateBox startDate={startDate} endDate={endDate} />
                        <Card.Header text={title} />
                        <Card.EventMeta
                          startDateTime={startDate}
                          endDateTime={endDate}
                          onCampus={on_campus}
                          onCampusBuilding={on_campus_building}
                          onCampusRoomNumber={on_campus_room_number}
                          eventAddress={event_address}
                        />
                      </Card.Content>
                    </a>
                  </Card>
                ),
              )}
            </Column>
          </Container>

          <Container>
            <Heading text="Event Cards: Default with Grey Bg" />
            <Column cols="3">
              {EventData.slice(0, 3).map(
                ({
                  id,
                  title,
                  link,
                  image,
                  alt,
                  startDate,
                  endDate,
                  on_campus,
                  on_campus_building,
                  on_campus_room_number,
                  event_address,
                }) => (
                  <Card key={id} isGrey>
                    <a href={link}>
                      <Card.Figure>
                        <img src={image} alt={alt} width={400} height={175} />
                      </Card.Figure>
                      <Card.Content>
                        <Card.DateBox startDate={startDate} endDate={endDate} />
                        <Card.Header text={title} />
                        <Card.EventMeta
                          startDateTime={startDate}
                          endDateTime={endDate}
                          onCampus={on_campus}
                          onCampusBuilding={on_campus_building}
                          onCampusRoomNumber={on_campus_room_number}
                          eventAddress={event_address}
                        />
                      </Card.Content>
                    </a>
                  </Card>
                ),
              )}
            </Column>
          </Container>

          <Container>
            <Heading text="Event Cards: Shadow on Hover with Grey Bg" />
            <Column cols="3">
              {EventData.slice(0, 3).map(
                ({
                  id,
                  title,
                  link,
                  image,
                  alt,
                  startDate,
                  endDate,
                  on_campus,
                  on_campus_building,
                  on_campus_room_number,
                  event_address,
                }) => (
                  <Card key={id} isGrey hasShadow="onHover">
                    <a href={link}>
                      <Card.Figure>
                        <img src={image} alt={alt} width={400} height={175} />
                      </Card.Figure>
                      <Card.Content>
                        <Card.DateBox startDate={startDate} endDate={endDate} />
                        <Card.Header text={title} />
                        <Card.EventMeta
                          startDateTime={startDate}
                          endDateTime={endDate}
                          onCampus={on_campus}
                          onCampusBuilding={on_campus_building}
                          onCampusRoomNumber={on_campus_room_number}
                          eventAddress={event_address}
                        />
                      </Card.Content>
                    </a>
                  </Card>
                ),
              )}
            </Column>
          </Container>

          <Container>
            <Heading text="Event Cards: Shadow on Static & Hover with Grey Bg" />
            <Column cols="3">
              {EventData.slice(0, 3).map(
                ({
                  id,
                  title,
                  link,
                  image,
                  alt,
                  startDate,
                  endDate,
                  on_campus,
                  on_campus_building,
                  on_campus_room_number,
                  event_address,
                }) => (
                  <Card key={id} isGrey hasShadow="onCard">
                    <a href={link}>
                      <Card.Figure>
                        <img src={image} alt={alt} width={400} height={175} />
                      </Card.Figure>
                      <Card.Content>
                        <Card.DateBox startDate={startDate} endDate={endDate} />
                        <Card.Header text={title} />
                        <Card.EventMeta
                          startDateTime={startDate}
                          endDateTime={endDate}
                          onCampus={on_campus}
                          onCampusBuilding={on_campus_building}
                          onCampusRoomNumber={on_campus_room_number}
                          eventAddress={event_address}
                        />
                      </Card.Content>
                    </a>
                  </Card>
                ),
              )}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Event Cards: Default" />
            <Column cols="3">
              {EventData.slice(0, 3).map(
                ({
                  id,
                  title,
                  link,
                  image,
                  alt,
                  startDate,
                  endDate,
                  on_campus,
                  on_campus_building,
                  on_campus_room_number,
                  event_address,
                }) => (
                  <Card key={id}>
                    <a href={link}>
                      <Card.Figure>
                        <img src={image} alt={alt} width={400} height={175} />
                      </Card.Figure>
                      <Card.Content>
                        <Card.DateBox startDate={startDate} endDate={endDate} />
                        <Card.Header text={title} />
                        <Card.EventMeta
                          startDateTime={startDate}
                          endDateTime={endDate}
                          onCampus={on_campus}
                          onCampusBuilding={on_campus_building}
                          onCampusRoomNumber={on_campus_room_number}
                          eventAddress={event_address}
                        />
                      </Card.Content>
                    </a>
                  </Card>
                ),
              )}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Event Cards: Shadow on Hover" />
            <Column cols="3">
              {EventData.slice(0, 3).map(
                ({
                  id,
                  title,
                  link,
                  image,
                  alt,
                  startDate,
                  endDate,
                  on_campus,
                  on_campus_building,
                  on_campus_room_number,
                  event_address,
                }) => (
                  <Card key={id} hasShadow="onHover">
                    <a href={link}>
                      <Card.Figure>
                        <img src={image} alt={alt} width={400} height={175} />
                      </Card.Figure>
                      <Card.Content>
                        <Card.DateBox startDate={startDate} endDate={endDate} />
                        <Card.Header text={title} />
                        <Card.EventMeta
                          startDateTime={startDate}
                          endDateTime={endDate}
                          onCampus={on_campus}
                          onCampusBuilding={on_campus_building}
                          onCampusRoomNumber={on_campus_room_number}
                          eventAddress={event_address}
                        />
                      </Card.Content>
                    </a>
                  </Card>
                ),
              )}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Event Cards: Shadow on Static & Hover" />
            <Column cols="3">
              {EventData.slice(0, 3).map(
                ({
                  id,
                  title,
                  link,
                  image,
                  alt,
                  startDate,
                  endDate,
                  on_campus,
                  on_campus_building,
                  on_campus_room_number,
                  event_address,
                }) => (
                  <Card key={id} hasShadow="onCard">
                    <a href={link}>
                      <Card.Figure>
                        <img src={image} alt={alt} width={400} height={175} />
                      </Card.Figure>
                      <Card.Content>
                        <Card.DateBox startDate={startDate} endDate={endDate} />
                        <Card.Header text={title} />
                        <Card.EventMeta
                          startDateTime={startDate}
                          endDateTime={endDate}
                          onCampus={on_campus}
                          onCampusBuilding={on_campus_building}
                          onCampusRoomNumber={on_campus_room_number}
                          eventAddress={event_address}
                        />
                      </Card.Content>
                    </a>
                  </Card>
                ),
              )}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Event Cards: Default with Grey Bg" />
            <Column cols="3">
              {EventData.slice(0, 3).map(
                ({
                  id,
                  title,
                  link,
                  image,
                  alt,
                  startDate,
                  endDate,
                  on_campus,
                  on_campus_building,
                  on_campus_room_number,
                  event_address,
                }) => (
                  <Card key={id} isGrey>
                    <a href={link}>
                      <Card.Figure>
                        <img src={image} alt={alt} width={400} height={175} />
                      </Card.Figure>
                      <Card.Content>
                        <Card.DateBox startDate={startDate} endDate={endDate} />
                        <Card.Header text={title} />
                        <Card.EventMeta
                          startDateTime={startDate}
                          endDateTime={endDate}
                          onCampus={on_campus}
                          onCampusBuilding={on_campus_building}
                          onCampusRoomNumber={on_campus_room_number}
                          eventAddress={event_address}
                        />
                      </Card.Content>
                    </a>
                  </Card>
                ),
              )}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Event Cards: Shadow on Hover with Grey Bg" />
            <Column cols="3">
              {EventData.slice(0, 3).map(
                ({
                  id,
                  title,
                  link,
                  image,
                  alt,
                  startDate,
                  endDate,
                  on_campus,
                  on_campus_building,
                  on_campus_room_number,
                  event_address,
                }) => (
                  <Card key={id} isGrey hasShadow="onHover">
                    <a href={link}>
                      <Card.Figure>
                        <img src={image} alt={alt} width={400} height={175} />
                      </Card.Figure>
                      <Card.Content>
                        <Card.DateBox startDate={startDate} endDate={endDate} />
                        <Card.Header text={title} />
                        <Card.EventMeta
                          startDateTime={startDate}
                          endDateTime={endDate}
                          onCampus={on_campus}
                          onCampusBuilding={on_campus_building}
                          onCampusRoomNumber={on_campus_room_number}
                          eventAddress={event_address}
                        />
                      </Card.Content>
                    </a>
                  </Card>
                ),
              )}
            </Column>
          </Container>

          <Container isGrey>
            <Heading text="Event Cards: Shadow on Static & Hover with Grey Bg" />
            <Column cols="3">
              {EventData.slice(0, 3).map(
                ({
                  id,
                  title,
                  link,
                  image,
                  alt,
                  startDate,
                  endDate,
                  on_campus,
                  on_campus_building,
                  on_campus_room_number,
                  event_address,
                }) => (
                  <Card key={id} isGrey hasShadow="onCard">
                    <a href={link}>
                      <Card.Figure>
                        <img src={image} alt={alt} width={400} height={175} />
                      </Card.Figure>
                      <Card.Content>
                        <Card.DateBox startDate={startDate} endDate={endDate} />
                        <Card.Header text={title} />
                        <Card.EventMeta
                          startDateTime={startDate}
                          endDateTime={endDate}
                          onCampus={on_campus}
                          onCampusBuilding={on_campus_building}
                          onCampusRoomNumber={on_campus_room_number}
                          eventAddress={event_address}
                        />
                      </Card.Content>
                    </a>
                  </Card>
                ),
              )}
            </Column>
          </Container>
        </Section>
      </Main>

      <FooterBasic />
    </>
  ),
}