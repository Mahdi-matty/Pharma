import React, { useState } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import Identity from './Identitiy';
import Bmi from './Bmi';
import Vital from './Vital'
import History from './History'
import CustomButton from './CustomButton';
// Import additional components as needed

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const steps = [
    { component: Identity, props: { onSubmit: handleNext } },
    { component: Bmi, props: { onSubmit: handleNext, onPrevious: handlePrevious } },
    { component: Vital, props: { onSubmit: handleNext, onPrevious: handlePrevious } },
    { component: History, props: { onSubmit: handleNext, onPrevious: handlePrevious } },
    // Add additional steps here
  ];

  const CurrentComponent = steps[currentStep].component;
  const currentProps = steps[currentStep].props;

  return (
    <SafeAreaView>
      <ScrollView>
        <CurrentComponent {...currentProps} />
        {currentStep > 0 && <CustomButton title="Previous" onPress={handlePrevious} />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Stepper;
