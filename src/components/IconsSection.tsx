import { Box, Flex, Image, Text } from "@chakra-ui/react";
import faker from 'faker'

export function IconsSection() {

  faker.seed(32)

  return (
    <Box px="3">
      <Flex
        maxW="1160"
        mx="auto"
        mt={20}
        justify="space-around"
      >
        {Array.from(Array(5).keys(), key => (
          <Box key={key + 1}>
            <Image src={`images/icons/icon-${key + 1}.svg`} mx="auto" />
            <Text
              textAlign="center"
              fontWeight="medium"
              mt="3"
              fontSize="lg"
            >
              {faker.lorem.word()}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  )
}