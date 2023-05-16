import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import Theme from './styles/theme'
import { GlobalStyles } from './styles/global'
import { SystemProvider } from './hooks/useSystem'
import { Routes } from "./routes"
import { AuthProvider } from './hooks/useAuth'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <SystemProvider>
        <AuthProvider>
          <ThemeProvider theme={Theme}>
            <Routes />
            <GlobalStyles />
          </ThemeProvider>
        </AuthProvider>
      </SystemProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
