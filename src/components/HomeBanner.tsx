import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import faker from 'faker'

export function HomeBanner() {

  faker.seed(24)

  return (
    <Box
      bgImg="url(/images/home-banner.jpeg)"
      px="3"
    >
      <Flex
        mx="auto"
        maxW="1160"
        height="360px"
        align="center"
        justify="space-between"
      >
        <Box maxW="400px">
          <Text
            fontSize="4xl"
            color={theme.colors.grey[100]}
            fontWeight="medium"
          >
            {faker.lorem.sentence(4)}
          </Text>
          <Text mt="4" fontSize="xl" color={theme.colors.grey[300]}>
            {faker.lorem.sentence(12)}
          </Text>
        </Box>
          <Image src="/images/Airplane.svg" position="relative" top="70px" />
      </Flex>
    </Box>
  )
}