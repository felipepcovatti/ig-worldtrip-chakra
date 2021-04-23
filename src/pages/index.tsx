import { Box, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { Header } from '../components/Header'
import { HomeBanner } from '../components/HomeBanner'
import { IconsSection } from '../components/IconsSection'
import { theme } from '../styles/theme'
import faker from 'faker'
import { HomeSwiper } from '../components/HomeSwiper'
import { GetServerSideProps } from 'next'
import { api } from '../services/api'

type Category = {
  id: number;
  name: string;
  image: string;
}
interface HomeProps {
  categories: Category[]
}

export default function Home({ categories }: HomeProps) {

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

      <HomeSwiper categories={categories} />
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: categories } = await api.get('categories')

  return {
    props: {
      categories
    }
  }
}