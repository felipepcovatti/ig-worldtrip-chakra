import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from 'next/link'

import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { theme } from "../styles/theme";
import faker from 'faker'

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

type Continent = {
  id: string;
  image: string;
  name: string;
}

interface HomeSwiperProps {
  slides: Continent[]
}

export function HomeSwiper({ slides: continents }: HomeSwiperProps) {

  faker.seed(40)

  return (
    <Box px="4">
      <Box
        maxW="1160"
        mx="auto"
      >
        <Swiper
          spaceBetween={0}
          navigation
          pagination={{ clickable: true }}
        >
          {continents.map(continent => (
            <SwiperSlide key={continent.id} style={{ height: 450 }}>
              <Image
                src={continent.image}
                style={{
                  filter: "brightness(0.4)"
                }}
              />
              <Flex
                pos="absolute"
                textAlign="center"
                width="100%"
                justify="center"
              >
                <Link href={`/${continent.id}`}>
                  <a>
                    <Text
                      fontSize="5xl"
                      fontWeight="bold"
                      textTransform="capitalize"
                      color={theme.colors.grey[100]}
                    >
                      {continent.name}
                    </Text>
                    <Text
                      fontSize="x-large"
                      fontWeight="bold"
                      color={theme.colors.grey[300]}
                    >
                      {faker.lorem.sentence(3)}
                    </Text>
                  </a>
                </Link>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  )
}