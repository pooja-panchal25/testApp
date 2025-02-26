import {StyleSheet} from 'react-native';
import LayoutStyle from './LayoutStyle';
import Colors from './Colors';
import FontFamily from '../assets/fonts/FontFamily';
const CommonStyles = StyleSheet.create({
  // Container styles
  mainContainer: {
    flex: 1,
  },
  mainPadding: {
    ...LayoutStyle.padding20,
  },
  mainPaddingH: {
    ...LayoutStyle.paddingHorizontal20,
  },
  mainPaddingV: {
    ...LayoutStyle.paddingVertical20,
  },
  directionRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  directionRowSB: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backgroundWhite: {
    backgroundColor: Colors.white,
  },
  emptyDataWhite: {
    fontFamily: FontFamily.PoppinsMedium,
    ...LayoutStyle.fontSize12,
    color: Colors.labelWhite,
    ...LayoutStyle.paddingVertical30,
  },
  emptyDataBlack: {
    fontFamily: FontFamily.PoppinsMedium,
    ...LayoutStyle.fontSize12,
    color: Colors.labelBlack,
    ...LayoutStyle.paddingVertical30,
  },
  emptyDataAlign: {justifyContent: 'center', alignItems: 'center'},
});

export default CommonStyles;
