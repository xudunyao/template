import styled from 'styled-components';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

import { colors } from '@/styles';

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Title = styled(Typography.Title).attrs({ level: 1 })`
  flex:1;
  margin-bottom: 0 !important;
  text-align: center;
  font-size: 18px !important;
  font-weight: 500 !important;
  color: ${colors.primaryBlack} !important;
`;

export const BackButton = styled.a`
  position: absolute;
  left: 0;
  height: 100%;
  padding: 0 16px;
`;

export default {};
