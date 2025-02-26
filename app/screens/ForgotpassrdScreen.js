import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Button, LightHeader, Input} from '../components';
import {isEmpty, isEmailValidate} from '../utils/Validation';
import LayoutStyle from '../styles/LayoutStyle';
import AuthStyle from '../styles/AuthStyle';
import Colors from '../styles/Colors';
import MESSAGE from '../utils/Messages';

const ForgotpassrdScreen = props => {
  const [email, setEmail] = useState('');
  const [emailMsg, setEmailMsg] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [emailPress, setEmailPress] = useState(true);

  const [passwd, setPasswd] = useState('');
  const [passwdMsg, setPasswdMsg] = useState('');
  const [ispasswd, setIsPasswd] = useState(false);
  const [passwdPress, setPasswdPress] = useState(true);

  const gotoSignupScreen = () => {
    props.navigation.navigate('Signup');
  };

  const onChangePasswd = text => {
    setPasswd(text);
    setIsPasswd(false);
  };

  const onChangeEmail = text => {
    setEmail(text.toLowerCase());
    setIsEmail(false);
  };
  const gotoForgotScreen = () => {};

  const isEmailValidation = () => {
    if (isEmpty(email)) {
      setIsEmail(true);
      setEmailMsg(MESSAGE.email);
      return false;
    } else {
      return true;
    }
  };

  const isCodeValidation = () => {
    if (isEmpty(officeCode)) {
      setIsOfficeCode(true);
      setOfficeCodeMsg(MESSAGE.officeCode);
      return false;
    } else {
      return true;
    }
  };

  const isPasswdValidation = () => {
    if (isEmpty(passwd)) {
      setIsPasswd(true);
      setPasswdMsg(MESSAGE.passwd);
      return false;
    } else {
      return true;
    }
  };

  const gotoConfirmInfo = () => {
    if (codeScreen) {
      const isEmailValid = isEmailValidation();
      const isCodeValid = isCodeValidation();

      if (isEmailValid && isCodeValid) {
        if (isEmailValidate(email)) {
          setIsEmail(true);
          setEmailMsg(MESSAGE.validateEmail);
          return false;
        }
        const params = {
          email: email,
          code: officeCode,
        };
        dispatch(loginWithCodeRequest(params, props.navigation));
      }
    } else {
      const isEmailValid = isEmailValidation();
      const isPasswdValid = isPasswdValidation();
      if (isEmailValid && isPasswdValid) {
        if (isEmailValidate(email)) {
          setIsEmail(true);
          setEmailMsg(MESSAGE.validateEmail);
          return false;
        }
        const params = {
          email: email,
          password: passwd,
          device_token: '',
        };
        dispatch(loginRequest(params, props.navigation));
      }
    }
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? undefined : 'height'}
        style={[AuthStyle.mainContainer]}>
        <LightHeader
          isLogo={true}
          iconName={'angle-left'}
          iconSize={24}
          iconSetName={'FontAwesome6'}
          iconColor={Colors.backArrowBlack}
          headerBG={Colors.white}
          statusBG={Colors.white}
        />
        <View style={[AuthStyle.loginContainer]}>
          <Text style={[AuthStyle.headerLabel]}>{'Forgot Password'}</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[AuthStyle.loginContainer]}>
          <View>
            <Input
              isDarkBG={false}
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
              inputMainStyle={{...LayoutStyle.marginVertical20}}
            />
          </View>

          <View style={{...LayoutStyle.paddingBottom30, paddingTop: '50%'}}>
            <Button
              btnName={'Submit'}
              onPress={() => gotoConfirmInfo()}
              isBtnActive={true}
              btnColor={Colors.secondary}
              btnLabelColor={Colors.white}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={[AuthStyle.bottomTextContain]}>
        <Text style={[AuthStyle.bottomText]}>{'New Company?'}</Text>
        <TouchableOpacity onPress={() => gotoSignupScreen()}>
          <Text style={[AuthStyle.bottomActiveText]}>{'Sign Up'}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ForgotpassrdScreen;
