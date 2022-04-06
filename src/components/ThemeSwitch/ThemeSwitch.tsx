import {StyleSheet, Switch, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext, themes} from '../../utils/themes';
import {styles} from './ThemeSwitchStyles';

const ThemeSwitch = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <View style={styles(theme).container}>
      <Switch
        value={theme == themes.dark ? true : false}
        onValueChange={toggleTheme}
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={theme != themes.dark ? '#f5dd4b' : '#f4f3f4'}
      />
      <Text style={styles(theme).text}>
        {theme == themes.dark ? 'Dark' : 'Light'}
      </Text>
    </View>
  );
};

export default ThemeSwitch;
