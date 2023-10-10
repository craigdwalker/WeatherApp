import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {Spacing} from '../theme/Spacing';

const SearchInput = ({placeholder, textSubmitted}) => {
  return (
    <SafeAreaView>
      <TextInput
        accessibilityRole="search"
        style={styles.input}
        placeholder={placeholder}
        onSubmitEditing={value => textSubmitted(value.nativeEvent.text)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 48,
    margin: Spacing.medium,
    borderWidth: 1,
    padding: Spacing.medium,
  },
});

export default SearchInput;
