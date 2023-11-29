import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header } from '../components';
import { useCalculator } from '../hooks';
import { Button } from '../components';
import { useTheme } from '../context';
import { darkTheme, lightTheme, homeStyles } from '../theme';

export const HomeScreen = () => {
  const { theme } = useTheme();
  const {
    previousNumber,
    number,
    calculate,
    clean,
    deleteLastNumber,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    mountOperation,
    changePositiveNegative,
  } = useCalculator();

  return (
    <SafeAreaView
      style={[
        homeStyles.safeArea,
        {
          backgroundColor:
            theme === 'light' ? lightTheme.background : darkTheme.background,
        },
      ]}
    >
      <View style={homeStyles.container}>
        <Header />
        <View style={homeStyles.resultContainer}>
          {previousNumber !== '0' && (
            <Text style={homeStyles.operation}>{previousNumber}</Text>
          )}
          <Text
            style={[
              homeStyles.result,
              { color: theme === 'light' ? 'black' : 'white' },
            ]}
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            {number}
          </Text>
        </View>

        <View style={homeStyles.buttonsContainer}>
          <View style={homeStyles.rowContainer}>
            <Button action={clean} text="C" isGrayBg />
            <Button action={changePositiveNegative} text="+/-" isGrayBg />
            <Button action={deleteLastNumber} text="del" isGrayBg />
            <Button action={divideOperation} text="÷" bgOrange />
          </View>

          <View style={homeStyles.rowContainer}>
            <Button action={() => mountOperation('7')} text="7" />
            <Button action={() => mountOperation('8')} text="8" />
            <Button action={() => mountOperation('9')} text="9" />
            <Button action={multiplyOperation} text="×" bgOrange />
          </View>

          <View style={homeStyles.rowContainer}>
            <Button action={() => mountOperation('4')} text="4" />
            <Button action={() => mountOperation('5')} text="5" />
            <Button action={() => mountOperation('6')} text="6" />
            <Button action={subtractOperation} text="-" bgOrange />
          </View>

          <View style={homeStyles.rowContainer}>
            <Button action={() => mountOperation('1')} text="1" />
            <Button action={() => mountOperation('2')} text="2" />
            <Button action={() => mountOperation('3')} text="3" />
            <Button action={addOperation} text="+" bgOrange />
          </View>

          <View style={homeStyles.rowContainer}>
            <Button action={() => mountOperation('0')} text="0" fwidth />
            <Button action={() => mountOperation('.')} text="." />
            <Button action={calculate} text="=" bgOrange />
          </View>
        </View>
      </View>
      <StatusBar style={theme === 'light' ? 'dark' : 'light'} />
    </SafeAreaView>
  );
};
