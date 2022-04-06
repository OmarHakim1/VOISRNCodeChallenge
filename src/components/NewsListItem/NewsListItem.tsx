import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import NewsListItemProps from './NewsListItemProps';
import styles from './NewsListItemStyles';

function NewsListItem({imageURL, headline, onPress}: NewsListItemProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: imageURL}} />
      <Pressable style={styles.pressable} onPress={onPress}>
        <Text style={styles.headline}>{headline}</Text>
      </Pressable>
    </View>
  );
}

export default NewsListItem;
