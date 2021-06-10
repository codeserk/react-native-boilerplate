import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('~/assets/images/heading.jpeg')} style={styles.image} />
    </View>
  )
}

// Styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
  },
})
