import { Box, Flex, Image } from "@chakra-ui/react";


export function Header() {
  return (
    <Box px="3">
      <Flex
        as="header"
        align="center"
        justify="center"
        h="96px"
        maxW="1160"
        mx="auto"
      >
        <Image src="images/Logo.svg" alt="Worldtrip logo"></Image>
      </Flex>
    </Box>
  )
}