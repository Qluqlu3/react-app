import { Outlet, createRoute, createRootRoute, createRouter } from '@tanstack/react-router';

import { App } from '../App';
import { About, NotFound, Home } from '../pages';

const rootRoute = createRootRoute({
  component: () => (
    <>
      <App />
      <Outlet />
    </>
  ),
  notFoundComponent: () => <NotFound />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Home />,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: () => <About />,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
