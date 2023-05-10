import styled from 'styled-components';
import { Layout } from 'antd';
import { colors } from '@/styles';

export const StyledLayout = styled(Layout)`
  height: 100vh;
  max-width: 750px;
  margin: 0 auto;
  background-color: ${colors.background};
`;

export const StyledHeader = styled(Layout.Header)`
  padding: 0;
  line-height: 44px;
  height: 44px;
  background-color: ${colors.transparent};
`;

export const StyledContent = styled(Layout.Content)`
  overflow: auto;
`;

export default {};
