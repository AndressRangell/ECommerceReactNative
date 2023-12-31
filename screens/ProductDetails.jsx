import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons'
import styles from './productdetails.styles'
import { COLORS } from '../constants'

const uri = 'https://www.areacucuta.com/wp-content/uploads/2022/11/1-1000x707.jpg'

const ProductDetails = ({ navigation }) => {
  const [count, setCount] = useState(10)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='chevron-back-circle' size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <Ionicons name='heart' size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: uri }}
        style={styles.image}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$ 660.00</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons
                key={index}
                name='star'
                size={24}
                color='gold'
              />
            ))}
            <Text style={styles.ratingText}> (4.9) </Text>
          </View>
          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name='plus' size={20} />
            </TouchableOpacity>
            <Text style={styles.ratingText}>  {count}  </Text>
            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name='minus' size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </View>

        <View style={styles.locationContainer}>
          <View style={styles.location}>
            <View style={styles.locationContent}>
              <Ionicons name='location-outline' size={20} />
              <Text>Bucaramanga</Text>
            </View>
            <View style={styles.locationContent}>
              <MaterialCommunityIcons name='truck-delivery-outline' size={20} />
              <Text> Free Delivery</Text>
            </View>
          </View>
        </View>

        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => { }} style={styles.cartButton}>
            <Text style={styles.cartTitle}>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }} style={styles.addCart}>
            <Fontisto name='shopping-bag' size={24} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProductDetails