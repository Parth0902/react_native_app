import { Stack } from "expo-router";

export default function RootLayout(){
    return(
        <Stack screenOptions={{
        headerStyle:{
            backgroundColor:'red',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color:'blue'
          },
          headerTitleAlign:'center',
          }}>
            {/* <Stack.Screen name='index' options={{title:"Home Screen"}}></Stack.Screen> */}
            <Stack.Screen name='(tabs)' options={{headerShown:false}}></Stack.Screen>
        </Stack>
    )
}