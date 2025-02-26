import {View, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import {CommonActions} from '@react-navigation/native';
import {Button, DarkHeader, Input} from '../components';
import {
  formatMobileNumber,
  isEmpty,
  isMobileValidate,
  isValidteSpacialChar,
  isZipCode,
  isPasswdValidate,
  isEmailValidate,
} from '../utils/Validation';
import LayoutStyle from '../styles/LayoutStyle';
import AuthStyle from '../styles/AuthStyle';
import Colors from '../styles/Colors';
import MESSAGE from '../utils/Messages';

const RegisterScreen = props => {
  const [passwd, setPasswd] = useState('');
  const [passwdMsg, setPasswdMsg] = useState('');
  const [ispasswd, setIsPasswd] = useState(false);
  const [passwdPress, setPasswdPress] = useState(true);

  const [confirmPasswd, setConfirmPasswd] = useState('');
  const [confirmPasswdMsg, setConfirmPasswdMsg] = useState('');
  const [isconfirmPasswd, setIsConfirmPasswd] = useState(false);
  const [confirmPasswdPress, setConfirmPasswdPress] = useState(true);

  const [name, setName] = useState('');
  const [nameMsg, setNameMsg] = useState('');
  const [isName, setIsName] = useState(false);
  const [namePress, setNamePress] = useState(true);

  const [phone, setPhone] = useState(''); //For user display as formatter
  const [phoneNumb, setPhoneNumb] = useState(''); //For API call
  const [phoneMsg, setPhoneMsg] = useState('');
  const [isPhone, setIsPhone] = useState(false);
  const [phonePress, setPhonePress] = useState(true);
  const [backPhone, setBackPhone] = useState('');

  const [email, setEmail] = useState('');
  const [emailMsg, setEmailMsg] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [emailPress, setEmailPress] = useState(true);

  const gotoLoginScreen = () => {
    props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Login'}],
      }),
    );
  };

  const onChangeName = text => {
    if (isValidteSpacialChar(text)) {
      setName(text);
      setIsName(false);
    }
  };

  const onChangePhone = text => {
    let formatedNo = text;
    setPhone(formatedNo);
    setPhoneNumb(text);
    setIsPhone(false);
  };

  const onChangeEmail = text => {
    setEmail(text.toLowerCase());
    setIsEmail(false);
  };

  const gotoRegister = () => {
    if (isEmpty(email)) {
      setIsEmail(true);
      setEmailMsg(MESSAGE.email);
      return false;
    }
    if (isEmailValidate(email)) {
      setIsEmail(true);
      setEmailMsg(MESSAGE.validateEmail);
      return false;
    }
    if (isEmpty(name)) {
      setIsName(true);
      setNameMsg(MESSAGE.fullName);
      return false;
    }
    if (isEmpty(phone)) {
      setIsPasswd(true);
      setPhoneMsg(MESSAGE.phone);
      return false;
    }
    if (isEmpty(passwd)) {
      setIsPasswd(true);
      setPasswdMsg(MESSAGE.passwd);
      return false;
    }
    if (isEmpty(confirmPasswd)) {
      setIsConfirmPasswd(true);
      setConfirmPasswdMsg(MESSAGE.confirmPasswd);
      return false;
    }

    if (passwd.trim() != confirmPasswd.trim()) {
      setIsConfirmPasswd(true);
      setConfirmPasswdMsg(MESSAGE.comparePasswd);
      return false;
    }
    gotoLoginScreen();
  };

  const onChangePasswd = text => {
    setPasswd(text);
    setIsPasswd(false);
  };

  const onChangeConfirmPasswd = text => {
    setConfirmPasswd(text);
    setIsConfirmPasswd(false);
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[AuthStyle.mainContainer, AuthStyle.backgroundWhite]}>
        <DarkHeader
          iconName={'angle-left'}
          iconSetName={'FontAwesome6'}
          iconColor={Colors.backArrowWhite}
          iconSize={24}
          whiteLabel={'Register'}
          onPress={() => gotoLoginScreen()}
        />

        <View>
          <View style={[AuthStyle.signUpContainer]}>
            <Input
              isDarkBG={true}
              value={email}
              placeholder={'Email'}
              maxLength={30}
              onChangeText={text => onChangeEmail(text)}
              iconName={'email-outline'}
              iconSetName={'MaterialCommunityIcons'}
              isValidationShow={isEmail}
              validationMessage={emailMsg}
              keyboardType={'email-address'}
              returnKeyType={'done'}
              blurOnSubmit={true}
              onFocus={() => setEmailPress(true)}
              onBlur={() => setEmailPress(false)}
              isPressOut={emailPress}
              onPressFocus={() => setEmailPress(true)}
              inputMainStyle={{...LayoutStyle.marginBottom20}}
            />
            <Input
              isDarkBG={true}
              value={name}
              placeholder={'Full Name'}
              maxLength={20}
              onChangeText={text => onChangeName(text)}
              iconName={'account-outline'}
              iconSetName={'MaterialCommunityIcons'}
              isValidationShow={isName}
              validationMessage={nameMsg}
              keyboardType={'default'}
              returnKeyType={'done'}
              blurOnSubmit={true}
              onFocus={() => setNamePress(true)}
              onBlur={() => setNamePress(false)}
              isPressOut={namePress}
              onPressFocus={() => setNamePress(true)}
              inputMainStyle={{...LayoutStyle.marginBottom20}}
            />
            <Input
              isDarkBG={true}
              value={phone}
              placeholder={'Cell Phone'}
              maxLength={10}
              onChangeText={text => onChangePhone(text)}
              iconName={'cellphone-dock'}
              iconSetName={'MaterialCommunityIcons'}
              isValidationShow={isPhone}
              validationMessage={phoneMsg}
              keyboardType={'phone-pad'}
              returnKeyType={'done'}
              blurOnSubmit={true}
              onFocus={() => setPhonePress(true)}
              onBlur={() => setPhonePress(false)}
              isPressOut={phonePress}
              onPressFocus={() => setPhonePress(true)}
              inputMainStyle={{...LayoutStyle.marginBottom20}}
            />
            <Input
              isDarkBG={true}
              value={passwd}
              placeholder={'Password'}
              maxLength={16}
              secureTextEntry={true}
              onChangeText={text => onChangePasswd(text)}
              iconName={'lock-outline'}
              iconSetName={'MaterialCommunityIcons'}
              isValidationShow={ispasswd}
              validationMessage={passwdMsg}
              keyboardType={'default'}
              returnKeyType={'done'}
              blurOnSubmit={true}
              onFocus={() => setPasswdPress(true)}
              onBlur={() => setPasswdPress(false)}
              isPressOut={passwdPress}
              onPressFocus={() => setPasswdPress(true)}
            />

            <Input
              isDarkBG={true}
              value={confirmPasswd}
              placeholder={'Confirm Password'}
              maxLength={16}
              secureTextEntry={true}
              onChangeText={text => onChangeConfirmPasswd(text)}
              iconName={'lock-outline'}
              iconSetName={'MaterialCommunityIcons'}
              isValidationShow={isconfirmPasswd}
              validationMessage={confirmPasswdMsg}
              keyboardType={'default'}
              returnKeyType={'done'}
              blurOnSubmit={true}
              onFocus={() => setConfirmPasswdPress(true)}
              onBlur={() => setConfirmPasswdPress(false)}
              isPressOut={confirmPasswdPress}
              onPressFocus={() => setConfirmPasswdPress(true)}
              inputMainStyle={{...LayoutStyle.marginVertical20}}
            />
          </View>
          <View style={[AuthStyle.nextBtn]}>
            <Button
              onPress={() => gotoRegister()}
              isBtnActive={true}
              btnName={'Register'}
              btnColor={Colors.secondary}
              btnLabelColor={Colors.white}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default RegisterScreen;
