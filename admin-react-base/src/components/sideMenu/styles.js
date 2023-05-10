import styled from 'styled-components';
import { Menu } from 'antd';

export const StyledMenu = styled(Menu)`
  &.ant-menu-inline-collapsed {
    .ant-menu-item, .ant-menu-submenu-title {
      height: 60px;
      line-height: 1.5;
      .ant-menu-title-content {
        position: absolute;
        bottom: 10px;
        left: -10px;
        width: 100%;
        text-align: center;
        opacity: 1 !important;
      }
    }
  }
`;

export default {};
