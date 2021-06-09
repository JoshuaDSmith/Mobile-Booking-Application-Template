import React, {useState, useContext} from 'react';
import CustomStyle from '../../Styles';
import {StyleSheet, Text, View, Platform} from 'react-native';

const TextHeader = props => {
  return <Text style={styles.SectionText}>{props.TextValue}</Text>;
};

export default TextHeader;

const styles = StyleSheet.create({
  SectionText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: CustomStyle.FontStyle2,
    fontSize: CustomStyle.TextSize2,
  },
});
