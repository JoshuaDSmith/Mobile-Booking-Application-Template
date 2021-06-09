import React, {useState, useContext, useEffect} from 'react';
import ButtonComponent from '../Button';
import {UserContext} from '../../Sections/Booking';
import {VenueComponent} from '../../CMS/index';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';
import {Picker} from '@react-native-picker/picker';
import {StyleSheet, Text, TextInput, View, Platform} from 'react-native';
import CustomStyle from '../../Styles';

const SelectVenueComponent = () => {
  const {context3, setContext3} = useContext(UserContext);
  const [selectedValue, setSelectedValue] = useState('');

  const ConfirmVenue = () => {
    setContext3(selectedValue);
  };

  return (
    <View style={styles.SectionContainerStyle}>
      <View style={styles.SectionHeadingCenter}>
        <Text>Select the Venue:</Text>
      </View>
      <Picker
        style={styles.SectionDropdownStyle}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        {VenueComponent.map((item, index) => {
          return (
            <Picker.Item
              key={index}
              label={item.Title}
              value={item.Price}
              style={styles.PickerList}
            />
          );
        })}
      </Picker>

      <View style={styles.SectionDisplayRow}>
        <TextInput style={styles.SectionPriceConfirmation} editable={false}>
          {selectedValue ? '£' + selectedValue : ''}{' '}
        </TextInput>

        <ButtonComponent
          AdditionalStyling={styles.ButtonStyle}
          ButtonText="Confirm"
          Direct={ConfirmVenue}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SectionContainerStyle: {
    backgroundColor: CustomStyle.FormBG1,
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    opacity: 0.8,
  },
  SectionPriceConfirmation: {
    fontSize: CustomStyle.TextSize3,
    borderBottomColor: CustomStyle.FormBG,
    borderBottomWidth: 2,
    width: '70%',
    color: CustomStyle.TextColor3,
    textAlign: 'center',
  },
  ButtonStyle: {
    fontSize: 60,
    backgroundColor: CustomStyle.MainColor1,
    width: '30%',
    paddingVertical: 8,
    marginLeft: 'auto',
    borderRadius: 5,
  },
  PickerList: {
    height: 50,
    width: 150,
    color: CustomStyle.TextColor1,
    backgroundColor: CustomStyle.MainColor1,
    margin: 0,
    padding: 0,
  },
  SectionHeadingCenter: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 9,
    marginBottom: CustomStyle.marginBottom,
  },
  SectionDisplayRow: {
    flexDirection: 'row',
    marginTop: 40,
  },

  SectionButtonStyle: {
    width: CustomStyle.ButtonWidth,
  },
});

export default SelectVenueComponent;
