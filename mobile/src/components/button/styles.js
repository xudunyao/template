import { StyleSheet } from 'react-native';
import { colors } from '@styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    paddingHorizontal: 32,
    borderWidth: 1,
    borderColor: colors.background,
    backgroundColor: colors.background,
    borderRadius: 4,
  },
  block: {
    width: '100%',
  },
  round: {
    borderRadius: 22,
  },
  ghost: {
    backgroundColor: colors.transparent,
  },
  primary: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    color: colors.textSecondary,
    fontSize: 16,
  },
  primaryTitle: {
    color: colors.white,
  },
  primaryGhostTitle: {
    color: colors.primary,
  },
  primaryDisabled: {
    backgroundColor: colors.primaryLight,
    borderColor: colors.primaryLight,
  },
  primaryGhostDisabled: {
    borderColor: colors.primaryLight,
  },
  primaryGhostDisabledTitle: {
    color: colors.primaryLight,
  },
  activityIndicator: {
    marginRight: 10,
  },
});
