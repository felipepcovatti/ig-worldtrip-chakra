import { Box, Flex, Image, IconButton, Icon } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { FiChevronLeft } from 'react-icons/fi'

export function Header() {
  const { asPath, back } = useRouter()

  return (
    <Box px="4">
      <Flex
        as="header"
        align="center"
        justify="center"
        h={{ base: '50px', lg: '100px' }}
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
            h={{ base: '4', lg: '8' }}
            minW={{ base: '4', lg: '8' }}
            icon={<Icon as={FiChevronLeft} fontSize={{ lg: "xx-large" }} />}
          />
        )}
        <Link href="/">
          <a>
            <Image
              src="images/Logo.svg"
              alt="Worldtrip logo"
              w={{ base: '81px', lg: 'auto' }}
            ></Image>
          </a>
        </Link>
      </Flex>
    </Box>
  )
}