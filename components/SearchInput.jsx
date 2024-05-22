import { View, Alert, Text, TextInput, TouchableOpacity } from "react-native";
import {usePathname, router} from 'expo-router'
import { useState } from "react";

const SearchInput = ({initialQuery}) => {
  const pathName = usePathname()
  const [query, setqQery] = useState(initialQuery || '')
  return (
    <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary item-center flex-row">
      {/* <TextInput
        className="flex-1 text-white "
        value={query}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        secureTextEntry={title === "Password" && !showPassword}
      /> */}
      <TextInput
        className="flex-1 text-white "
        value={query}
        placeholder='seach for something'
        placeholderTextColor="#7b7b8b"
        onChangeText={(e)=>setqQery(e)}
      />
     
        <TouchableOpacity
          onPress={()=>{
            if(!query){
              return Alert.alert("field can't be empty")
            }
            if(pathName.startsWith('/search'))router.setParams({query})
            else router.push(`/search/${query}`)
          }}
        ></TouchableOpacity>
    </View>
  );
};

export default SearchInput;
