import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,FlatList,ActivityIndicator } from "react-native";
import DayListItem from "../src/components/core/DayListItem";
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import {AmaticSC_400Regular,AmaticSC_700Bold} from '@expo-google-fonts/amatic-sc';
import BottomSheet from '.';

SplashScreen.preventAutoHideAsync();

export default function HomeScreen(){
  const days = [...Array(24)].map((val,index)=>index+1);
  const [fontsLoaded,fontserror]=useFonts({
    Inter:Inter_900Black,
    Amatic:AmaticSC_400Regular,
    AmaticBold:AmaticSC_700Bold,
  })

  useEffect(()=>{
    if(fontsLoaded || fontserror){
     SplashScreen.hideAsync();
    }
  },[fontsLoaded,fontserror])

  if(!fontsLoaded && !fontserror){
     return null;
   }

  return (
    <View style={styles.container}>
      {/* <FlatList
        data={days}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({item}) => (
         <DayListItem data={item}/>
        )}
      /> */}
      <BottomSheet/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    gap: 10,
    
  },

  listContainer: {
    gap: 10,
    padding:10,
  },
  column:{
    gap:10,

  }
});
