import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routes} from './routes';
import NewsStackNavigator from './NewsStackNavigator';
import Settings from '../screens/Settings/Settings';
import {ThemeContext, themes} from '../utils/themes';
import {useTranslation} from 'react-i18next';

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  const {t} = useTranslation();
  const {theme} = useContext(ThemeContext);
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: theme.background},
        headerTintColor: theme.text,
        tabBarActiveTintColor: theme.text,
        tabBarInactiveTintColor: 'lightgrey',
        tabBarBackground: () => (
          <View
            style={{
              backgroundColor: theme.background,
              width: '100%',
              height: '100%',
            }}></View>
        ),
      }}>
      <BottomTab.Screen
        name={routes.news}
        component={NewsStackNavigator}
        options={{
          title: t('news'),
          tabBarIcon: ({focused}) => {
            let icon =
              focused == true
                ? (theme == themes.dark ? true : false)
                  ? require('../images/icons8-news-30_inactive.png')
                  : require('../images/icons8-news-30_active.png')
                : require('../images/icons8-news-30_inactive.png');
            return <Image source={icon} style={styles.tabIcon} />;
          },

          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name={routes.settings}
        component={Settings}
        options={{
          title: t('settings'),
          tabBarIcon: ({focused}) => {
            let icon =
              focused == true
                ? (theme == themes.dark ? true : false)
                  ? require('../images/icons8-settings-50_inactive.png')
                  : require('../images/icons8-settings-50_active.png')
                : require('../images/icons8-settings-50_inactive.png');
            return <Image source={icon} style={styles.tabIcon} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30,
  },
});
