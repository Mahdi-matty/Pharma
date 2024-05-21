import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary item-center flex-row">
      <TextInput
        className="flex-1 text-white "
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        secureTextEntry={title === "Password" && !showPassword}
      />
     
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
        ></TouchableOpacity>
    </View>
  );
};

export default SearchInput;
