import { useMemo, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import { mainRoute } from 'routes/mainRoute'
import { ContextProvider, useContextProvider } from 'context'
import { ColorModeContext } from 'context/ColorContext'
import { Sidebar, Header, MobileMenu } from 'components'
import { getDesignTokens } from './customTheme'
import { StyledContainer } from './index.style'
import './App.css'

const App = () => {
  const routing = useRoutes(mainRoute)
  const { isMobile } = useContextProvider()
  const year = new Date().getFullYear()
  return (
    <>
      <StyledContainer className="App">
        {isMobile && <MobileMenu />}
        <Box display="flex" justifyContent={'space-between'} gap={3}>
          {!isMobile && <Sidebar />}
          <Box
            sx={{
              flex: 1,
              marginLeft: !isMobile ? '230px' : '0',
            }}
          >
            {!isMobile && <Header />} {routing}
          </Box>
        </Box>
      </StyledContainer>
      <Box sx={{ bgcolor: 'background.default', paddingY: 1, paddingRight: 3 }}>
        <Typography align="right" variant="subtitle2">
          {year} © All rights reserved.
        </Typography>
      </Box>
    </>
  )
}

export default function ToggleColorMode() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark')

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const themes = useMemo(() => createTheme(getDesignTokens(mode)), [mode])
  return (
    <ContextProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={themes}>
          <App />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ContextProvider>
  )
}
