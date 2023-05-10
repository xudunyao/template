import React from 'react';
import { Outlet } from 'react-router-dom';

import Breadcrumb from './breadcrumb';
import Sider from './sider';
import { StyledLayout as Layout, StyledContent as Content } from './styles';

const DefaultLayout = () => (
  <Layout>
    <Sider />
    <Layout>
      <Breadcrumb />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  </Layout>
);

export default DefaultLayout;
