import { RouterProvider, useLocation } from 'react-router-dom'
import routes from './routes/routes'

import { AnimatePresence } from 'framer-motion'

function App() { 
  return (
    <>
      <AnimatePresence>
        <RouterProvider key={routes.pathname} router={routes}  />
        </AnimatePresence>
    </>
  )
}

export default App
