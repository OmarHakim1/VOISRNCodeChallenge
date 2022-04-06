import {Image, ScrollView, Text, View} from 'react-native';
import React from 'react';
import styles from './NewsDetailsStyles';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {Article} from '../../models/Article';

function NewsDetails({route, navigation}: NativeStackHeaderProps) {
  const newsObject: any = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: newsObject.urlToImage}} />
        <Text style={styles.authorText}>{newsObject.author}</Text>
        <Text style={styles.dateText}>{newsObject.publishedAt}</Text>
        <Text style={styles.headerText}>{newsObject.title}</Text>
        <Text style={styles.contentText}>{newsObject.content}</Text>
      </View>
    </ScrollView>
  );
}

export default NewsDetails;
