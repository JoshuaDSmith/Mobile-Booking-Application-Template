import React, {useState} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import CustomStyle from '../../Styles';

const SeeMoreButton = props => {
  // ON PRESS REDIRECT USER TO LINK DEFINED IN THE CMS PAGE
  return (
    <TouchableOpacity style={props.AdditionalStyling} onPress={props.Direct}>
      <Text style={styles.SectionButtonText}> {props.ButtonText} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  SectionButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Antonio-ExtraLight',
    fontSize: CustomStyle.TextSize,
  },
});

export default SeeMoreButton;
