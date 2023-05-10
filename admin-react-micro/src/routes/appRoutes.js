import React, { lazy } from 'react';
import example from '@modules/example';
import dashboard from '@modules/dashboard';
import { Suspense } from '@/components';

const NotAuthorized = lazy(() => import('@modules/error/notAuthorized'));

export default [
  dashboard,
  example,
  {
    path: 'not-authorized',
    element: <Suspense><NotAuthorized /></Suspense>,
  },
];
