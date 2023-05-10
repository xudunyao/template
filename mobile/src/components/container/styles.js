import { StyleSheet } from 'react-native';
import { colors } from '@/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  maskContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.transparent,
  },
  loadingTitle: {
    marginTop: 12,
    color: colors.textPrimary,
    fontSize: 12,
  },
  activityIndicator: {},
});
