import {View, Text} from 'react-native';
import React from 'react';
import ComponentStyles from '../styles/ComponentStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../styles/Colors';

const Button = ({
  btnName,
  btnColor,
  btnBorderColor,
  onPress,
  isBtnActive,
  btnWidth,
  btnLabelColor,
  props,
}) => {
  return (
    <TouchableOpacity disabled={isBtnActive ? false : true} onPress={onPress}>
      <View
        style={[
          ComponentStyles.btnContainer,
          {
            backgroundColor: isBtnActive ? btnColor : Colors.disableBtn,
            borderColor: btnBorderColor,
            borderWidth: btnWidth,
          },
        ]}>
        <Text style={[ComponentStyles.btnLabel, {color: btnLabelColor}]}>
          {btnName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default Button;
