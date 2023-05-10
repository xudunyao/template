import { StyleSheet } from 'react-native';
import { colors, sizes, fonts } from '@/styles';

export default StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingHorizontal: sizes.padding,
    paddingVertical: sizes.paddingL,
    backgroundColor: colors.white,
    borderRadius: 6,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: fonts.weight.medium,
    color: colors.textPrimary,
  },
  headerRightTitle: {
    fontSize: 14,
    color: colors.textTertiary,
  },
  indicator: {
    marginVertical: 5,
  },
});
