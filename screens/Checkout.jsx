import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function CheckoutScreen() {
  const [cartItems, setCartItems] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  const addedItemRef = useRef(null);

  useEffect(() => {
    if (route.params?.addedItem && route.params.addedItem !== addedItemRef.current) {
      setCartItems((prevItems) => [
        ...prevItems,
        { ...route.params.addedItem, uniqueId: Date.now() },
      ]);
      addedItemRef.current = route.params.addedItem;

      // Clear the navigation params
      navigation.setParams({ addedItem: null });
    }
  }, [route.params?.addedItem, navigation]);

  const removeItem = (uniqueId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.uniqueId !== uniqueId));
  };

  const clearCart = () => {
    setCartItems([]);
    addedItemRef.current = null;
  };

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      Alert.alert('Empty Cart', 'Your cart is empty. Add some items before placing an order.');
      return;
    }

    clearCart();
    navigation.navigate('OrderSuccess');
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(item.uniqueId)}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCartText}>Your cart is empty</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}-${item.uniqueId}`}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total: ${totalPrice.toFixed(2)}</Text>
          </View>
          <TouchableOpacity style={styles.checkoutButton} onPress={handlePlaceOrder}>
            <Text style={styles.checkoutButtonText}>Place Order</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  removeButton: {
    backgroundColor: '#FF3B30',
    padding: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: 'white',
  },
  totalContainer: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#34C759',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
