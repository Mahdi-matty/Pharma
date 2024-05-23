import { ScrollView, Text, View } from 'react-native'
import  { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {
  const [Form, setForm] = useState({
    username: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleSubmit = ()=>{

  }
  return (
    <SafeAreaView className='bg-primary h-full' >
      <ScrollView >
        <View className='w-full justify-center min-h-[85vh] px-4 my-6'>
          <FormField 
          title='Username'
          value={Form.username}
          handleChangeText={(e)=>setForm({...Form, username:e})}/>
          <FormField 
          title='Password'
          value={Form.password}
          handleChangeText={(e)=>setForm({...Form, password:e})}/>
          <CustomButton 
          title='sign in'
          onPress={handleSubmit}
          containerStyles='mt-7'
          isLoading={isSubmitting}/>
        </View>
        <View>
          <Text>Don't have an account? </Text>
          <Link href='/sign-up'>SignUp</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
