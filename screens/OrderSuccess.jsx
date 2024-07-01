import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OrderSuccessScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.successText}>Order Placed Successfully!</Text>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Products')}>
        <Text style={styles.backButtonText}>Back to Products</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
  },
});
