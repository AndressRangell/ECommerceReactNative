import { StyleSheet, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'
import { SliderBox } from 'react-native-image-slider-box'

const Carousel = () => {
  const slides = [
    'https://www.areacucuta.com/wp-content/uploads/2022/11/1-1000x707.jpg',
    'https://www.docrysdc.es/sites/default/files/imagenes/decoracion-de-interiores-salon-comedor-02.jpg',
    'https://myhomedesigners.es/media/magefan_blog/2022/01/0.jpg',
    'https://media1.amarilo.com.co/website/s3fs-public/blog/2023-03/techoinicio.jpg'
  ]

  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        autoPlay
        circleLoop
        ImageComponentStyle={{
          borderRadius: 15,
          width: '90%',
          marginTop: 10
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: 'center'
  }
})

export default Carousel