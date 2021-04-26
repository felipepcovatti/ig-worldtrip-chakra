import { Box, Flex, Heading, Icon, Image, SimpleGrid, Text, Tooltip } from "@chakra-ui/react";
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

  faker.seed(16)

  return (
    <Box mb="75px">
      <Head>
        <title>Wordtrip | {continent.name}</title>
      </Head>

      <Header />

      <Flex
        align="center"
        height="450px"
        overflow="hidden"
      >
        <Image
          src={continent.image}
          style={{
            filter: "brightness(0.4)"
          }}
        />
      </Flex>
      <Box
        mx="auto"
        maxW="1160"
        pt="75px"
      >
        <Heading
          fontSize="xx-large"
          color={theme.colors.white}
          transform="translateY(-150px)"
          position="absolute"
        >
          {continent.name}
        </Heading>
        <SimpleGrid spacing="50px" columns={2} mb="75px">
          <Text>
            {faker.lorem.lines(11)}
          </Text>
          <Flex
            justify="space-around"
            textAlign="center"
          >
            <Box>
              <Text
                fontSize="5xl"
                fontWeight="semibold"
                color={theme.colors.yellow}
              >
                {faker.datatype.number(99)}
              </Text>
              <Text
                as="span"
                fontSize="larger"
                fontWeight="semibold"
                color={theme.colors.gray[600]}
              >
                {faker.lorem.word(5)}
              </Text>
            </Box>
            <Box>
              <Text
                fontSize="5xl"
                fontWeight="semibold"
                color={theme.colors.yellow}
              >
                {faker.datatype.number(99)}
              </Text>
              <Text
                as="span"
                fontSize="larger"
                fontWeight="semibold"
                color={theme.colors.gray[600]}
              >
                {faker.lorem.word(5)}
              </Text>
            </Box>
            <Box>
              <Text
                fontSize="5xl"
                fontWeight="semibold"
                color={theme.colors.yellow}
              >
                {faker.datatype.number(99)}
              </Text>
              <Text
                as="span"
                fontSize="larger"
                fontWeight="semibold"
                color={theme.colors.gray[600]}
              >
                {faker.lorem.word(5)}
              </Text>
              <Tooltip label={faker.lorem.sentence(5)}>
                <InfoOutlineIcon ml="6px" mb="2px" color={theme.colors.gray[500]} />
              </Tooltip>
            </Box>
          </Flex>
        </SimpleGrid>
        <Heading as="h3" fontSize="3xl" fontWeight="semibold">
          Popular destinations
        </Heading>
        <SimpleGrid spacing="50px" columns={4} mt="45px">
          {cities.map(city => (
            <Box
              key={city.name}
              borderRadius="md"
              overflow="hidden"
              bgColor={theme.colors.white}
            >
              <Flex h="160px" align="center" justify="center" overflow="hidden">
                <Image src={city.image} w="130%" />
              </Flex>
              <Flex p={5} justify="space-between" align="center">
                <Box>
                  <Text textTransform="capitalize" fontWeight="semibold" fontSize="lg" mb={2}>
                    {city.name}
                  </Text>
                  <Text textTransform="capitalize">
                    {city.country}
                  </Text>
                </Box>
                <Icon as={Flags[city.country_code]} w="8" h="8" borderRadius="full" />
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
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