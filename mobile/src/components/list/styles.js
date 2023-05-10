import { StyleSheet } from 'react-native';
import { colors } from '@/styles';

export default StyleSheet.create({
  loadingContainer: {
    paddingVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTitle: {
    fontSize: 12,
    color: colors.textTertiary,
  },
});
