import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import Theme from './styles/theme'
import { GlobalStyles } from './styles/global'
import { SystemProvider } from './context/system'
import { RouterProvider } from 'react-router-dom'
import { Routes } from "./routes"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SystemProvider>
      <ThemeProvider theme={Theme}>
        <RouterProvider router={Routes}/>
        <GlobalStyles/>
      </ThemeProvider>
    </SystemProvider>
  </React.StrictMode>,
)
