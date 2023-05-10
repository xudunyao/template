import React from 'react';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

const menus = [
  {
    title: '首页',
    key: 'home',
    link: '/',
  },
  {
    title: '微应用',
    key: 'micro',
    link: '/micro',
  },
];

const HeaderMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const authorizedMenus = menus;

  const selectedKey = authorizedMenus.find((m) => {
    if (m.link === '/') {
      return m.link === location?.pathname;
    }
    return location?.pathname?.indexOf(m.link) === 0;
  })?.key;

  return (
    <Menu
      mode="horizontal"
      className="menu"
      selectedKeys={[selectedKey]}
    >
      {
        authorizedMenus.map((m) => (
          <Menu.Item
            key={m.key}
            onClick={() => navigate(m.link)}
          >
            {m.title}
          </Menu.Item>
        ))
      }

    </Menu>
  );
};

export default HeaderMenu;
