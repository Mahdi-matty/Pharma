import { ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "./FormField";
import DateTimePicker from "@react-native-community/datetimepicker";
import CustomButton from "./CustomButton";

const Identitiy = ({onSubmit}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthDate;
    setShowDatePicker(false);
    setBirthDate(currentDate);
  };

  const handleSubmit = () => {
    onSubmit({ firstName, lastName, birthDate });
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <FormField
          title="FirstName"
          value={firstName}
          handleChangeText={(text) => setFirstName({ text })}
          placeholder={"first Name"}
        />
        <FormField
          title="LastName"
          value={lastName}
          handleChangeText={(text) => setLastName({ text })}
          placeholder={"Last Name"}
        />
        <View style={{ margin: 10 }}>
          <Text>Birthdate: {birthDate.toDateString()}</Text>
          <Button className='bg-blue-400 h-5' title="Select Birthdate" onPress={() => setShowDatePicker(true)} />
        </View>
        {showDatePicker && (
          <DateTimePicker
            value={birthDate}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}
        <CustomButton title="Submit" onPress={handleSubmit} />  
      </ScrollView>
    </SafeAreaView>
  );
};

export default Identitiy;
