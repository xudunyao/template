import React, { lazy } from 'react';

import { HeaderLayout, SiderLayout } from '@/layouts';
import { Suspense } from '@/components';

import appRoutes from './appRoutes';

const Login = lazy(() => import('@modules/login'));
const NotFound = lazy(() => import('@modules/error/notFound'));

// eslint-disable-next-line import/no-dynamic-require
const microApps = require(`@/microApps/${process.env.REACT_APP_ENV_NAME}`);

const microRoutes = microApps.default.map((m) => ({
  path: `/${m.path}/*`,
  element: <div id="micro-frontend-container" />,
}));

export default [
  {
    path: '/',
    element: <HeaderLayout />,
    children: [
      {
        path: '',
        element: <SiderLayout />,
        children: appRoutes,
      },
      ...microRoutes,
    ],
  },
  {
    path: '/login',
    element: <Suspense><Login /></Suspense>,
  },
  {
    path: '*',
    element: <Suspense><NotFound /></Suspense>,
  },
];
