import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: 'Poppins',
  },
  colors: {
    yellow: '#FFBA08'
  },
  styles: {
    global: {
      body: {
        color: 'gray.600',
        backgroundColor: '#F5F8FA'
      }
    }
  }
})