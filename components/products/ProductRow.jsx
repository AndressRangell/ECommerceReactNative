import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './productrow.styles'
import ProductCardView from './ProductCardView'

const ProductRow = () => {
  const products = [1, 2, 3, 4]
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ items }) => <ProductCardView />}
        horizontal
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  )
}

export default ProductRow