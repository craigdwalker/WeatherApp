import {StyleSheet} from 'react-native';
import {Spacing} from '../Spacing';

const containerStyle = StyleSheet.create({
  columnContainer: {
    gap: Spacing.small,
    padding: Spacing.large,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export {containerStyle};
