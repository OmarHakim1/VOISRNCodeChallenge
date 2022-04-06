import {FlatList, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {routes} from '../../navigation/routes';
import {useGetNews} from '../../hooks/useGetNews';
import NewsListItem from '../../components/NewsListItem/NewsListItem';
import SearchField from '../../components/SearchField/SearchField';
import {useNavigation} from '@react-navigation/native';
import {Article} from '../../models/Article';
import {StackNavigationProp} from '@react-navigation/stack';
import {ThemeContext} from '../../utils/themes';
import {styles} from './NewsListStyles';

function NewsList() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [data, loading, error, refetch] = useGetNews();
  const [keyword, setKeyword] = useState('');
  const {theme} = useContext(ThemeContext);

  useEffect(() => {}, []);

  function didPressOnArticle(item: Article) {
    navigation.push(routes.newsDetails, item);
  }

  function filteredData() {
    return keyword.length > 0
      ? data.filter((item: {title: string | string[]}) => {
          return item.title.includes(keyword);
        })
      : data;
  }

  return (
    <View style={styles(theme).container}>
      <SearchField onTextChange={setKeyword} />
      <FlatList
        data={filteredData()}
        renderItem={({item}) => (
          <NewsListItem
            headline={item.title}
            imageURL={item.urlToImage}
            onPress={() => {
              didPressOnArticle(item);
            }}
          />
        )}
        onRefresh={() => {
          refetch();
        }}
        refreshing={loading}
      />
    </View>
  );
}

export default NewsList;
