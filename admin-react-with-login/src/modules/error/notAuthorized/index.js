import React from 'react';
import {
  Empty,
} from 'antd';

const NotAuthorized = () => (
  <Empty description="暂无当前页面访问权限，请联系管理员开通" style={{ marginTop: 100 }} />
);

export default NotAuthorized;
