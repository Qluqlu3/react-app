import React from 'react'

import { Outlet, createRootRoute, createRoute, createRouter } from '@tanstack/react-router'

import { App } from '../App'
import { List } from '../components'
import { Navigation } from '../layout'
import { About, Chakra, Csv, Home, NotFound, Slate, Video } from '../pages'

const rootRoute = createRootRoute({
  component: () => (
    <>
      <div className='flex h-dvh w-full flex-row'>
        <Navigation />
        <div className='flex w-full flex-col px-4 py-3'>
          <App />
          <Outlet />
        </div>
      </div>
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

const videoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/video',
  component: () => <Video />,
})

const listRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/list',
  component: () => <List />,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  slateRoute,
  chakraRoute,
  csvRoute,
  videoRoute,
  listRoute,
])

export const router = createRouter({ routeTree })
