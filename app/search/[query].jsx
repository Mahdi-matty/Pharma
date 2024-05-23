import {  Text, View } from 'react-native'
import React from 'react'
import {useLocalSearchParams} from 'expo-router'
import {SafeAreaView} from 'react-native-safe-area-context'
import SearchInput from '../../components/SearchInput'

const Search = () => {
  const {query } = useLocalSearchParams()
  return (
    <SafeAreaView>
      <Text>{query}</Text>
      <SearchInput initialQuery = {query}/>
    </SafeAreaView>
  )
}

export default Search
