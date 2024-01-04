import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Stack} from 'expo-router';
const Layout = () => {
    return (
        <Stack screenOptions>
            <Stack.Screen name='index' ></Stack.Screen>
        </Stack>
    );
}

const styles = StyleSheet.create({})

export default Layout;
