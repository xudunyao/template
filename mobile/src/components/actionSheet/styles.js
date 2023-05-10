import { StyleSheet } from 'react-native';
import { colors, fonts } from '@styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: `${colors.black}50`,
  },
  mask: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  list: {
    flexGrow: 0,
    minHeight: 0,
    backgroundColor: colors.white,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  button: {
    flexDirection: 'column',
    height: 52,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: fonts.weight.medium,
    color: colors.textPrimary,
  },
  cancelButtonTitle: {
    color: colors.textTertiary,
  },
  separator: {
    marginHorizontal: 24,
    height: 1,
    backgroundColor: colors.background,
  },
});
