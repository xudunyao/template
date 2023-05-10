import React, { lazy } from 'react';

import { DefaultLayout, SiderLayout } from '@layouts';

import appRoutes from './appRoutes';

const Login = lazy(() => import('@modules/login'));
const NotFound = lazy(() => import('@modules/error/notFound'));

export default [
  {
    path: '/',
    // eslint-disable-next-line no-underscore-dangle
    element: window.__POWERED_BY_QIANKUN__ ? <SiderLayout /> : <DefaultLayout />,
    children: appRoutes,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
