import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { HomeScreen } from './app/screens/HomeScreen';
import { lightTheme, darkTheme } from './app/theme';
import { ThemeProvider, useTheme } from './app/context';

export default function App() {

  return (
    <ThemeProvider>
        <HomeScreen />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
