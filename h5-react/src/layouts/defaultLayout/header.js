import React from 'react';
import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router-dom';

import documentStore from '@stores/document';
import { Header as MyHeader } from '@/components';
import { StyledHeader } from './styles';

const Header = () => {
  const location = useLocation();
  return (
    <StyledHeader>
      <MyHeader backButtonVisible={location.pathname !== '/'} title={documentStore.pageTitle} />
    </StyledHeader>
  );
};

export default observer(Header);
