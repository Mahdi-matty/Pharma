import React, { useState, useEffect } from 'react'
import {useLocation } from '../../middleware/useLocation'
import { View, Text, ActivityIndicator } from 'react-native'
const Bookmark = () => {
 const {error, lat, lon, loading} = useLocation()
  if(lat, lon, !loading){
    <View>
      <Text>{`your latitude is : ${lat}/ your longitute is : ${lon}`}</Text>
    </View>
  }
  return (
    <View>
      <ActivityIndicator className='justify-items-center p-2 align-middle' size={large} color={blue}/>
    </View>
  )
}


export default Bookmark
