import { Box, Flex, Image } from "@chakra-ui/react";


export function Header() {
  return (
    <Box px="3">
      <Flex
        as="header"
        align="center"
        justify="center"
        h="80px"
        maxW="1240"
        mx="auto"
      >
        <Image src="images/Logo.svg" alt="Worldtrip logo"></Image>
      </Flex>
    </Box>
  )
}