import React, { useMemo, useRef } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

const Index = () => {
  const snapPoints = useMemo(() => ["25%", "50%", "70%"], []);
  const bottomSheetRef = useRef(null);

  const handleClosePress = () => bottomSheetRef.current?.close();
  const handleOpenPress = () => bottomSheetRef.current?.snapToIndex(0);

  return (
    <View style={styles.container}>
        <View style={styles.filterBar}>
            <Button title="Open" onPress={handleOpenPress}></Button>
            <Button title="Close" onPress={handleClosePress}></Button>
        </View>
      <BottomSheet 
        index={-1}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
       >
        <View >
          <Text>Kadak</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
  contentContainer: {
    backgroundColor: "white",
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
  },
  filterBar:{
    flexDirection:'row',
    justifyContent:'center',
    gap:120,
    paddingVertical:10,
    backgroundColor:"gray",
    position:'absolute',
    left: 0,
    right: 0,
    bottom: 0,

  }
});

export default Index;
