import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useLocation, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { SideMenu } from '@/components';
import authStore from '@/stores/auth';
import appRoutes from '@/routes/appRoutes';
import { StyledLayout as Layout, Logo, MenuCollapsedButton } from './styles';
import {
  getMenusFromRoutes,
} from './utils';

const MENU_COLLAPSED_KEY = 'menu-collapsed';

const Sider = () => {
  const location = useLocation();
  const params = useParams();
  const [collapsed, setCollapsed] = useState(localStorage.getItem(MENU_COLLAPSED_KEY) === 'true');

  let staticPath = location.pathname;
  if (params) {
    Object.keys(params).forEach((key) => {
      staticPath = staticPath.replace(params[key], `:${key}`);
    });
  }

  const { menus, currentMenuKeys } = getMenusFromRoutes(appRoutes || [], authStore.permissions, staticPath);

  const toggleCollapsed = () => {
    localStorage.setItem(MENU_COLLAPSED_KEY, !collapsed);
    setCollapsed(!collapsed);
  };

  return (
    <Layout.Sider collapsed={collapsed} theme="light">
      <div className="menu">
        <SideMenu
          menus={menus}
          selectedKeys={currentMenuKeys}
          defaultOpenKeys={collapsed ? [] : currentMenuKeys}
        />
      </div>
      <MenuCollapsedButton
        type="text"
        onClick={toggleCollapsed}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </MenuCollapsedButton>
    </Layout.Sider>
  );
};

export default observer(Sider);
