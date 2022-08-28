import React, {lazy} from 'react'
import { createRoot } from 'react-dom/client'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const App = lazy(() => import(
  /* webpackChunkName: '../home/app' */
  './App'
))

const root = createRoot(document.getElementById('root'))
root.render(<App />)
