import { createTheme } from '@mui/material'

const customBreakpoints = createTheme({
  breakpoints: {
    values: {
      xs: 600,
      sm: 900,
      md: 1350,
      lg: 1700,
      xl: 1800,
    },
  },
})

export default customBreakpoints
