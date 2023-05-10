import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './header';
import { StyledLayout as Layout, StyledContent as Content } from './styles';

const DefaultLayout = () => (
  <Layout>
    <Header />
    <Content>
      <Outlet />
    </Content>
    {/* <Nav /> */}
  </Layout>
);

export default DefaultLayout;
