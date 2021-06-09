import React, {useState} from 'react';
import {Component5} from '../../CMS/index';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
  Touchable,
} from 'react-native';

const FooterComponent = () => {
  return (
    <View style={styles.sectionBG}>
      <TouchableOpacity style={styles.sectionBorderBottom}>
        <Text style={styles.sectionTextColor1}>{Component5[1].Header1}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sectionBorderBottom}>
        <Text style={styles.sectionTextColor1}>{Component5[1].Header2}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sectionBorderBottom}>
        <Text style={styles.sectionTextColor1}>{Component5[1].Header3}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sectionBorderBottom}>
        <Text style={styles.sectionTextColor1}>{Component5[1].Header4}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sectionBorderBottom}>
        <Text style={styles.sectionTextColor1}>{Component5[0].Header1}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.sectionBorderBottom, styles.sectionBottomBorder]}>
        <Text style={styles.sectionTextColor1}>{Component5[1].Header1}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  blue: {
    backgroundColor: '#FFFFFF',
    height: 100,
  },
  sectionBG: {
    backgroundColor: 'red',
    marginTop: 10,
  },
  sectionTextColor1: {
    color: '#ffffff',
    fontFamily: 'Antonio-ExtraLight',
  },
  sectionBorderBottom: {
    borderBottomColor: '#D6D6D6',
    borderBottomWidth: 1,
    padding: 5,
  },
  sectionBottomBorder: {
    marginBottom: 10,
  },
  sectionDisplayColumn: {
    flexDirection: 'column',
  },
  sectionDisplayRow: {
    flexDirection: 'row',
  },
  sectionRight: {
    marginLeft: 'auto',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionCenterDisplay: {},
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  sectionDropMenuFontSize: {
    fontSize: 30,
  },
  sectionDropMenuButtonColors: {},
});
export default FooterComponent;
