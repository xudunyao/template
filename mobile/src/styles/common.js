import { StyleSheet, Platform, StatusBar } from 'react-native';
import fonts from './fonts';
import colors from './colors';
import sizes from './sizes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  flex1: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentEnd: {
    justifyContent: 'flex-end',
  },
  justifyContentStart: {
    justifyContent: 'flex-start',
  },
  alignItemsEnd: {
    alignItems: 'flex-end',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  headerStyle: {
    backgroundColor: colors.background,
  },
  headerWhiteStyle: {
    backgroundColor: colors.white,
  },
  headerBackButton: {
    marginLeft: -16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitleStyle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: fonts.weight.medium,
    color: colors.textPrimary,
  },
  card: {
    marginHorizontal: sizes.paddingL,
    marginBottom: sizes.paddingL,
    paddingHorizontal: sizes.padding,
    paddingVertical: sizes.paddingL,
    backgroundColor: colors.white,
    borderRadius: 6,
  },
  statusBarPadding: {
    paddingTop: Platform === 'ios' ? 0 : StatusBar.currentHeight,
  },
  loadingContainer: {
    paddingVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerLoadingContainer: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
