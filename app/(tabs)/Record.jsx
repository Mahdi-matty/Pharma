import { ScrollView,  Text, View } from 'react-native'
import React from 'react'
import Stepper from '../../components/Stepper'
import { SafeAreaView } from 'react-native-safe-area-context'

const Record = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <Stepper />
        </ScrollView>
    </SafeAreaView>
  )
}

export default Record
