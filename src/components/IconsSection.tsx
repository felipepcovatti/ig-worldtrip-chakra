import { Box, Flex, Image, Text } from "@chakra-ui/react";
import faker from 'faker'

export function IconsSection() {

  faker.seed(32)

  return (
    <Box px="4">
      <Flex
        maxW="1160"
        mx="auto"
        mt="114px"
        justify="space-around"
      >
        {Array.from(Array(5).keys(), key => (
          <Box key={key + 1}>
            <Image src={`images/icons/icon-${key + 1}.svg`} mx="auto" />
            <Text
              textAlign="center"
              fontWeight="semibold"
              mt="3"
              fontSize="x-large"
            >
              {faker.lorem.word()}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  )
}