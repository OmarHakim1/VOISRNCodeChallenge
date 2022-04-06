import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import NewsDetails from '../screens/NewsDetails/NewsDetails';
import NewsList from '../screens/NewsList/NewsList';
import Settings from '../screens/Settings/Settings';
import {routes} from './routes';

const NewsStack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function NewsStackNavigator() {
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen name={routes.newsList} component={NewsList} />
      <NewsStack.Screen name={routes.newsDetails} component={NewsDetails} />
    </NewsStack.Navigator>
  );
}

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'lightgrey',
        }}>
        <BottomTab.Screen
          name={routes.news}
          component={NewsStackNavigator}
          options={{
            tabBarIcon: ({focused}) => {
              let icon =
                focused == true
                  ? require('../images/icons8-news-30_active.png')
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
            tabBarIcon: ({focused}) => {
              let icon =
                focused == true
                  ? require('../images/icons8-settings-50_active.png')
                  : require('../images/icons8-settings-50_inactive.png');
              return <Image source={icon} style={styles.tabIcon} />;
            },
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30,
  },
});
