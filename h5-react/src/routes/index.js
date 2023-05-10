import React, { lazy } from 'react';

import { DefaultLayout } from '@/layouts';

import appRoutes from './appRoutes';

const NotFound = lazy(() => import('@modules/error/notFound'));

export default [
  {
    path: '/',
    element: <DefaultLayout />,
    children: appRoutes,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
