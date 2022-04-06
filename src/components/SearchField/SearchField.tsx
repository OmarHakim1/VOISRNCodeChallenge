import {TextInput} from 'react-native';
import React, {useContext} from 'react';
import SearchFieldProps from './SearchFieldProps';
import {ThemeContext} from '../../utils/themes';
import {styles} from './SearchFieldStyles';

function SearchField(props: SearchFieldProps) {
  const {theme} = useContext(ThemeContext);

  return (
    <TextInput
      style={styles(theme).textField}
      placeholder="Search for articles"
      placeholderTextColor={theme.text}
      onChangeText={text => props.onTextChange(text)}
    />
  );
}

export default SearchField;
