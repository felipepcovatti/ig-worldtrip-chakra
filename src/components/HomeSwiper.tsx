import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from 'next/link'

import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { theme } from "../styles/theme";
import faker from 'faker'

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

type Category = {
  id: number;
  image: string;
  name: string;
}

interface HomeSwiperProps {
  categories: Category[]
}

export function HomeSwiper({ categories }: HomeSwiperProps) {

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
          {categories.map(category => (
            <SwiperSlide key={category.id} style={{ height: 450 }}>
              <Image
                src={`/images/categories/${category.image}`}
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
                <Link href="/">
                  <a>
                    <Text
                      fontSize="xx-large"
                      textTransform="capitalize"
                    >
                      {category.name}
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