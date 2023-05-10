import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

const MySuspense = ({ children }) => (
  <Suspense
    fallback={(
      <Spin
        spinning
        tip="页面加载中……"
        style={{ margin: '50px' }}
      />
    )}
  >
    {children}
  </Suspense>
);

MySuspense.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MySuspense;
