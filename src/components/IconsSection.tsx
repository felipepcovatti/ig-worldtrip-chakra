import { Box, Flex, Icon, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import faker from 'faker'
import { FaCircle } from 'react-icons/fa'
import { theme } from "../styles/theme";

export function IconsSection() {
  const isLargeScreen = useBreakpointValue({
    base: false,
    lg: true
  })

  faker.seed(32)

  return (
    <Box px="4">
      <Flex
        maxW="1160"
        mx="auto"
        mt={{ base: 8, lg: '114px' }}
        justify="space-around"
        wrap="wrap"
      >
        {Array.from(Array(5).keys(), key => (
          <Flex
            key={key + 1}
            justify="center"
            align="center"
            direction={{ lg: 'column' }}
            px="5"
            minWidth={{ base: '40%', lg: 'auto' }}
            my={{ base: 2, lg: 0 }}
          >
            {isLargeScreen
              ? (<Image src={`images/icons/icon-${key + 1}.svg`} mb="5" />)
              : (<Icon as={FaCircle} color={theme.colors.yellow} mr="3" />)
            }
            <Text
              as="span"
              fontWeight="semibold"
              fontSize={{ base: 'large', lg: 'x-large' }}
            >
              {faker.lorem.word()}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  )
}