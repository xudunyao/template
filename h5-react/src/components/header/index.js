import React from 'react';
import PropTypes from 'prop-types';
import * as Icon from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import {
  HeaderContainer,
  Title,
  BackButton,
} from './styles';

const Header = ({
  title,
  backButtonVisible,
}) => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      {backButtonVisible && (
        <BackButton onClick={() => navigate(-1)}>
          <Icon.LeftOutlined />
        </BackButton>
      )}
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  backButtonVisible: PropTypes.bool,
};

Header.defaultProps = {
  backButtonVisible: true,
};
export default Header;
