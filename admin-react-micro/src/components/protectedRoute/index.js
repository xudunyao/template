/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-curly-spacing */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import { Navigate, useLocation } from 'react-router-dom';

import authStore from '@stores/auth';
import documentStore from '@stores/document';

const ProtectedRoute = ({
  component,
  permissionKey,
  allowAccess,
  title,
}) => {
  const location = useLocation();

  useEffect(() => {
    document.title = `${process.env.REACT_APP_WEBSITE_TITLE}${title ? ` - ${title}` : ''}`;
    documentStore.setPageTitle(title);
  }, [title]);

  if (!authStore.isLoggedIn) {
    if (
      // eslint-disable-next-line no-underscore-dangle
      !window.__POWERED_BY_QIANKUN__
      && process.env.NODE_ENV === 'development'
      && process.env.REACT_APP_LOCAL_LOGIN === 'true') {
      // 该条件仅在本地开发环境生效
      return <Navigate to="/login" state={{ from: location }} />;
    }
    window.location.href = `/login?from=${encodeURIComponent(window.location.href)}`;
    return null;
  }

  const isAuthorized = authStore.isAdmin || allowAccess || authStore.permissions?.includes(permissionKey);
  if (!isAuthorized) {
    return <Navigate to="/not-authorized" state={{ from: location }} />;
  }

  return component;
};

ProtectedRoute.propTypes = {
  component: PropTypes.node.isRequired,
  permissionKey: PropTypes.string.isRequired,
  title: PropTypes.string,
  allowAccess: PropTypes.bool,
};

ProtectedRoute.defaultProps = {
  title: '',
  allowAccess: false,
};

export default observer(ProtectedRoute);
