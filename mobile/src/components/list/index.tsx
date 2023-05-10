import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';

import { colors } from '@/styles';
import styles from './styles';

import { Props } from './types';

const List: React.FC<Props> = ({
  data,
  getData,
  pageNumber,
  totalPage,
  renderItem,
  customStyles,
  emptyComponent,
  reset,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingNext, setLoadingNext] = useState(false);

  const initData = async () => {
    if (reset) {
      reset();
    }
    if ((data.length && reset) || !data.length) {
      setLoading(true);
      await getData(0);
      setLoading(false);
    }
  };

  useEffect(() => {
    initData();
  }, []);

  const handleRefresh = async () => {
    if (loading || refreshing || loadingNext) {
      return;
    }
    setRefreshing(true);
    await getData(0);
    setRefreshing(false);
  };

  const handleEndReached = async () => {
    if (loading || refreshing || loadingNext || pageNumber >= totalPage) {
      return;
    }
    setLoadingNext(true);
    await getData(pageNumber + 1);
    setLoadingNext(false);
  };

  return (
    <FlatList
      style={customStyles}
      data={data}
      onRefresh={handleRefresh}
      refreshing={refreshing}
      onEndReachedThreshold={0.1}
      onEndReached={handleEndReached}
      renderItem={renderItem}
      keyExtractor={item => item?.id || item}
      ListEmptyComponent={
        <View style={styles.loadingContainer}>
          {loading ? (
            <ActivityIndicator size="large" color={colors.primaryLight} />
          ) : (
            emptyComponent || (
              <Text style={styles.emptyTitle}>暂时没有数据哦~</Text>
            )
          )}
        </View>
      }
      ListFooterComponent={
        <SafeAreaView>
          {loadingNext && (
            <View style={styles.footer}>
              <ActivityIndicator size="small" color={colors.primaryLight} />
            </View>
          )}
          {!!data.length && pageNumber === totalPage && (
            <View style={styles.footer}>
              <Text style={styles.emptyTitle}>没有更多数据了~</Text>
            </View>
          )}
        </SafeAreaView>
      }
    />
  );
};

export default List;
