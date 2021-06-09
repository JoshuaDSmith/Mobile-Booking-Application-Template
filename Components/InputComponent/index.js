import React, {useState, useContext} from 'react';
import ButtonComponent from '../Button/index';
import {UserContext} from '../UseContext/index';
import UseInput from '../../Hooks/index';
import CustomStyle from '../../Styles';

import {StyleSheet, Text, View, TextInput} from 'react-native';

function InputComponent() {
  const [
    firstName,
    bindFirstName,
    resetFirstName,
    commit,
    savedValue,
  ] = UseInput('');

  const {value, setValue} = useContext(UserContext);
  const [submitted, setSubmitted] = useState('');

  const onPress = e => {
    e.preventDefault();
    setValue(firstName);
    resetFirstName();
    setSubmitted('Submitted Successfully');

    setTimeout(() => {
      setSubmitted('');
    }, 3000);
  };

  return (
    <View style={styles.InputComponentCards}>
      <View style={styles.SectionView}>
        <Text style={styles.SectionTextHeading}>
          Alternatively, We Can Contact You
        </Text>
      </View>
      <View style={styles.SectionInputRow}>
        <TextInput
          style={styles.SectionInputStyle}
          placeholder="Enter Email Address"
          type="text"
          {...bindFirstName}
        />
        <ButtonComponent
          AdditionalStyling={styles.ButtonStyle}
          Direct={onPress}
          ButtonText={'Submit'}
        />
      </View>
      {submitted ? (
        <View style={styles.SectionMarginCenter}>
          <Text>{submitted}</Text>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  SectionView: {
    marginBottom: CustomStyle.marginBottom,
  },
  SectionMarginCenter: {
    marginLeft: CustomStyle.MarginLeft,
    marginRight: CustomStyle.MarginRight,
    marginTop: CustomStyle.MarginTop,
  },
  InputComponentCards: {
    backgroundColor: CustomStyle.FormBG1,
    borderRadius: 20,
    padding: 20,
    margin: 3,
  },
  SectionInputRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  SectionHeight: {
    backgroundColor: '#fff',
    height: '100%',
  },
  SectionTextHeading: {
    fontSize: CustomStyle.TextSize3,
    fontFamily: CustomStyle.FontStyle3,
    marginLeft: 30,
    marginRight: 30,
  },
  SectionInputStyle: {
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    borderBottomLeftRadius: 15,
    backgroundColor: CustomStyle.BG,
    height: 50,
    width: '70%',
  },
  ButtonStyle: {
    fontSize: 60,
    backgroundColor: CustomStyle.MainColor1,
    width: '30%',
    paddingVertical: 8,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});

export default InputComponent;
