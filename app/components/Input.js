import {View, Text, TextInput} from 'react-native';
import React from 'react';
import ComponentStyles from '../styles/ComponentStyles';
import LayoutStyle from '../styles/LayoutStyle';
import Colors from '../styles/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icons from './Icons';

const Input = ({
  isDarkBG,
  forwardRef,
  value,
  placeholder,
  maxLength,
  secureTextEntry,
  onChangeText,
  onSubmitEditing,
  multiline,
  numberOfLines,
  iconName,
  iconSetName,
  isValidationShow,
  validationMessage,
  keyboardType,
  returnKeyType,
  blurOnSubmit,
  onChange,
  onFocus,
  onBlur,
  isPressOut,
  onPressFocus,
  isRightIcon,
  rightIconColor,
  rightIconName,
  inputMainStyle,
  inputStyle,
  iconMainstyle,
  focusLabelMainStyle,
  inputLabelStyle,
  onKeyPress,
  props,
}) => {
  const inputValue = value.trim();
  return (
    <View style={[inputMainStyle]}>
      <View>
        {isPressOut ? (
          <View
            style={[
              ComponentStyles.textInputContainer,
              {
                borderBottomColor: isValidationShow
                  ? Colors.danger
                  : isDarkBG
                  ? Colors.inputBorderDark
                  : Colors.inputBorder,
              },
            ]}>
            <Icons
              iconName={iconName}
              iconSetName={iconSetName}
              iconColor={isDarkBG ? Colors.inputIconDark : Colors.inputIcon}
              iconSize={22}
              iconMainstyle={iconMainstyle}
            />

            <TextInput
              style={[
                ComponentStyles.textInput,
                {
                  color: isDarkBG
                    ? Colors.inputWhiteText
                    : Colors.inputBlackText,
                },
                inputStyle,
              ]}
              cursorColor={
                isDarkBG ? Colors.inputWhiteText : Colors.inputBlackText
              }
              ref={forwardRef}
              value={value}
              placeholder={placeholder}
              placeholderTextColor={
                isDarkBG ? Colors.placeholder70 : Colors.placeholder
              }
              maxLength={maxLength}
              secureTextEntry={secureTextEntry}
              onChangeText={onChangeText}
              onSubmitEditing={onSubmitEditing}
              multiline={multiline}
              numberOfLines={numberOfLines}
              keyboardType={keyboardType}
              returnKeyType={returnKeyType}
              blurOnSubmit={blurOnSubmit}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onKeyPress={onKeyPress}
            />
          </View>
        ) : (
          <TouchableOpacity ref={forwardRef} onPress={onPressFocus}>
            <View
              style={[
                ComponentStyles.focusOutView,
                focusLabelMainStyle,
                isRightIcon ? {justifyContent: 'space-between'} : null,
              ]}>
              <View style={[ComponentStyles.inputLableKey, inputLabelStyle]}>
                <Text
                  style={[
                    ComponentStyles.inputLabel,
                    {...LayoutStyle.fontSize12},
                  ]}>
                  {placeholder + ':  '}
                </Text>
                <Text
                  style={[
                    ComponentStyles.inputLabel,
                    {
                      color: isDarkBG
                        ? Colors.inputWhiteText
                        : Colors.inputBlackText,
                    },
                  ]}>
                  {/* {secureTextEntry
										? `${value}`
											? "*********"
											: ""
										: multiline
										? `${value}`
										: placeholder.length > 10
										? value?.length < 20
											? `${value}`
											: `${value.substring(0, 20)}...`
										: value?.length < 20
										? `${value}`
										: `${value.substring(0, 20)}...`} */}

                  {secureTextEntry && `${inputValue}`
                    ? '*********'
                    : multiline
                    ? `${value}`
                    : placeholder.length > 10
                    ? inputValue?.length > 16
                      ? `${inputValue.substring(0, 16)}...`
                      : `${inputValue}`
                    : placeholder.length < 10
                    ? inputValue?.length > 20
                      ? `${inputValue.substring(0, 20)}...`
                      : `${inputValue}`
                    : `${inputValue}`}
                </Text>
              </View>

              {isRightIcon ? (
                <Icons
                  iconColor={rightIconColor}
                  iconName={rightIconName}
                  iconSetName={'MaterialCommunityIcons'}
                  iconSize={14}
                />
              ) : null}
            </View>
          </TouchableOpacity>
        )}
      </View>
      {isValidationShow ? (
        <Text style={[ComponentStyles.validationMsg]}>{validationMessage}</Text>
      ) : null}
    </View>
  );
};

export default Input;
