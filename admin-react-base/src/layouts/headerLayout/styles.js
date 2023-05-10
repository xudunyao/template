import styled from 'styled-components';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';

export const StyledLayout = styled(Layout)`
  height: 100vh;
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
  }
`;

export const Logo = styled(Link)`
  position: relative;
  display: block;
  height: 64px;
  width: 190px;
  h1 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    padding: 0 20px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  img + h1 {
    visibility: hidden;
  }
  img {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    max-width: 70%;
    max-height: 70%;
    background-color: #fff;
  }
`;

export const StyledHeader = styled(Layout.Header)`
  background-color: #fff;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  padding: 0 12px;
  .menu {
    flex: 1;
    margin-right: 50px;
  }
`;

export const StyledContent = styled(Layout.Content)`
  overflow: auto;
  #micro-frontend-container {
    #root {
      height: 100vh;
      margin-top: -64px;
      padding-top: 64px;
    }
  }
`;

export default {};
