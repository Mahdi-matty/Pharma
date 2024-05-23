import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, isLoading, containerStyles}) => {
  return (
    <TouchableOpacity
    onPress={handlePress}
    activeOpacity={0.7}
    className={`${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
    disabled={isLoading}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
