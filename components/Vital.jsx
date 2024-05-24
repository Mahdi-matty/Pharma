import React, { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "./FormField";
import CustomButton from "./CustomButton";

const Vital = ({ onSubmit, onPrevious }) => {
  const [bloodPressure, setBloodPressure] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [temp, setTemp] = useState(37);

  const handleSubmit = () => {
    onSubmit({ bloodPressure, heartRate, temp });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <FormField
          className="bg-white border-blue-500 border-4 p-8"
          title="blood pressure"
          value={bloodPressure}
          handleChangeText={(text) => setBloodPressure(text)}
          placeholder="blood pressure"
        />
        <FormField
          className="bg-white border-blue-500 border-4 p-8"
          title="heart rate"
          value={heartRate}
          handleChangeText={(text) => setHeartRate(text)}
          placeholder="heart rate"
        />
        <FormField
          className="bg-white border-blue-500 border-4 p-8"
          title="tempreture"
          value={temp}
          handleChangeText={(text) => setTemp(text)}
          placeholder="tempreture"
        />
        <CustomButton title="Submit" onPress={handleSubmit} />
        <CustomButton title="Previous" onPress={onPrevious} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Vital;
