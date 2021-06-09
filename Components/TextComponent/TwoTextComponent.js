import React, {useState, useContext} from 'react';

import {StyleSheet, Text, View, Platform} from 'react-native';

const TwoTextComponent = props => {
  return (
    <View style={styles.SectionViewStyle}>
      <View style={styles.SectionViewStyle1}>
        <Text style={styles.SectionText1}>{props.TitleValue} </Text>
      </View>
      <View style={styles.SectionViewStyle2}>
        <Text style={styles.SectionText2}>{props.SubjectValue} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SectionViewStyle1: {
    backgroundColor: 'teal',
    marginRight: 20,
  },
  SectionViewStyle2: {
    backgroundColor: 'grey',
    marginLeft: 'auto',
  },
  SectionViewStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 10,
    flexDirection: 'row',
    width: '80%',
    backgroundColor: 'orange',
  },
  SectionText1: {
    textAlign: 'right',
  },
  SectionText2: {
    textAlign: 'left',
  },
});
export default TwoTextComponent;
