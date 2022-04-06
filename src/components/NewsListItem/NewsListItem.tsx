import {Image, Pressable, Text, View} from 'react-native';
import React, {useContext} from 'react';
import NewsListItemProps from './NewsListItemProps';
import {ThemeContext} from '../../utils/themes';
import {styles} from './NewsListItemStyles';

function NewsListItem({imageURL, headline, onPress}: NewsListItemProps) {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={styles(theme).container}>
      <Image style={styles(theme).image} source={{uri: imageURL}} />
      <Pressable style={styles(theme).pressable} onPress={onPress}>
        <Text style={styles(theme).headline}>{headline}</Text>
      </Pressable>
    </View>
  );
}

export default NewsListItem;
