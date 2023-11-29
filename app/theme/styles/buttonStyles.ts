import { StyleSheet } from "react-native";


export const buttonStyles = StyleSheet.create({
    button: {
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 26,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.43,
      shadowRadius: 12.81,
      elevation: 16,
    },
    text: {
      fontSize: 35,
      fontWeight: '200',
    },
  });
