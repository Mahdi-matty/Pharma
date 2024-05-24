import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location'
export const useWeather = ()=>{
    const [loading, setLoading] = useState(true)
    const [lat, setLat] = useState([])
    const [lon, setLon] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
      ;(async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
  
        if (status !== 'granted') {
          setError('permission to access location was denied')
          return
        }
        let location = await Location.getCurrentPositionAsync({})
        setLat(location.coords.latitude)
        setLon(location.coords.longitude)
        await fetchWeatherData()
      })()
      setLoading(false)
    }, [lat, lon])
    return [loading, error, lat, lon]
}