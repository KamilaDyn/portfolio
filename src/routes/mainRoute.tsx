import { routes } from './index'
import { AboutMe, HomePage, MyProjects } from 'containers'

export interface RouteConfig {
  path: string
  element: JSX.Element
}
export const mainRoute = [
  {
    path: routes.home,
    element: <HomePage />,
  },
  {
    path: routes.about,
    element: <AboutMe />,
  },
  {
    path: routes.myProjects,
    element: <MyProjects />,
  },
  {
    path: '*',
    element: <HomePage />,
  },
]
