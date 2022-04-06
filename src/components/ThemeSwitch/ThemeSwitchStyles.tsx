import {StyleSheet} from 'react-native';

export const styles = (props: any) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: props.background,
      flexDirection: 'row',
      padding: 20,
    },
    image: {
      height: 100,
      width: 100,
      marginRight: 10,
      borderRadius: 20,
    },
    headline: {
      fontSize: 17,
      fontWeight: 'bold',
      color: props.text,
    },
    text: {
      color: props.text,
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 10,
    },
  });
