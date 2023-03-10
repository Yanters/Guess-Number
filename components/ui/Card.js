import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: deviceWidth < 400 ? 12 : 24,
    marginHorizontal: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    // Android shadow
    elevation: 8,
    // IOS shadow
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
});
