import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from './routes';
import {ThemeContext} from '../utils/themes';
import NewsList from '../screens/NewsList/NewsList';
import NewsDetails from '../screens/NewsDetails/NewsDetails';

const NewsStack = createNativeStackNavigator();

function NewsStackNavigator() {
  const {theme} = useContext(ThemeContext);

  return (
    <NewsStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: theme.background},
        headerTintColor: theme.text,
      }}>
      <NewsStack.Screen name={routes.newsList} component={NewsList} />
      <NewsStack.Screen name={routes.newsDetails} component={NewsDetails} />
    </NewsStack.Navigator>
  );
}

export default NewsStackNavigator;
