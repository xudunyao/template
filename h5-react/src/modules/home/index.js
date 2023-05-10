import React from 'react';
import { DashboardOutlined } from '@ant-design/icons';
import { ProtectedRoute } from '@/components';
import Home from './home';

export default {
  index: true,
  element: <ProtectedRoute title="首页" component={<Home />} />,
  options: {
    title: '首页',
    key: 'home',
    icon: <DashboardOutlined />,
    link: '/',
  },
};
