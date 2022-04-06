import {View} from 'react-native';
import React, {useContext} from 'react';
import ThemeSwitch from '../../components/ThemeSwitch/ThemeSwitch';
import {styles} from './SettingsStyles';
import {ThemeContext} from '../../utils/themes';

const Settings = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={styles(theme).container}>
      <ThemeSwitch />
    </View>
  );
};

export default Settings;
