import { StyleSheet } from 'react-native';
import { colors } from '@styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  errorContainer: {
    borderBottomColor: colors.magenta,
  },
  input: {
    flex: 1,
    height: 54,
    paddingVertical: 16,
    fontSize: 16,
    color: colors.textPrimary,
  },
  error: {
    position: 'absolute',
    bottom: -18,
    left: 5,
    fontSize: 12,
    color: colors.magenta,
  },
  clearButton: {
    right: -12,
    position: 'absolute',
    padding: 12,
  },
});
