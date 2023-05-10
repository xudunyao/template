import React, { lazy } from 'react';
import { Outlet } from 'react-router-dom';
import * as Icon from '@ant-design/icons';
import { ProtectedRoute, Suspense } from '@components';

const Table = lazy(() => import('./table'));
const Form = lazy(() => import('./form'));

export default {
  path: 'example',
  element: <Outlet />,
  options: {
    title: 'Example',
    permissionKey: 'example',
    key: 'example',
    icon: <Icon.AppstoreOutlined />,
    link: '/example',
    allowAccess: true,
  },
  children: [
    {
      path: 'form',
      element: <ProtectedRoute allowAccess permissionKey="example-form" title="Form" component={<Suspense><Form /></Suspense>} />,
      options: {
        title: 'Form',
        key: 'example-form',
        icon: null,
        link: '/example/form',
        allowAccess: true,
      },
    },
    {
      path: 'table',
      element: <ProtectedRoute permissionKey="example-table" title="Table" allowAccess component={<Suspense><Table /></Suspense>} />,
      options: {
        title: 'Table',
        key: 'example-table',
        icon: null,
        link: '/example/table',
      },
    },
  ],
};
