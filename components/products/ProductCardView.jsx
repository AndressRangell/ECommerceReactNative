import { View, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './productcardview.styles'
import { COLORS } from '../../constants'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const image = 'https://www.areacucuta.com/wp-content/uploads/2022/11/1-1000x707.jpg'

const ProductCardView = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: image }}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            Product
          </Text>
          <Text style={styles.suplier} numberOfLines={1}>
            Product
          </Text>
          <Text style={styles.price}>
            $1.234
          </Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name='add-circle' size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default ProductCardView