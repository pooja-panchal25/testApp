import {Platform, StyleSheet} from 'react-native';
import CommonStyles from './CommonStyles';
import LayoutStyle from './LayoutStyle';
import Colors from './Colors';
import {heightPercentageToDP as hp} from './ResponsiveScreens';
import FontFamily from '../assets/fonts/FontFamily';

const AuthStyle = StyleSheet.create({
  testSmallText: {
    alignSelf: 'flex-end',
    marginTop: 10,
    ...LayoutStyle.fontSize12,
    fontFamily: FontFamily.PoppinsMedium,
    color: Colors.secondary,
  },
  mainContainer: {
    ...CommonStyles.mainContainer,
  },
  backgroundWhite: {
    ...CommonStyles.backgroundWhite,
  },
  // Splash screen
  splashContainer: {
    flex: 0.9,
    ...CommonStyles.mainPadding,
    ...CommonStyles.flexCol,
    justifyContent: 'space-around',
  },
  bgImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  gradientImgBG: {
    height: '100%',
    width: '100%',
  },
  textLogoWhite: {width: '35%', height: '25%', alignSelf: 'center'},
  appMsg: {
    ...LayoutStyle.fontSize14,
    color: Colors.labelWhite,
    fontFamily: FontFamily.PoppinsRegular,
    textAlign: 'center',
  },
  arrowBorder: {
    ...LayoutStyle.padding15,
    borderWidth: 2,
    borderRadius: 60,
    alignSelf: 'center',
    borderColor: Colors.secondary,
  },
  arrowIconContainer: {
    ...LayoutStyle.padding25,
    backgroundColor: Colors.secondary,
    alignSelf: 'center',
    borderRadius: 50,
  },

  // EULA Screen

  formContainer: {
    maxHeight: '70%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: Colors.primary,
    ...CommonStyles.mainPaddingH,
    ...LayoutStyle.paddingBottom20,
  },
  overrideGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  updateDate: {
    color: Colors.labelGray,
    fontFamily: FontFamily.PoppinsRegular,
    ...LayoutStyle.fontSize10,
    // ...LayoutStyle.marginBottom20,
    ...LayoutStyle.marginBottom10,
  },
  eulaDescription: {
    color: Colors.labelWhite,
    fontFamily: FontFamily.PoppinsRegular,
    ...LayoutStyle.fontSize12,
    lineHeight: Platform.OS === 'android' ? 24 : 22,
  },
  btnContain: {
    justifyContent: 'center',
    ...LayoutStyle.marginHorizontal20,
    ...LayoutStyle.paddingVertical20,
  },
  // Login screen
  loginContainer: {
    backgroundColor: Colors.white,
    ...CommonStyles.mainPadding,
  },
  headerLabel: {
    ...LayoutStyle.fontSize30,
    color: Colors.labelBlack,
    fontFamily: FontFamily.PoppinsSemiBold,
  },
  bottomTextContain: {
    ...CommonStyles.directionRowCenter,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    paddingBottom: '30%',
  },
  bottomText: {
    fontFamily: FontFamily.PoppinsMedium,
    ...LayoutStyle.fontSize12,
    color: Colors.labelBlack,
  },
  flexContainer: {flex: 1, backgroundColor: Colors.white},
  bottomActiveText: {
    fontFamily: FontFamily.PoppinsMedium,
    ...LayoutStyle.fontSize12,
    color: Colors.labelBlue,
    marginLeft: '5%',
  },
  loginScrollViewStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 1,
  },

  // Business info screen
  businessContainer: {
    backgroundColor: Colors.white,
  },
  companyName: {
    fontFamily: FontFamily.PoppinsSemiBold,
    ...LayoutStyle.fontSize20,
    color: Colors.labelBlue,
  },
  businessInfo: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: Colors.cardBorder,
    borderBottomColor: Colors.cardBorder,
    paddingVertical: '16%',
    ...LayoutStyle.paddingHorizontal20,
    ...LayoutStyle.marginTop20,
  },
  companyAddr: {
    fontFamily: FontFamily.PoppinsRegular,
    ...LayoutStyle.fontSize14,
    color: Colors.labelBlack,
    ...LayoutStyle.marginTop10,
  },
  busiBtnContainer: {
    ...CommonStyles.mainPaddingH,
    paddingBottom: hp(6),
  },

  // Verify account Screen

  verifyContainer: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: Colors.primary,
    ...CommonStyles.mainPaddingH,
    ...LayoutStyle.paddingBottom20,
  },
  headerTitle: {
    fontFamily: FontFamily.PoppinsRegular,
    color: Colors.inputLabel,
    ...LayoutStyle.fontSize14,
    ...LayoutStyle.marginBottom10,
  },
  resendBtnContainer: {
    ...LayoutStyle.padding25,
  },
  resendBtn: {
    fontFamily: FontFamily.PoppinsMedium,
    color: Colors.secondary,
    ...LayoutStyle.fontSize16,
    ...LayoutStyle.paddingTop10,
    alignSelf: 'center',
  },
  verifyBtn: {...LayoutStyle.paddingTop30, ...CommonStyles.mainPaddingH},

  // Password screen
  passwdContainer: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: Colors.primary,
    ...CommonStyles.mainPaddingH,
    ...LayoutStyle.paddingBottom20,
  },
  // Sign up Screen
  // Password screen
  signUpContainer: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: Colors.primary,
    ...CommonStyles.mainPaddingH,
    ...LayoutStyle.paddingBottom20,
  },
  nextBtn: {...LayoutStyle.paddingTop30, ...CommonStyles.mainPaddingH},
});

export default AuthStyle;
