import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    container: {
      flex: 1,
      paddingHorizontal: 22,
      marginBottom: 15
    },
    resultContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      marginBottom: 50,
    },
    buttonsContainer: {
      flex: 2,
      justifyContent: 'space-between',
    },
    operation: {
      fontSize: 30,
      color: '#cbcbcb',
      fontWeight: '300',
      marginBottom: 5,
    },
    result: {
      fontSize: 95,
      fontWeight: '300',
    },
    rowContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
    },
    orangeButton: {
      backgroundColor: '#db811a',
    },
    grayButton: {
      backgroundColor: '#a3b0c4',
    },
  });