import styled from 'styled-components';
import { Layout, Button, Breadcrumb } from 'antd';

export const StyledLayout = styled(Layout)`
  height: 100%;
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
  }
  .menu {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    .ant-menu-item-selected {
      background-color: transparent;
      &:after {
        display: none;
      }
    }
  }
`;

export const MenuCollapsedButton = styled(Button)`
  height: 64px;
  font-size: 18px;
  &:hover, &:focus {
    background-color: transparent;
  }
  &:hover {
    color: #1890ff;
  }
`;

export const StyledContent = styled(Layout.Content)`
  overflow: auto;
  padding: 12px 12px 0;
  #micro-frontend-container {
    margin: -12px;
  }
`;

export const StyledBreadcrumb = styled(Breadcrumb)`
  padding: 12px;
  background-color: #fff;
`;

export default {};
