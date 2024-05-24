import { ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from './FormField'
import CustomButton from './CustomButton'

const History = ({ onSubmit, onPrevious }) => {

    const handleSubmit = () => {
    
        onSubmit({ bloodPressure, heartRate, temp });
      };
  return (
    <SafeAreaView>
        <ScrollView>
        <FormField
          title="blood pressure"
          value={bloodPressure}
          handleChangeText={(text) => setBloodPressure(text)}
          placeholder="blood pressure"
        />
        <CustomButton title="Submit" onPress={handleSubmit} />
        <CustomButton title="Previous" onPress={onPrevious} />
        </ScrollView>
    </SafeAreaView>
  )
}

export default History
