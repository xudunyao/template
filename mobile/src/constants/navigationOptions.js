import React from 'react';
import { TouchableOpacity } from 'react-native';
import { goBack } from '@/services/navigation';

import { Back } from '@/assets/svgs';
import { colors, commonStyles } from '@/styles';

export default Object.freeze({
  defaultOptions: {
    headerShown: false,
  },
  commonHeader: {
    headerBackVisible: false,
    headerLeft: props => (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={goBack}
        style={commonStyles.headerBackButton}>
        <Back fill={colors.textPrimary} width={16} height={16} />
      </TouchableOpacity>
    ),
    headerTitleAlign: 'center',
    headerTitleStyle: commonStyles.headerTitleStyle,
    headerStyle: commonStyles.headerStyle,
    headerShadowVisible: false,
  },
});
