import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {ThemeContext, themes} from '../utils/themes';
import BottomTabs from './BottomTabs';

const config = {
  screens: {
    NewsStack: {
      screens: {
        NewsList: 'newslist',
        NewsDetails: 'newsdetails',
      },
    },
    Settings: 'settings',
  },
};

const AppNavigation = () => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(PrevTheme =>
      PrevTheme === themes.dark ? themes.light : themes.dark,
    );
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <StatusBar
        barStyle={
          (theme == themes.dark ? true : false)
            ? 'light-content'
            : 'dark-content'
        }
      />
      <NavigationContainer
        linking={{prefixes: ['rncodechallenge://app'], config}}>
        <BottomTabs />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

export default AppNavigation;
