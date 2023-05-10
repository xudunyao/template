import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import { commonStyles } from '@/styles';
import styles from './styles';
import { Props } from './types';

const Popup: React.FC<Props> = ({
  visible,
  icon,
  title,
  content,
  buttons,
  position = 'center',
  onMaskPress,
}) => (
  <Modal visible={visible} animationType="fade" transparent>
    <TouchableWithoutFeedback disabled={!onMaskPress} onPress={onMaskPress}>
      <View style={styles.touchableMask} />
    </TouchableWithoutFeedback>
    <View
      style={[
        styles.container,
        position === 'bottom' && commonStyles.justifyContentEnd,
        position === 'top' && commonStyles.justifyContentStart,
      ]}>
      <View
        style={[
          styles.body,
          position === 'bottom' && styles.bodyBottom,
          position === 'top' && styles.bodyTop,
        ]}>
        <View style={styles.content}>
          {icon && <View style={styles.icon}>{icon}</View>}
          {title && (
            <View style={content ? { marginBottom: 16 } : {}}>
              {typeof title === 'string' ? (
                <Text style={styles.title}>{title}</Text>
              ) : (
                title
              )}
            </View>
          )}
          {content && (
            <>
              {typeof content === 'string' ? (
                <Text style={styles.text}>{content}</Text>
              ) : (
                content
              )}
            </>
          )}
        </View>
        {buttons && (
          <SafeAreaView style={styles.buttonGroup}>
            {buttons.map((btn, index) => (
              <React.Fragment key={index}>
                {!!index && <View style={styles.separator} />}
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={[styles.button]}
                  onPress={btn.onPress}>
                  <Text
                    style={[
                      styles.buttonTitle,
                      styles[`${btn.type}ButtonTitle`],
                    ]}>
                    {btn.title}
                  </Text>
                </TouchableOpacity>
              </React.Fragment>
            ))}
          </SafeAreaView>
        )}
      </View>
    </View>
  </Modal>
);

export default Popup;
