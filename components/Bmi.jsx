import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from './FormField';
import CustomButton from './CustomButton';

const Bmi = ({ onSubmit, onPrevious }) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('')

  const handleSubmit = () => {
    setBmi(weight/(height**2))
    onSubmit({ weight, height, bmi });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <FormField
          title="Weight"
          value={weight}
          handleChangeText={(text) => setWeight(text)}
          placeholder="Weight in kg"
        />
        <FormField
          title="Height"
          value={height}
          handleChangeText={(text) => setHeight(text)}
          placeholder="Height"
        />
        <CustomButton title="Submit" onPress={handleSubmit} />
        <CustomButton title="Previous" onPress={onPrevious} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bmi;
