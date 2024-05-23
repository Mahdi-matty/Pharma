import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from '../context/GlobalProvider';

export default function App() {
  const {isLoading, isLoggedIn} = useGlobalContext()

  if (!isLoading&& isLoggedIn) {return <Redirect href='/home'/>}
  return (
    <SafeAreaView className='bg-white h-full' >
      <ScrollView className='h-full'>
        <View className='w-full justify-center item-center h-full px-4'>
          <Text>
            Pharma
          </Text>

        </View>
        <CustomButton 
        title='continue with email'
        handlePress = {()=>router.push('/sign-in')}/>

      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light'/>
     
    </SafeAreaView>
  );
}

