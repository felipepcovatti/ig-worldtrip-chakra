import { Box, Flex, Image, Text } from "@chakra-ui/react";
import faker from 'faker'

interface IconsSectionProps {
  icons: string[]
}

export function IconsSection({ icons }: IconsSectionProps) {
  return (
    <Box px="3">
      <Flex
        maxW="1160"
        mx="auto"
        mt={20}
        justify="space-around"
      >
        {icons.map(icon => (
          <Box key={icon}>
            <Image src={`/images/icons/${icon}.svg`} mx="auto" />
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