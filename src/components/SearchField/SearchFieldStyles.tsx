import {StyleSheet} from 'react-native';

export const styles = (props: any) =>
  StyleSheet.create({
    textField: {
      borderColor: props.text,
      padding: 10,
      margin: 10,
      borderRadius: 5,
      borderWidth: 1,
      color: props.text,
      backgroundColor: props.background,
    },
  });
