import React from 'react';
import { observer } from 'mobx-react-lite';
import Cookies from 'js-cookie';

import authStore from '@stores/auth';
import { urlHandler } from '@/utils';
import { Header as MyHeader } from '@/components';
import Menu from './menu';
import { StyledHeader, Logo } from './styles';

const Header = () => {
  const handleLogout = () => {
    authStore.clearlogInfo();
    Cookies.remove('token');
    Cookies.remove('userName');
  };

  return (
    <StyledHeader>
      <Logo to="/">
        <img src={process.env.REACT_APP_BRAND_URL} alt={process.env.REACT_APP_WEBSITE_TITLE} />
        <h1>{ process.env.REACT_APP_WEBSITE_TITLE }</h1>
      </Logo>
      <Menu />
      <MyHeader
        username={authStore.profile?.username}
        avatar={authStore.profile?.avatar}
        onLogout={handleLogout}
      />
    </StyledHeader>
  );
};

export default observer(Header);
