import {Image, ScrollView, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {styles} from './NewsDetailsStyles';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {ThemeContext} from '../../utils/themes';

function NewsDetails({route, navigation}: NativeStackHeaderProps) {
  const newsObject: any = route.params;
  const {theme} = useContext(ThemeContext);

  return (
    <ScrollView style={styles(theme).scrollView}>
      <View style={styles(theme).container}>
        <Image
          style={styles(theme).image}
          source={{uri: newsObject.urlToImage}}
        />
        <Text style={styles(theme).authorText}>{newsObject.author}</Text>
        <Text style={styles(theme).dateText}>{newsObject.publishedAt}</Text>
        <Text style={styles(theme).headerText}>{newsObject.title}</Text>
        <Text style={styles(theme).contentText}>{newsObject.content}</Text>
      </View>
    </ScrollView>
  );
}

export default NewsDetails;
