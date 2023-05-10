import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar, Space, Dropdown, Menu,
} from 'antd';
import { UserOutlined } from '@ant-design/icons';

import {
  HeaderContainer,
} from './styles';

const Header = ({
  username,
  avatar,
  onLogout,
}) => (
  <HeaderContainer className="header">
    <Space>
      <Dropdown overlay={(
        <Menu>
          <Menu.Item key="logout" onClick={onLogout}>
            退出登录
          </Menu.Item>
        </Menu>
      )}
      >
        <Space>
          <span className="username">{username}</span>
          {
            avatar ? <Avatar size={30} src={avatar} /> : <Avatar size={30} icon={<UserOutlined />} />
          }
        </Space>
      </Dropdown>
    </Space>
  </HeaderContainer>
);

Header.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  onLogout: PropTypes.func,
};

Header.defaultProps = {
  avatar: '',
  onLogout: () => {},
};
export default Header;
