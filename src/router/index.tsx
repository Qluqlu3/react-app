import React from 'react'

import { Outlet, createRoute, createRootRoute, createRouter } from '@tanstack/react-router'

import { App } from '../App'
import { About, NotFound, Home, Slate, Chakra, Csv } from '../pages'

const rootRoute = createRootRoute({
  component: () => (
    <>
      <App />
      <Outlet />
    </>
  ),
  notFoundComponent: () => <NotFound />,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Home />,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: () => <About />,
})

const slateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/slate',
  component: () => <Slate />,
})

const chakraRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/chakra',
  component: () => <Chakra />,
})

const csvRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/csv',
  component: () => <Csv />,
})

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, slateRoute, chakraRoute, csvRoute])

export const router = createRouter({ routeTree })
