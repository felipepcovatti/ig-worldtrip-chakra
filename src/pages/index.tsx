import { Box, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { Header } from '../components/Header'
import { HomeBanner } from '../components/HomeBanner'
import { IconsSection } from '../components/IconsSection'
import { theme } from '../styles/theme'
import faker from 'faker'
import { HomeSwiper } from '../components/HomeSwiper'
import { GetStaticProps } from 'next'
import { api } from '../services/api'

type Continent = {
  id: number;
  name: string;
  image: string;
}
interface HomeProps {
  continents: Continent[]
}

export default function Home({ continents }: HomeProps) {

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

      <HomeSwiper slides={continents} />
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: continents } = await api.get('continents')

  return {
    props: {
      continents
    },
    revalidate: 60
  }
}