import Head from 'next/head'
import { Header } from '../components/Header'
import { HomeBanner } from '../components/HomeBanner'
import { IconsSection } from '../components/IconsSection'

const icons = [
  'cocktail',
  'surf',
  'building',
  'museum',
  'earth'
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Wordtrip | Home</title>
      </Head>

      <Header />

      <HomeBanner />

      <IconsSection icons={icons} />
    </>
  )
}
