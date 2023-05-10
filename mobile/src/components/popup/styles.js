import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts } from '@styles';

const windowWidth = Dimensions.get('window').width;

const maxWidth = 320;
const popupWidth = windowWidth - 56;

export default StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `${colors.black}50`,
  },
  touchableMask: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  body: {
    width: popupWidth > maxWidth ? maxWidth : popupWidth,
    backgroundColor: colors.white,
    borderRadius: 6,
    overflow: 'hidden',
  },
  bodyBottom: {
    width: windowWidth,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  bodyTop: {
    width: windowWidth,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  content: {
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  title: {
    textAlign: 'center',
    fontWeight: fonts.weight.medium,
    color: colors.textPrimary,
    fontSize: 18,
  },
  text: {
    textAlign: 'center',
    color: colors.textTertiary,
    fontSize: 14,
  },
  buttonGroup: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  button: {
    height: 54,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    borderRightWidth: 1,
    borderRightColor: colors.border,
  },
  buttonTitle: {
    fontSize: 17,
    fontWeight: fonts.weight.medium,
    color: colors.textPrimary,
  },
  primaryButtonTitle: {
    color: colors.primary,
  },
});
