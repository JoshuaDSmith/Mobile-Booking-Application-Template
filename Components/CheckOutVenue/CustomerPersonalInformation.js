import React, {useState, useContext} from 'react';
import ButtonComponent from '../Button/index';
import {UserContext} from '../../Sections/Booking';
import UseInput from '../../Hooks';
import CustomStyle from '../../Styles';
import InputComponent from '../InputComponent/InputComponent1';
import {CheckoutSystemValues} from '../../CMS';
import TextHeader from '../TextComponent/TextHeader';

import {StyleSheet, ScrollView, Text, View, TextInput} from 'react-native';

function InputComponentFunction() {
  let [Value1, bindValue1, resetValue1, commitValue1, savedValue1] = UseInput(
    '',
  );

  let [Value2, bindValue2, resetValue2, commitValue2, savedValue2] = UseInput(
    '',
  );

  let [Value3, bindValue3, resetValue3] = UseInput('');

  let [Value4, bindValue4, resetValue4, commitValue4, savedValue4] = UseInput(
    '',
  );

  let [Value5, bindValue5, resetValue5, commitValue5, savedValue5] = UseInput(
    '',
  );
  let [Value6, bindValue6, resetValue6, commitValue6, savedValue6] = UseInput(
    '',
  );
  const {context, setContext} = useContext(UserContext);
  const [emailStyle, setEmailStyle] = useState(true);
  const [FNameStyle, setFNameStyle] = useState(true);
  const [LNameStyle, setLNameStyle] = useState(true);
  const [telephone, setTelephoneStyle] = useState(true);
  const [Address, setAddressStyle] = useState(true);
  const [PostCode, setPostCodeStyle] = useState(true);

  const onPress = () => {
    checkFirstLastNameValidation();
    checkEmailValidation();
    checkPhoneNumberValidation();
    let Arr_Data = [Value1, Value2, Value3, Value4, Value5, Value6];

    setContext(Arr_Data);
  };

  const checkFirstLastNameValidation = () => {
    let RegExpression = /([-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]|[0-9]|@|""|none)/g;
    if (Value1 == '') {
      resetValue1(), setFNameStyle(false);
    } else {
      Value1.match(RegExpression)
        ? ((Value1 = 'none'), resetValue1(), setFNameStyle(false))
        : setFNameStyle(true);
    }
    if (Value2 == '') {
      resetValue2(), setLNameStyle(false);
    } else {
      Value2.match(RegExpression)
        ? ((Value2 = null), resetValue2(), setLNameStyle(false))
        : setLNameStyle(true);
    }
  };

  const checkEmailValidation = () => {
    let RegExpression = /(-|\w{0,6}).\w{0,}@\w{0,4}.\w{0,}.\w{0,}.?\w{0,3}/g;
    Value4.match(RegExpression)
      ? (setEmailStyle(true), console.log('match'))
      : ((Value4 = null), resetValue4(), setEmailStyle(false));
  };

  const checkPhoneNumberValidation = () => {
    console.log(Value3);
    Value3.replace(Value3, '');
    if (isNaN(Value3)) {
      Value3 = null;
      resetValue3();
    } else {
      if (Value3.length > 12 || Value3.length < 11) {
        resetValue3();
        setTelephoneStyle(false);
      } else {
        let RegExpression = /(44|0)\d{1,10}/g;
        Value3.match(RegExpression)
          ? (setTelephoneStyle(true), console.log('match'))
          : ((Value3 = null), resetValue4(), setTelephoneStyle(false));
      }
    }
  };
  return (
    <ScrollView style={styles.InputComponentCards}>
      <TextHeader style={styles.TextHeading} TextValue={'Confirm Booking:'} />

      <InputComponent
        InputText={CheckoutSystemValues.FirstName}
        PlaceHolder={CheckoutSystemValues.FirstName}
        ArrayValue={bindValue1}
        InputType={'web-search'}
        InputStyleNormal={
          FNameStyle ? styles.InputCorrect : styles.InputIncorrect
        }
      />
      <InputComponent
        InputText={CheckoutSystemValues.LastName}
        PlaceHolder={CheckoutSystemValues.LastName}
        ArrayValue={bindValue2}
        InputStyleNormal={
          LNameStyle ? styles.InputCorrect : styles.InputIncorrect
        }
      />
      <InputComponent
        InputText={CheckoutSystemValues.Telephone}
        PlaceHolder={CheckoutSystemValues.Telephone}
        ArrayValue={bindValue3}
        InputType={'number-pad'}
        InputStyleNormal={
          telephone ? styles.InputCorrect : styles.InputIncorrect
        }
      />
      <InputComponent
        InputText={CheckoutSystemValues.Email}
        PlaceHolder={CheckoutSystemValues.Email}
        ArrayValue={bindValue4}
        InputType={'email-address'}
        InputStyleNormal={
          emailStyle ? styles.InputCorrect : styles.InputIncorrect
        }
      />
      <InputComponent
        InputText={CheckoutSystemValues.Address}
        PlaceHolder={CheckoutSystemValues.Address}
        ArrayValue={bindValue5}
        InputStyleNormal={Address ? styles.InputCorrect : styles.InputIncorrect}
      />
      <InputComponent
        InputText={CheckoutSystemValues.PostCode}
        PlaceHolder={CheckoutSystemValues.PostCode}
        ArrayValue={bindValue6}
        InputStyleNormal={
          PostCode ? styles.InputCorrect : styles.InputIncorrect
        }
      />
      <View style={styles.marginComponent}>
        <Text>{context}</Text>
        <ButtonComponent
          AdditionalStyling={styles.ButtonStyle}
          Direct={onPress}
          ButtonText={'Submit'}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  TextHeading: {
    marginVertical: 20,
  },
  InputComponentCards: {
    backgroundColor: CustomStyle.FormBG1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    opacity: 0.8,
  },
  ButtonStyle: {
    fontSize: 60,
    backgroundColor: CustomStyle.MainColor1,
    width: 100,
    paddingVertical: 8,
    marginLeft: 'auto',
    borderRadius: 5,
  },
  marginComponent: {
    marginTop: 20,
  },
  InputCorrect: {
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: CustomStyle.BG,
    height: 40,
    width: 200,
    marginLeft: 'auto',
    borderRadius: 5,
  },
  InputIncorrect: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: CustomStyle.FormBG,
    height: 40,
    width: 200,
    marginLeft: 'auto',
  },
});

export default InputComponentFunction;
