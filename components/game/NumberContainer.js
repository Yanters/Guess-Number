import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 400 ? 6 : 12,
    margin: deviceWidth < 400 ? 6 : 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    fontSize: deviceWidth < 400 ? 24 : 48,
    color: Colors.accent500,
    // fontWeight: 'bold',
    fontFamily: 'open-sans-bold',
  },
});
