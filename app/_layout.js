import { useRouter } from 'expo-router';
import { Stack } from 'expo-router/stack';
import { useEffect } from 'react';
import { PaperProvider } from 'react-native-paper';

export default function AppLayout() {
  const router = useRouter();
  useEffect(() =>{
    router.push('screens/followers/followers')
  }, [])
  return (
  <PaperProvider>
    <Stack>
    <Stack.Screen name="(tabs)" options={{headerShown: false}} />
    <Stack.Screen name="auth/signIn" options={{headerShown: false}} />
    <Stack.Screen name="auth/signUp" options={{headerShown: false}} />
    <Stack.Screen name="screens/follower/[details]" options={{headerShown: true}} />
    
    
  </Stack>
  </PaperProvider>  
  
  )
}