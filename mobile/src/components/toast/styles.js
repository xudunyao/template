import { StyleSheet } from 'react-native';
import { sizes, colors, fonts } from '@/styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 8,
    marginHorizontal: sizes.paddingL,
    padding: sizes.paddingL,
    shadowColor: colors.textTertiary,
    shadowOpacity: 0.26,
    shadowOffset: {
      height: 3,
    },
  },
  icon: {
    marginRight: sizes.padding,
  },
  content: {
    flex: 1,
  },
  title: {
    lineHeight: 18,
    fontSize: 14,
    color: colors.textPrimary,
    fontWeight: fonts.weight.medium,
  },
  text: {
    lineHeight: 18,
    fontSize: 12,
    color: colors.textSecondary,
  },
});
