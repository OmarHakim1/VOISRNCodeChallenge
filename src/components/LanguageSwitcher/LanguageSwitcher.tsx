import {StyleSheet, Switch, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {styles} from './LanguageSwitcherStyles';
import {ThemeContext, themes} from '../../utils/themes';
import {useTranslation} from 'react-i18next';
import i18n from '../../locales/i18next';

const LanguageSwitcher = () => {
  const {i18n} = useTranslation();
  const {theme} = useContext(ThemeContext);
  const {t} = useTranslation();
  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).text}>{t('language')}</Text>
      <View style={styles(theme).switchContainer}>
        <Switch
          value={i18n.language == 'en' ? true : false}
          onValueChange={() => {
            i18n.language == 'en'
              ? i18n.changeLanguage('de')
              : i18n.changeLanguage('en');
          }}
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={theme != themes.dark ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>
    </View>
  );
};

export default LanguageSwitcher;
