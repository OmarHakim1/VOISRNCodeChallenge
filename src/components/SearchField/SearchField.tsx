import {TextInput} from 'react-native';
import React from 'react';
import styles from './SearchFieldStyles';
import SearchFieldProps from './SearchFieldProps';

function SearchField(props: SearchFieldProps) {
  return (
    <TextInput
      style={styles.textField}
      placeholder="Search for articles"
      onChangeText={text => props.onTextChange(text)}
    />
  );
}

export default SearchField;
