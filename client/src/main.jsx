import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import Theme from './styles/theme'
import { GlobalStyles } from './styles/global'
import { SystemProvider } from './context/system'
import { Routes } from "./routes"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SystemProvider>
      <ThemeProvider theme={Theme}>
        <Routes/>
        <GlobalStyles/>
      </ThemeProvider>
    </SystemProvider>
  </React.StrictMode>,
)
