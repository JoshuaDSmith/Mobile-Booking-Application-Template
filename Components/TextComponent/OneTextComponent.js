import React, {useState, useContext} from 'react';

import {StyleSheet, Text, View, Platform} from 'react-native';

const OneTextComponent = props => {
  return <Text style={props.AdditionalStyle}>{props.TextValue} </Text>;
};

export default OneTextComponent;

const styles = StyleSheet.create({});
