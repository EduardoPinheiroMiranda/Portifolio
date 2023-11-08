import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import themes from './style/Themes'
import Global from './style/Global'

import { Home } from './Page/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <Global/>
      <Home/>
    </ThemeProvider>

    
  </React.StrictMode>
)
