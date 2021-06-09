import React, {useState, useContext} from 'react';
import ButtonComponent from '../Button/index';
import {UserContext} from '../UseContext/index';
import CustomStyle from '../../Styles';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
  Input,
  TextInput,
} from 'react-native';

/*let colors = ['#EE664A'];*/

function BasicMapFunction(props) {
  return (
    <View>
      <View>
        {props.ContactInformation.map((item, index) => {
          return (
            <View style={styles.ContactCards} key={index}>
              <Text style={styles.SectionTextHeading}>{item.Directory}</Text>
              <Text style={styles.SectionTextParagraph}>Tel: {item.Tel}</Text>
              <Text style={styles.SectionTextParagraph}>
                Email: {item.Email}
              </Text>
              <Text style={styles.SectionTextParagraph}>
                Bio: {item.Description}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ContactCards: {
    borderRadius: 20,
    padding: 20,
    margin: 3,
    backgroundColor: CustomStyle.FormBG1,
    opacity: 0.8,
    marginLeft: 20,
    marginRight: 20,
  },
  SectionHeight: {
    backgroundColor: CustomStyle.BG,
    height: CustomStyle.SectionHeight,
  },
  SectionTextHeading: {
    fontSize: CustomStyle.TextSize1,
    fontFamily: CustomStyle.FontStyle4,
  },
  SectionTextParagraph: {
    fontSize: CustomStyle.TextSize,
    fontFamily: CustomStyle.FontStyle4,
    marginTop: 3,
  },
  SectionInputStyle: {
    marginLeft: 50,
    marginRight: 50,
    borderWidth: 2,
    borderColor: 'grey',
  },
});

export default BasicMapFunction;
