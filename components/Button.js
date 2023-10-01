import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
// TouchableOpacity is a button kinda - area that we can click

import {COLORS, SIZES, SHADOWS, FONTS} from '../constants'

export const CircleButton = ({imgURL, handlePress, ...props}) => {
  return (
     <TouchableOpacity
      style={{
        width:40,
        height:40,
        backgroundColor: COLORS.white,
        position: 'absolute', // make sure it doesnt leave our area
        borderRadius: SIZES.extraLarge, // Turns rect to a circle
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props // The other attributes like top and right
      }}
      onPress={handlePress}
      >

      <Image 
        source={imgURL}
        resizeMode='contain'
        style={{width:24, height:24}}
      />

     </TouchableOpacity>
  )
}

export const RectButton = ({minWidth, fontSize, handlePress, ...props}) => {
  return (
    <TouchableOpacity
     style={{
      backgroundColor: COLORS.primary,
      borderRadius: SIZES.extraLarge, // Turns rect to a circle
      minWidth: minWidth, // makes it from a circle to oval
      padding: SIZES.small, // Increases height of oval thing
      ...props // The other attributes like top and right
     }}
     onPress={handlePress}
    >

    {/* This is text inside the button */}
    <Text style={{
      fontFamily: FONTS.semiBold,
      fontSize: fontSize,
      color: COLORS.white,
      textAlign: "center" 
    }}>
      Place a bid
    </Text> 

    </TouchableOpacity>
 )
}
