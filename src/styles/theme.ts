import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        color: 'gray.700'
      }
    }
  }
})