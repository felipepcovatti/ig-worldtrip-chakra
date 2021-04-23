import { Box, Flex, Image, Text } from "@chakra-ui/react";
import faker from 'faker'

type Icon = {
  id: number;
  name: string;
  image: string;
}

const icons: Icon[] = Array.from(Array(5).keys(), key => {
  const name = faker.lorem.word()
  const image = `icon-${key + 1}.svg`
  const id = key + 1;

  return {
    id,
    name,
    image
  }
})

export function IconsSection() {

  return (
    <Box px="3">
      <Flex
        maxW="1160"
        mx="auto"
        mt={20}
        justify="space-around"
      >
        {icons.map(icon => (
          <Box key={icon.name}>
            <Image src={`/images/icons/${icon.image}`} mx="auto" />
            <Text
              textAlign="center"
              fontWeight="medium"
              mt="3"
              fontSize="lg"
            >
              {icon.name}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  )
}