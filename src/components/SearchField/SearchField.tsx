import {TextInput} from 'react-native';
import React, {useContext} from 'react';
import SearchFieldProps from './SearchFieldProps';
import {ThemeContext} from '../../utils/themes';
import {styles} from './SearchFieldStyles';

import {useTranslation} from 'react-i18next';

function SearchField(props: SearchFieldProps) {
  const {theme} = useContext(ThemeContext);
  const {t} = useTranslation();

  return (
    <TextInput
      style={styles(theme).textField}
      placeholder={t('searchPlaceholder')}
      placeholderTextColor={theme.text}
      onChangeText={text => props.onTextChange(text)}
    />
  );
}

export default SearchField;
