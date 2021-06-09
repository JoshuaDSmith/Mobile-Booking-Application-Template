import React, {useState, useContext} from 'react';
import ButtonComponent from '../Button/index';
import {UserContext} from '../UseContext/index';
import UseInput from '../../Hooks/index';
import CustomStyle from '../../Styles';

import {StyleSheet, Text, View, TextInput} from 'react-native';

const InputComponent = props => {
  const [firstName, resetFirstName] = UseInput('');

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
    <View style={styles.SectionInputRow}>
      <Text style={styles.SectionTextHeading}>{props.InputText}</Text>
      <TextInput
        style={props.InputStyleNormal}
        placeholder={props.PlaceHolder}
        keyboardType={props.InputType}
        {...props.ArrayValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  SectionInputRow: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 6,
  },

  SectionTextHeading: {
    fontSize: CustomStyle.TextSize3,
    fontFamily: CustomStyle.FontStyle2,
    marginLeft: 1,
    marginRight: 2,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 6,
  },
});

export default InputComponent;
