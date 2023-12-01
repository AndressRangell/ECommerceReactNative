import { Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons, Feather } from '@expo/vector-icons'
import styles from './home.styles'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Welcome } from '../components/index'
import Carousel from '../components/home/Carousel'
import Headings from '../components/home/Headings'
import ProductRow from '../components/products/ProductRow'

const Home = () => {
  return (
    <SafeAreaView>
      {/* Header */}
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name='location-outline' size={24} />
          <Text style={styles.location}>Bucaramanga Colombia</Text>
          <View style={styles.cartContainer}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Feather name='shopping-bag' size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Body */}
      <ScrollView>
        <Welcome />
        <Carousel />
        <Headings />
        <ProductRow />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home