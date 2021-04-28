import { Box, Flex, Heading, Icon, Image, SimpleGrid, Text, Tooltip, useBreakpointValue } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { api } from "../services/api";
import { theme } from "../styles/theme";
import Flags from 'country-flag-icons/react/1x1'
import faker from 'faker'
import { InfoOutlineIcon } from "@chakra-ui/icons";

type Continent = {
  id: number;
  name: string;
  image: string;
}

type City = {
  name: string;
  country: string;
  country_code: string;
  image: string;
  continent_id: string;
}

interface ContinentProps {
  continent: Continent;
  cities: City[]
}

export default function Continent({ continent, cities }: ContinentProps) {
  const isLargeScreen = useBreakpointValue({
    base: false,
    lg: true
  })

  faker.seed(16)

  return (
    <Box mb={{ base: 8, lg: '75px' }}>
      <Head>
        <title>Wordtrip | {continent.name}</title>
      </Head>

      <Header />

      <Flex
        align="center"
        height={{ base: '150px', lg: '450px' }}
        overflow="hidden"
        justify="center"
      >
        <Image
          src={continent.image}
          style={{
            filter: "brightness(0.4)"
          }}
        />
        {!isLargeScreen && (
          <Heading
            fontSize="3xl"
            color={theme.colors.grey[100]}
            position="absolute"
            p="4"
          >
            {continent.name}
          </Heading>
        )}
      </Flex>
      <Box px="4">
        <Box
          mx="auto"
          maxW="1160"
          pt={{ base: 6, lg: '75px' }}
        >
          {isLargeScreen && (
            <Heading
              fontSize="5xl"
              color={theme.colors.grey[100]}
              transform="translateY(-180px)"
              position="absolute"
            >
              {continent.name}
            </Heading>
          )}
          <SimpleGrid spacing="24px" columns={{ lg: 2 }} mb={{ base: 6, lg: '75px' }}>
            <Text fontSize={{ base: 'sm', lg: 'x-large' }}>
              {faker.lorem.lines(8)}
            </Text>
            <Flex
              justify="space-around"
              align="center"
              textAlign="center"
            >
              <Box>
                <Text
                  fontSize={{ base: '2xl', lg: '5xl' }}
                  fontWeight="semibold"
                  color={theme.colors.yellow}
                >
                  {faker.datatype.number(99)}
                </Text>
                <Text
                  as="span"
                  fontSize={{ base: 'lg', lg: 'x-large' }}
                  fontWeight="semibold"
                >
                  {faker.lorem.word(5)}
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '2xl', lg: '5xl' }}
                  fontWeight="semibold"
                  color={theme.colors.yellow}
                >
                  {faker.datatype.number(99)}
                </Text>
                <Text
                  as="span"
                  fontSize={{ base: 'lg', lg: 'x-large' }}
                  fontWeight="semibold"
                >
                  {faker.lorem.word(5)}
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '2xl', lg: '5xl' }}
                  fontWeight="semibold"
                  color={theme.colors.yellow}
                >
                  {faker.datatype.number(99)}
                </Text>
                <Text
                  as="span"
                  fontSize={{ base: 'lg', lg: 'x-large' }}
                  fontWeight="semibold"
                >
                  {faker.lorem.word(5)}
                </Text>
                <Tooltip label={faker.lorem.sentence(5)}>
                  <InfoOutlineIcon
                    ml="8px"
                    mb="6px"
                    color={theme.colors.grey[500]}
                  />
                </Tooltip>
              </Box>
            </Flex>
          </SimpleGrid>
          <Heading as="h3" fontSize={{ base: '2xl', lg: '4xl' }} fontWeight="medium">
            Popular destinations
          </Heading>
          <SimpleGrid
            gridTemplateColumns={{ base: '16rem', md: 'repeat(auto-fit, minmax(16rem, 1fr))' }}
            spacingX={{ base: 5, lg: '45px' }}
            spacingY={{ base: 5, lg: 12 }}
            mt={{ base: 7, lg: "45px" }}
            justifyContent="center"
          >
            {cities.map(city => (
              <Box
                key={city.name}
                borderRadius="md"
                overflow="hidden"
                bgColor={theme.colors.white}
              >
                <Flex h="173px" align="center" justify="center" overflow="hidden">
                  <Image src={city.image} maxW="130%" />
                </Flex>
                <Flex p="6" justify="space-between" align="center">
                  <Box>
                    <Text
                      textTransform="capitalize"
                      fontWeight="semibold"
                      fontSize="xl"
                      mb={2}
                      fontFamily={theme.fonts.alternative}
                    >
                      {city.name}
                    </Text>
                    <Text
                      textTransform="capitalize"
                      color={theme.colors.grey[500]}
                      fontFamily={theme.fonts.alternative}
                      fontWeight="medium"
                      fontSize="md"
                    >
                      {city.country}
                    </Text>
                  </Box>
                  <Icon as={Flags[city.country_code]} w="8" h="8" borderRadius="full" />
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box >
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { continent: id } = params
  const { data: continent } = await api.get<Continent>(`continents/${id}`)
  const { data: cities } = await api.get<City[]>(`cities`, { params: { continent_id: id } })

  return {
    props: {
      continent,
      cities
    },
    revalidate: 60,
  }
}