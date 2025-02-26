import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icons from './Icons';
import ComponentStyles from '../styles/ComponentStyles';
import Colors from '../styles/Colors';

const DarkHeader = ({
  whiteLabel,
  grayLabel,
  iconName,
  iconSetName,
  iconColor,
  iconSize,
  onPress,
  isLogo,
  DarkHeaderMainStyle,
  props,
}) => {
  return (
    <View>
      <SafeAreaView style={[ComponentStyles.darkContainer]}>
        <StatusBar
          translucent
          barStyle={'light-content'}
          animated={true}
          backgroundColor={Colors.primary}
          networkActivityIndicatorVisible={true}
        />
      </SafeAreaView>
      <View style={[ComponentStyles.headerContainer, DarkHeaderMainStyle]}>
        <TouchableOpacity onPress={onPress}>
          <View style={[ComponentStyles.backArrow]}>
            <Icons
              iconName={iconName}
              iconSetName={iconSetName}
              iconColor={iconColor}
              iconSize={iconSize}
            />
          </View>
        </TouchableOpacity>
        <Text style={[ComponentStyles.headerTextWhite]}>{whiteLabel}</Text>
        {/* {isLogo ? (
          <View>
            <Image
              source={IMAGES.appWhiteLogo}
              style={[ComponentStyles.darkLogo]}
            />
          </View>
        ) : (
          <View>
            <View style={[ComponentStyles.labelContainer]}>
              <Text style={[ComponentStyles.headerTextWhite]}>
                {whiteLabel}
              </Text>
              {grayLabel ? (
                <Text style={[ComponentStyles.headerTextGray]}>
                  {grayLabel}
                </Text>
              ) : null}
            </View>
          </View>
        )} */}
      </View>
    </View>
  );
};

export default DarkHeader;
