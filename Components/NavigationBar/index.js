import CustomStyle from '../../Styles';
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const HeaderButtonComponent = props => {
  return (
    <TouchableOpacity
      style={[styles.sectionDropMenuButtonColors, styles.sectionBorderBottom]}
      onPress={props.Direct}>
      <Text style={[styles.sectionDropMenuFontSize, props.StyleButton]}>
        {props.HeaderText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sectionDropMenuFontSize: {
    fontSize: CustomStyle.TextSize4,
  },
});

export default HeaderButtonComponent;
