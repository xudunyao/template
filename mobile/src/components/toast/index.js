import React from 'react';
import { View, Text } from 'react-native';
import Toast from 'react-native-toast-message';
import { SuccessCircle, WarningCircle, ErrorCircle } from '@/assets/svgs';
import { colors } from '@/styles';

import styles from './styles';

const iconProps = {
  width: 24,
  height: 24,
  style: styles.icon,
};

const renderToast = ({ text1, text2 }, type) => {
  let icon = null;
  switch (type) {
    case 'success':
      icon = <SuccessCircle fill={colors.primary} {...iconProps} />;
      break;
    case 'warning':
      icon = <WarningCircle fill={colors.orange} {...iconProps} />;
      break;
    case 'error':
      icon = <ErrorCircle fill={colors.red} {...iconProps} />;
      break;
    default:
      break;
  }
  return (
    <View style={styles.container}>
      {icon}
      <View style={styles.content}>
        <Text style={styles.title}>{text1}</Text>
        {text2 ? <Text style={styles.text}>{text2}</Text> : null}
      </View>
    </View>
  );
};

const config = {
  success: props => renderToast(props, 'success'),
  error: props => renderToast(props, 'error'),
  warning: props => renderToast(props, 'warning'),
  info: props => renderToast(props, 'info'),
};

const ToastComponent = () => (
  <Toast config={config} visibilityTime={1500} position="top" topOffset={25} />
);

export default ToastComponent;
