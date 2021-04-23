import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from 'next/link'

type Slide = {
  id: number;
  image: string
}

interface HomeSwiperProps {
  slides: Slide[]
}


import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { theme } from "../styles/theme";
import faker from 'faker'

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

export function HomeSwiper({ slides }: HomeSwiperProps) {
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
          {slides.map(slide => (
            <SwiperSlide key={slide.id} style={{ height: 450 }}>
              <Image
                src={`/images/slides/${slide.image}`}
                style={{
                  filter: "brightness(0.4)"
                }}
              />
              <Box
                pos="absolute"
                w="100%"
                textAlign="center"
                color={theme.colors.white}
                fontSize="xx-large"
                fontWeight="bold"
              >
                <Link href="/">
                  <a>
                  <Text
                    fontSize="xx-large"
                    textTransform="capitalize"
                  >
                    {faker.lorem.words(2)}
                  </Text>
                  <Text
                    fontSize="large"
                  >
                    {faker.lorem.sentence(3)}
                  </Text>
                  </a>
                </Link>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  )
}