import React from 'react';
import { observer } from 'mobx-react-lite';
import Cookies from 'js-cookie';

import authStore from '@stores/auth';
import { Header as MyHeader } from '@/components';
import { storageKeys } from '@/constants';
import { StyledHeader } from './styles';
import BreadCrumb from './breadcrumb';

const Header = () => {
  const handleLogout = () => {
    authStore.clearlogInfo();
    Cookies.remove(storageKeys.token);
    Cookies.remove(storageKeys.username);
  };
  return (
    <StyledHeader>
      <BreadCrumb />
      <MyHeader username={authStore.profile?.username} avatar={authStore.profile?.avatar} onLogout={handleLogout} />
    </StyledHeader>
  );
};

export default observer(Header);
