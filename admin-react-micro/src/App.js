/* eslint-disable no-underscore-dangle */
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router, useRoutes,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ConfigProvider } from 'antd';
import { StyleSheetManager } from 'styled-components';
import routes from './routes';

import './App.less';

const queryClient = new QueryClient();

const MyRouter = () => {
  const element = useRoutes(routes);
  return element;
};

const defaultBasename = process.env.NODE_ENV === 'development' ? '/' : `/${process.env.REACT_APP_NAME}`;

const App = ({ basename }) => (
  <ConfigProvider prefixCls={process.env.REACT_APP_NAME} locale="zh-cn">
    <QueryClientProvider client={queryClient}>
      <StyleSheetManager disableCSSOMInjection>
        <Router basename={window.__POWERED_BY_QIANKUN__ ? basename : defaultBasename}>
          <Suspense fallback={<div>Loading...</div>}>
            <MyRouter />
          </Suspense>
        </Router>
      </StyleSheetManager>
    </QueryClientProvider>
  </ConfigProvider>
);

App.propTypes = {
  basename: PropTypes.string.isRequired,
};

export default App;
