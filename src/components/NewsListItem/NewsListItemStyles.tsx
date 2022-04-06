import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    borderRadius: 10,
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
  },
  pressable: {
    width: '50%',
  },
});
