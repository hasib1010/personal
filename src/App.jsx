import { RouterProvider, useLocation } from 'react-router-dom'
import routes from './routes/routes'

import { AnimatePresence } from 'framer-motion'
import FiverrWidget from './components/FiverrWidget/FiverrWidget'

function App() {
  return (
    <>
      <AnimatePresence>
        <RouterProvider key={routes.pathname} router={routes} />
        <FiverrWidget/>
      </AnimatePresence>
    </>
  )
}

export default App
