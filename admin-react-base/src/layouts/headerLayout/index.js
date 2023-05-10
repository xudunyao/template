import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './header';
import { StyledLayout as Layout, StyledContent as Content } from './styles';

const HeaderLayout = () => (
  <Layout>
    <Header />
    <Content>
      <Outlet />
    </Content>
  </Layout>
);

export default HeaderLayout;
