import type { RouteDefinition } from '@solidjs/router'
import { lazy } from 'solid-js'

import Layout from '~/layouts/Layout'

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        component: lazy(() => import('~/pages/index')),
      },
    ],
  },
  {
    path: '/about',
    component: Layout,
    children: [
      {
        path: '',
        component: lazy(() => import('~/pages/about')),
      },
    ],
  },
  {
    path: '*',
    component: lazy(() => import('~/pages/404.tsx')),
  },
]
