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

const LoginScreen = props => {
  // Init state variables
  const [codeScreen, setCodeScreen] = useState(false);

  const [officeCode, setOfficeCode] = useState('');
  const [officeCodeMsg, setOfficeCodeMsg] = useState('');
  const [isOfficeCode, setIsOfficeCode] = useState(false);
  const [officeCodePress, setOfficeCodePress] = useState(true);

  // const [email, setEmail] = useState("owner@gmail.com");
  // const [email, setEmail] = useState("emplyee@gmail.com");
  // const [email, setEmail] = useState("pooja8@gmail.com");
  const [email, setEmail] = useState('');
  const [emailMsg, setEmailMsg] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [emailPress, setEmailPress] = useState(true);

  // const [passwd, setPasswd] = useState("Qwer1234@");
  // const [passwd, setPasswd] = useState("1234Qwer@");
  const [passwd, setPasswd] = useState('');
  const [passwdMsg, setPasswdMsg] = useState('');
  const [ispasswd, setIsPasswd] = useState(false);
  const [passwdPress, setPasswdPress] = useState(true);

  const gotoSplashScreen = () => {
    props.navigation.navigate('Splash');
  };

  const gotoSignupScreen = () => {
    props.navigation.navigate('Register');
  };

  const onChangePasswd = text => {
    setPasswd(text);
    setIsPasswd(false);
  };

  const onChangeEmail = text => {
    setEmail(text.toLowerCase());
    setIsEmail(false);
  };
  const gotoForgotScreen = () => {
    props.navigation.navigate('ForgotPassrd');
  };

  const onChangeOfficeCode = text => {
    setOfficeCode(text);
    setIsOfficeCode(false);
  };

  const gotoSwapScreen = () => {
    setCodeScreen(!codeScreen);
    setIsEmail(false);
    setIsPasswd(false);
    setIsOfficeCode(false);
    setEmailPress(true);
    setOfficeCodePress(true);
    setPasswdPress(true);
    setEmail('');
    setOfficeCode('');
    setPasswd('');
  };

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
          <Text style={[AuthStyle.headerLabel]}>{'Login'}</Text>
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
            {/* {codeScreen ? (
              <View>
                <Input
                  isDarkBG={false}
                  value={officeCode}
                  placeholder={'Code'}
                  maxLength={8}
                  onChangeText={text => onChangeOfficeCode(text)}
                  iconName={'business'}
                  iconSetName={'MaterialIcons'}
                  isValidationShow={isOfficeCode}
                  validationMessage={officeCodeMsg}
                  keyboardType={'phone-pad'}
                  returnKeyType={'done'}
                  blurOnSubmit={true}
                  onFocus={() => setOfficeCodePress(true)}
                  onBlur={() => setOfficeCodePress(false)}
                  isPressOut={officeCodePress}
                  onPressFocus={() => setOfficeCodePress(true)}
                />
              </View>
            ) : ( */}
            <View>
              <Input
                isDarkBG={false}
                value={passwd}
                placeholder={'Password'}
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
            </View>
            {/* )} */}
            <TouchableOpacity
              onPress={() => gotoForgotScreen()}
              style={{justifyContent: 'flex-end'}}>
              <Text style={[AuthStyle.testSmallText]}>{'Forgot password'}</Text>
            </TouchableOpacity>
          </View>

          <View style={{...LayoutStyle.paddingBottom30, paddingTop: '50%'}}>
            <Button
              btnName={'Login'}
              onPress={() => gotoConfirmInfo()}
              isBtnActive={true}
              btnColor={Colors.secondary}
              btnLabelColor={Colors.white}
            />
          </View>
          <View style={[AuthStyle.bottomTextContain]}>
            <Text style={[AuthStyle.bottomText]}>{'New User?'}</Text>
            <TouchableOpacity onPress={() => gotoSignupScreen()}>
              <Text style={[AuthStyle.bottomActiveText]}>{'Sign Up'}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default LoginScreen;
