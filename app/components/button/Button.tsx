import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { lightTheme, darkTheme, backgroundOrange, backgroundGray, buttonStyles } from '../../theme';
import { useTheme } from '../../context';

interface ButtonProps {
  text: string;
  action: () => void;
  bgOrange?: boolean;
  fwidth?: boolean;
  isGrayBg?: boolean;
}

export const Button = ({
  action,
  text,
  bgOrange,
  fwidth,
  isGrayBg,
}: ButtonProps) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      onPress={action}
      style={[
        buttonStyles.button,
        {
          width: fwidth ? 170 : 80,
          backgroundColor: bgOrange
            ? backgroundOrange : isGrayBg
            ? backgroundGray
            : theme === 'light'
            ? lightTheme.buttonBackground
            : darkTheme.buttonBackground,
        },
      ]}
      activeOpacity={0.6}
    >
      <Text
        style={[
          buttonStyles.text,
          {
            color: bgOrange
              ? 'white'
              : theme === 'light'
              ? lightTheme.textColor
              : darkTheme.textColor,
          },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
