import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: 'Poppins',
    heading: 'Poppins',
    alternative: 'Barlow'
  },
  colors: {
    yellow: '#FFBA08',
    grey: {
      100: '#F5F8FA',
      300: '#DADADA',
      500: '#999999',
      700: '#47585B',
    },
    black: '#000000',
    white: '#FFFFFF'
  },
  styles: {
    global: {
      body: {
        color: 'grey.700',
        backgroundColor: 'grey.100'
      },
    }
  }
})