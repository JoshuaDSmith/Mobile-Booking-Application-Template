import React, {useState} from 'react';
import HeaderButtonComponent from '../NavigationBar';
import CustomStyle from '../../Styles';
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

const Header = (props, {navigation}) => {
  const [clicked, setClicked] = useState('False');

  const onPress = () => {
    clicked == 'True' ? setClicked('False') : setClicked('True');
  };

  return (
    <SafeAreaView style={[styles.sectionBG]}>
      {clicked == 'False' ? (
        <View style={[styles.sectionDisplayRow, styles.NavigationBar]}>
          <HeaderButtonComponent
            Direct={onPress}
            HeaderText={'|||'}
            StyleButton={styles.sectionTitle}
          />
        </View>
      ) : (
        <View style={[styles.sectionDisplayColumn, styles.NavigationBar]}>
          <HeaderButtonComponent
            StyleButton={styles.sectionTitle}
            Direct={onPress}
            HeaderText={'|||'}
          />
          <HeaderButtonComponent
            Direct={props.Homepage}
            HeaderText={'Homepage'}
            StyleButton={styles.sectionTitle}
          />
          <HeaderButtonComponent
            Direct={props.ContactUs}
            HeaderText={'Get in Touch'}
            StyleButton={styles.sectionTitle}
          />
          <HeaderButtonComponent
            Direct={props.OurVenues}
            HeaderText={'Our Venues'}
            StyleButton={styles.sectionTitle}
          />
          <HeaderButtonComponent
            Direct={props.Booking}
            HeaderText={'Make a Booking'}
            StyleButton={styles.sectionTitle}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  sectionBG: {
    display: 'flex',
    backgroundColor: CustomStyle.BG,
  },
  sectionMoveRight: {
    position: 'absolute',
  },
  sectionTextColor1: {
    color: '#ffffff',
    fontFamily: CustomStyle.FontStyle1,
  },
  NavigationBar: {
    backgroundColor: CustomStyle.MainColor1,
  },
  sectionDisplayColumn: {
    flexDirection: 'column',
    fontSize: CustomStyle.TextSize3,
    paddingLeft: CustomStyle.Padding1,
  },
  sectionDisplayRow: {
    flexDirection: 'row',
  },
  sectionTitle: {
    fontSize: CustomStyle.TextSize2,
    fontWeight: CustomStyle.FontWeight1,
    fontFamily: CustomStyle.FontStyle1,
    marginHorizontal: 5,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    marginVertical: 4,
  },
});

export default Header;
