import React from "react";
import { View, StatusBar } from 'react-native';

const CustomStatusBar = ({backgroundColor, ...props}) =>{
    return (
      <View style={{ backgroundColor, height: 10 }}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </View>
    )
  }

export default CustomStatusBar;