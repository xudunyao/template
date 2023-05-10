import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableWithoutFeedback,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import styles from './styles';
import { Props } from './types';

const ActionSheet: React.FC<Props> = ({
  visible,
  cancelable,
  onCancel,
  maskClosable,
  actions,
}) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.container}>
        {maskClosable && (
          <TouchableWithoutFeedback onPress={onCancel}>
            <View style={styles.mask} />
          </TouchableWithoutFeedback>
        )}
        <View style={styles.list}>
          <FlatList
            data={actions}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={item.onPress}>
                <Text style={styles.buttonTitle}>{item.title}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            ListFooterComponent={
              cancelable ? (
                <View>
                  <View style={styles.separator} />
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.button}
                    onPress={onCancel}>
                    <Text
                      style={[styles.buttonTitle, styles.cancelButtonTitle]}>
                      取消
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : null
            }
          />
          <SafeAreaView />
        </View>
      </View>
    </Modal>
  );
};

export default ActionSheet;
