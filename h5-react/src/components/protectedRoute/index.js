/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-curly-spacing */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import { Navigate, useLocation } from 'react-router-dom';
import { message } from 'antd';

import authStore from '@stores/auth';
import documentStore from '@stores/document';

const ProtectedRoute = ({
  component,
  title,
}) => {
  const location = useLocation();

  useEffect(() => {
    document.title = `${process.env.REACT_APP_WEBSITE_TITLE}${title ? ` - ${title}` : ''}`;
    documentStore.setPageTitle(title);
  }, [title]);

  if (!authStore.isLoggedIn) {
    message.error('登录信息失效，请重新登录');
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return component;
};

ProtectedRoute.propTypes = {
  component: PropTypes.node.isRequired,
  title: PropTypes.string,
};

ProtectedRoute.defaultProps = {
  title: '',
};

export default observer(ProtectedRoute);
