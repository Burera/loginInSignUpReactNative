import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

const AppText = () => {
  return (
    <View>
      <Text style={styles.header}>Well Being – </Text>
      <Text style={styles.shortText}>
        the overall process of hazard identification
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#364f6b',
    marginTop: 30,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  shortText: {
    color: '#bcbcbc',
    fontWeight: '100',
    marginHorizontal: 20,
  },
});

export default AppText;
