import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import NextImage from 'next/image';
import { theme } from "../styles/theme";
import faker from 'faker'

export function HomeBanner() {
  const isLargeScreen = useBreakpointValue({
    base: false,
    lg: true
  })

  faker.seed(24)

  return (
    <Box
      bgImg="url(/images/home-banner.jpeg)"
      px="4"
    >
      <Flex
        mx="auto"
        maxW="1160"
        minHeight={{ base: '163px', lg: '335px' }}
        align="center"
        justify="space-between"
        py="3"
      >
        <Box maxW={{ lg: '500px' }}>
          <Text
            fontSize={{ base: 'xl', lg: '4xl' }}
            color={theme.colors.grey[100]}
            fontWeight="medium"
          >
            {faker.lorem.sentence(4)}
          </Text>
          <Text
            mt="4"
            fontSize={{ base: 'sm', lg: 'xl' }}
            color={theme.colors.grey[300]}
          >
            {faker.lorem.sentence(12)}
          </Text>
        </Box>
        {isLargeScreen && (
          <Box position="relative" top="14" >
            <NextImage src="/images/Airplane.svg" height={293} width={431} />
          </Box>
        )}
      </Flex>
    </Box>
  )
}