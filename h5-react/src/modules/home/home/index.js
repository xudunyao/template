import React from 'react';
import { Button, Typography, Space } from 'antd';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Home = () => (
  <Container>
    <Typography.Title level={5}>Home</Typography.Title>
    <Space>
      <Link to="/example/page1">
        <Button>page1</Button>
      </Link>
      <Link to="/example/page2">
        <Button>page2</Button>
      </Link>

    </Space>
  </Container>
);

export default Home;
