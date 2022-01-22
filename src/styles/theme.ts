
import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: {
    'html, body': {
      background: '#F5F8FA',
    }
  }
}

const colors = {
  gray: {
    900: '#47585B',
    700: '#999999',
    300: '#DADADA',
    100: '#F5F8FA',
  },
  yellow: '#FFBA08',
}

const fonts = {
  heading: 'Poppins',
  body: 'Poppins',
}

const breakpoints = {
  sm: "375px",
  md: "715px",
  ls: "900px",
}

export const theme = extendTheme({ styles, colors, fonts, breakpoints })

