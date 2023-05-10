import { StyleSheet } from 'react-native';
import { colors } from '@/styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    marginBottom: 16,
  },
  checkButton: {
    marginRight: 8,
  },
  unchecked: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.textTertiary,
  },
  title: {
    flex: 1,
    fontSize: 12,
    color: colors.textTertiary,
  },
  input: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  error: {
    borderColor: colors.magenta,
  },
});
