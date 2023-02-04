import { PaletteMode } from '@mui/material'

import customBreakpoints from './breakpoints'
import palette from './palette'

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: palette.primaryLight,
          divider: '#fff',
          background: {
            default: palette.secondaryLight.main,
            paper: palette.secondaryLight.main,
          },
          text: {
            primary: palette.primaryLight.dark,
          },
        }
      : {
          primary: palette.primaryDark,
          // text: {
          //   primary: palette.primaryLight.main,
          // },
          background: {
            // default: '#282C35',
            default: palette.primaryDark.dark,
            paper: palette.primaryDark.dark,
          },
          text: { secondary: '#999' },
        }),
  },
  components: {
    mode,

    ...(mode === 'light'
      ? {
          MuiDivider: {
            styleOverrides: {
              root: {
                borderColor: palette.primaryLight.dark,
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                backgroundColor: palette.primaryLight.contrastText,
              },
            },
          },
        }
      : {
          MuiListItem: {
            styleOverrides: {
              root: {
                color: palette.primaryDark.contrastText,
              },
            },
          },
          MuiDivider: {
            styleOverrides: {
              root: {
                borderColor: palette.primaryDark.contrastText,
              },
            },
          },
          MuiTypography: {
            styleOverrides: {
              root: {
                color: '#fff',
              },
            },
          },
        }),
    MuiContainer: {
      styleOverrides: {
        root: {
          [customBreakpoints.breakpoints.up('lg')]: {
            maxWidth: 'unset',
          },
        },
      },
    },
  },
  breakpoints: customBreakpoints.breakpoints,
})
