import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import { routesConfig } from './routes-config'

const AppRoutes = () => {
  const routes = useRoutes(routesConfig)

  return <Suspense fallback={<p>Loading</p>}>{routes}</Suspense>
}

export default AppRoutes
