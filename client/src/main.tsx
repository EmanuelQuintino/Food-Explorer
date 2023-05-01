import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import Theme from './styles/theme'
import { GlobalStyles } from './styles/global'
import { SystemProvider } from './hooks/system'
import { Routes } from "./routes"
import { AuthProvider } from './hooks/auth'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SystemProvider>
      <AuthProvider>
        <ThemeProvider theme={Theme}>
          <Routes />
          <GlobalStyles />
        </ThemeProvider>
      </AuthProvider>
    </SystemProvider>
  </React.StrictMode>,
)
