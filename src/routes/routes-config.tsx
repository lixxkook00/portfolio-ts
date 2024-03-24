import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('../pages/home'));
const SecretSanta = lazy(() => import('../pages/secret-santa'));

const publicRoutesConfig: RouteObject = {
  path: '/',
  children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: '/secret-santa',
      element: <SecretSanta />
    },
  ]
};

export const routesConfig: RouteObject[] = [publicRoutesConfig];
