import { Box, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { Header } from '../components/Header'
import { HomeBanner } from '../components/HomeBanner'
import { IconsSection } from '../components/IconsSection'
import { theme } from '../styles/theme'
import faker from 'faker'
import { HomeSwiper } from '../components/HomeSwiper'


const slides = [
  {
    id: 1,
    image: 'budapest.jpg'
  },
  {
    id: 2,
    image: 'rio.jpg'
  },
  {
    id: 3,
    image: 'new-york.jpg'
  }
]

export default function Home() {
  return (
    <Box mb="75px">
      <Head>
        <title>Wordtrip | Home</title>
      </Head>

      <Header />

      <HomeBanner />

      <IconsSection />

      <hr style={{
        width: 100,
        margin: "75px auto",
        borderWidth: 1,
        borderColor: theme.colors.gray[600]
      }} />

      <Text
        textAlign="center"
        fontSize="xx-large"
        mb="75px"
      >
        {faker.lorem.sentence(2)} <br />
        {faker.lorem.sentence(5)}
      </Text>

      <HomeSwiper slides={slides} />
    </Box>
  )
}
