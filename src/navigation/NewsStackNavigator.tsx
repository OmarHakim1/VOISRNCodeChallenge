import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from './routes';
import {ThemeContext} from '../utils/themes';
import NewsList from '../screens/NewsList/NewsList';
import NewsDetails from '../screens/NewsDetails/NewsDetails';
import {useTranslation} from 'react-i18next';

const NewsStack = createNativeStackNavigator();

function NewsStackNavigator() {
  const {t} = useTranslation();
  const {theme} = useContext(ThemeContext);

  return (
    <NewsStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: theme.background},
        headerTintColor: theme.text,
        headerBackTitleVisible: false,
      }}>
      <NewsStack.Screen
        name={routes.newsList}
        component={NewsList}
        options={{title: t('newsList')}}
      />
      <NewsStack.Screen
        name={routes.newsDetails}
        component={NewsDetails}
        options={{title: t('newsDetails')}}
      />
    </NewsStack.Navigator>
  );
}

export default NewsStackNavigator;
