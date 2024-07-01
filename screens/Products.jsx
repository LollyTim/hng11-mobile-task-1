import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const dummyProducts = [
  {
    id: 1,
    image:
      'https://s3-alpha-sig.figma.com/img/abc3/c7bf/559d8f306b0f5f37f1eaf72b32da9f2e?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CqjbbI5J1m4O0oDlhJjTJOMsCPyPVhSE-UkmdAeOMFrgGifzEGrdpoUwjOUIQBo~ARhk631K2niqnhrGCnYs40XksqMklkO0sdzOoWGLNYbYXwSNT9uzTKyxFuuNBhX6nC4j6usOma0BOIXuEr1Ftj1fKdLitcU60qdFzEehDJzXKCQ2YlRrAfrO27j-6RH4BhP0ROK-c-hRQCXbNC2a8oNLkntDh6nPEHoXHLX2Fy9jbWVGKd0QhYblIhIa72FuLXRgR6ezCAzhCMTt6Wcau6ahW2~VY9~hGhGnOESXO1F6NF4Zd6rAo0e4gNNJ5thidGNbLnCVo2DmNRMNzd9yrQ__',
    title: 'Product 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod libero eu',
    price: 19.99,
  },
  {
    id: 2,
    image:
      'https://s3-alpha-sig.figma.com/img/f9ff/fe3a/6ca5a09485d28fa4aabbe01ce14ff98f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dJGms74oaT8FEsW~CxfxXmhzJBXfyD3IX6MV0G9vaj4NpH1XiK~MofZQe5K4odV~XVOn~O4CShpDgD6-Dr-5xzrmn6aJig1jTWRB9HF1CGP8E3y1s7-pSQGdTRYpH~S68tNZXJUlu9LNx8olCaBuL8BeOIPQtAnyatwfw-m-od9j6rYr~-r43Mdy4m5CgV4Qz~IA9iAul6yVWG48kNL827BLrgbamwnLkNNTS8UL1yyWFtdj8lhbzYw4oychwY~kDH2eXUad2J1iAGwSN8jqur61f1lNJxwZf0xV~kzdBicylO6wCHHlsFFxcZ7HsWHUnDmDvmPDORzsgLu5vkbTLw__',
    title: 'Product-2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod libero eu',
    price: 29.99,
  },
  {
    id: 3,
    image:
      'https://s3-alpha-sig.figma.com/img/abc3/c7bf/559d8f306b0f5f37f1eaf72b32da9f2e?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CqjbbI5J1m4O0oDlhJjTJOMsCPyPVhSE-UkmdAeOMFrgGifzEGrdpoUwjOUIQBo~ARhk631K2niqnhrGCnYs40XksqMklkO0sdzOoWGLNYbYXwSNT9uzTKyxFuuNBhX6nC4j6usOma0BOIXuEr1Ftj1fKdLitcU60qdFzEehDJzXKCQ2YlRrAfrO27j-6RH4BhP0ROK-c-hRQCXbNC2a8oNLkntDh6nPEHoXHLX2Fy9jbWVGKd0QhYblIhIa72FuLXRgR6ezCAzhCMTt6Wcau6ahW2~VY9~hGhGnOESXO1F6NF4Zd6rAo0e4gNNJ5thidGNbLnCVo2DmNRMNzd9yrQ__',
    title: 'Product 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod libero eu',
    price: 19.99,
  },
  {
    id: 4,
    image:
      'https://s3-alpha-sig.figma.com/img/f9ff/fe3a/6ca5a09485d28fa4aabbe01ce14ff98f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dJGms74oaT8FEsW~CxfxXmhzJBXfyD3IX6MV0G9vaj4NpH1XiK~MofZQe5K4odV~XVOn~O4CShpDgD6-Dr-5xzrmn6aJig1jTWRB9HF1CGP8E3y1s7-pSQGdTRYpH~S68tNZXJUlu9LNx8olCaBuL8BeOIPQtAnyatwfw-m-od9j6rYr~-r43Mdy4m5CgV4Qz~IA9iAul6yVWG48kNL827BLrgbamwnLkNNTS8UL1yyWFtdj8lhbzYw4oychwY~kDH2eXUad2J1iAGwSN8jqur61f1lNJxwZf0xV~kzdBicylO6wCHHlsFFxcZ7HsWHUnDmDvmPDORzsgLu5vkbTLw__',
    title: 'Product-4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod libero eu',
    price: 29.99,
  },
  {
    id: 5,
    image:
      'https://s3-alpha-sig.figma.com/img/f9ff/fe3a/6ca5a09485d28fa4aabbe01ce14ff98f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dJGms74oaT8FEsW~CxfxXmhzJBXfyD3IX6MV0G9vaj4NpH1XiK~MofZQe5K4odV~XVOn~O4CShpDgD6-Dr-5xzrmn6aJig1jTWRB9HF1CGP8E3y1s7-pSQGdTRYpH~S68tNZXJUlu9LNx8olCaBuL8BeOIPQtAnyatwfw-m-od9j6rYr~-r43Mdy4m5CgV4Qz~IA9iAul6yVWG48kNL827BLrgbamwnLkNNTS8UL1yyWFtdj8lhbzYw4oychwY~kDH2eXUad2J1iAGwSN8jqur61f1lNJxwZf0xV~kzdBicylO6wCHHlsFFxcZ7HsWHUnDmDvmPDORzsgLu5vkbTLw__',
    title: 'Product-5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod libero eu',
    price: 29.99,
  },
  {
    id: 6,
    image:
      'https://s3-alpha-sig.figma.com/img/f9ff/fe3a/6ca5a09485d28fa4aabbe01ce14ff98f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dJGms74oaT8FEsW~CxfxXmhzJBXfyD3IX6MV0G9vaj4NpH1XiK~MofZQe5K4odV~XVOn~O4CShpDgD6-Dr-5xzrmn6aJig1jTWRB9HF1CGP8E3y1s7-pSQGdTRYpH~S68tNZXJUlu9LNx8olCaBuL8BeOIPQtAnyatwfw-m-od9j6rYr~-r43Mdy4m5CgV4Qz~IA9iAul6yVWG48kNL827BLrgbamwnLkNNTS8UL1yyWFtdj8lhbzYw4oychwY~kDH2eXUad2J1iAGwSN8jqur61f1lNJxwZf0xV~kzdBicylO6wCHHlsFFxcZ7HsWHUnDmDvmPDORzsgLu5vkbTLw__',
    title: 'Product-6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod libero eu',
    price: 29.99,
  },
];

export default function ProductsScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => navigation.navigate('ProductDetail', { product: item })}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dummyProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productItem: {
    width: '48%',
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 5,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    color: '#007AFF',
  },
});
