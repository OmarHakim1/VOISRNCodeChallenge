import {StyleSheet} from 'react-native';

export const styles = (props: any) =>
  StyleSheet.create({
    container: {
      padding: 10,
      borderColor: props.text,
      borderWidth: 1,
      flexDirection: 'row',
      margin: 10,
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: props.background,
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
    pressable: {
      width: '50%',
    },
  });
