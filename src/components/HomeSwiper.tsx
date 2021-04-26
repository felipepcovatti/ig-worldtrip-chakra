import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from 'next/link'

import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { theme } from "../styles/theme";
import faker from 'faker'

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

type Continent = {
  id: number;
  image: string;
  name: string;
}

interface HomeSwiperProps {
  slides: Continent[]
}

export function HomeSwiper({ slides: continents }: HomeSwiperProps) {
  return (
    <Box px="3">
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
                color={theme.colors.white}
                fontSize="xx-large"
                fontWeight="bold"
              >
                <Link href={`/${continent.id}`}>
                  <a>
                    <Text
                      fontSize="xx-large"
                      textTransform="capitalize"
                    >
                      {continent.name}
                    </Text>
                    <Text
                      fontSize="large"
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