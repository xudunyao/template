import React, { useState } from 'react';
import { ScrollView, RefreshControl } from 'react-native';

import { colors } from '@/styles';
import { Props } from './types';

const ScrollViewWithRefresh: React.FC<Props> = ({
  onRefresh = () => {},
  titleColor = colors.white,
  tintColor = colors.white,
  title = '数据更新中',
  style,
  children,
}) => {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    await onRefresh();
    setRefreshing(false);
  };

  return (
    <ScrollView
      style={style}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={handleRefresh}
          title={title}
          titleColor={titleColor}
          tintColor={tintColor}
        />
      }>
      {children}
    </ScrollView>
  );
};

export default ScrollViewWithRefresh;
