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
          fontSize="5xl"
          color={theme.colors.grey[100]}
          transform="translateY(-180px)"
          position="absolute"
        >
          {continent.name}
        </Heading>
        <SimpleGrid spacing="24px" columns={2} mb="75px">
          <Text fontSize="x-large">
            {faker.lorem.lines(8)}
          </Text>
          <Flex
            justify="space-around"
            align="center"
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
                fontSize="x-large"
                fontWeight="semibold"
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
                fontSize="x-large"
                fontWeight="semibold"
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
                fontSize="x-large"
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
        <Heading as="h3" fontSize="4xl" fontWeight="medium">
          Popular destinations
        </Heading>
        <SimpleGrid spacing="48px 45px" columns={4} mt="45px">
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