import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { darkTheme, lightTheme, headerStyles } from '../../theme';
import { useTheme } from '../../context';

const DarkIcon = require('../../../assets/dark_mode.png');
const LightIcon = require('../../../assets/light_mode.png');

export const Header = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <View style={headerStyles.container}>
      <TouchableOpacity
        style={[
          headerStyles.button,
          {
            backgroundColor:
              theme === 'light'
                ? lightTheme.iconThemeMode
                : darkTheme.iconThemeMode,
          },
        ]}
        activeOpacity={0.6}
        onPress={changeTheme}
      >
        <Image
          style={headerStyles.icon}
          source={theme === 'dark' ? LightIcon : DarkIcon}
        />
      </TouchableOpacity>
    </View>
  );
};
