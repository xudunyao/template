import React, { lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { ProtectedRoute } from '@components';

const ExamplePage2 = lazy(() => import('./examplePage2'));
const ExamplePage1 = lazy(() => import('./examplePage1'));

export default {
  path: 'example',
  element: <Outlet />,
  children: [
    {
      path: 'page1',
      element: <ProtectedRoute title="page1" component={<ExamplePage1 />} />,
    },
    {
      path: 'page2',
      element: <ProtectedRoute title="page2" component={<ExamplePage2 />} />,
    },
  ],
};
