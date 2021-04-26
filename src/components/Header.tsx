import { Box, Flex, Image, IconButton, Icon } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { FiChevronLeft } from 'react-icons/fi'


export function Header() {
  const { asPath, back } = useRouter()

  return (
    <Box px="3">
      <Flex
        as="header"
        align="center"
        justify="center"
        h="96px"
        maxW="1160"
        mx="auto"
        pos="relative"
      >
        {asPath !== '/' && (
          <IconButton
            position="absolute"
            left={0}
            aria-label="Back"
            bg="transparent"
            _hover={{ bg: 'transparent' }}
            onClick={() => back()}
            icon={<Icon as={FiChevronLeft} fontSize="xx-large" />}
          />
        )}
        <Link href="/">
          <a>
            <Image src="images/Logo.svg" alt="Worldtrip logo"></Image>
          </a>
        </Link>
      </Flex>
    </Box>
  )
}