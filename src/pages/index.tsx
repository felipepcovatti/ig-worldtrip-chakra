import { Box, Divider, Text } from '@chakra-ui/react'
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
  id: string;
  name: string;
  image: string;
}
interface HomeProps {
  continents: Continent[]
}

export default function Home({ continents }: HomeProps) {

  faker.seed(8)

  return (
    <Box mb={{ base: 8, lg: '75px' }}>
      <Head>
        <title>Wordtrip | Home</title>
      </Head>

      <Header />

      <HomeBanner />

      <IconsSection />

      <Divider
        w={{ base: '60px', lg: '90px' }}
        my={{ base: 8, lg: '75px' }}
        mx="auto"
        borderWidth="1px"
        opacity="1"
        borderColor={theme.colors.grey[700]}
      />

      <Text
        textAlign="center"
        fontSize={{ base: 'xl', lg: '4xl' }}
        fontWeight="medium"
        mb={{ base: 5, lg: '75px' }}
      >
        {faker.lorem.sentence(2).replace('.', '?')} <br />
        {faker.lorem.sentence(5).replace('.', '')}
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