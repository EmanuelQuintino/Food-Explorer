import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home'
import { ThemeProvider } from 'styled-components'
import Theme from './styles/theme'
import { GlobalStyles } from './styles/global'
import { SystemProvider } from './context/system'
import { SignIn } from './pages/SignIn'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SystemProvider>
      <ThemeProvider theme={Theme}>
        <SignIn/>
        <Home />
        <GlobalStyles/>
      </ThemeProvider>
    </SystemProvider>
  </React.StrictMode>,
)
