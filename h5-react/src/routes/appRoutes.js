import React, { lazy } from 'react';
import example from '@modules/example';
import dashboard from '@/modules/home';

const NotAuthorized = lazy(() => import('@modules/error/notAuthorized'));

export default [
  dashboard,
  example,
  {
    path: 'not-authorized',
    element: <NotAuthorized />,
  },
];
