import React, {useState, useContext} from 'react';
import ButtonComponent from '../Button';
import {UserContext} from '../../Sections/Booking';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';
import {StyleSheet, TextInput, Text, View, Platform} from 'react-native';
import CustomStyle from '../../Styles';

/* SET MINIMUM SELECTABLE DATE FOR MODAL */
const TodayDate = new Date();

const SummaryPage = props => {
  const {context2, setContext2} = useContext(UserContext);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState('');
  const [summaryCost, setSummaryCost] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios' && 'android');
    setDate(currentDate);
    setDisplay(Moment(currentDate).format('YYYY-MM-DD'));
  };

  const ConfirmTimeSelection = () => {
    if (context2.length > 1) {
      setContext2([]);
      setDisplay([]);
    } else if (context2[1] < context2[0]) {
      setContext2([]);
      setDisplay([]);
    } else {
      display.split('');
      console.log(display);

      setContext2(context2 => [...context2, Date.parse(display)]);
    }
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showPicker = () => {
    showMode('Date');
  };

  return (
    <View style={styles.SectionContainerStyle}>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={false}
          display="default"
          onChange={onChange}
          minuteInterval={15}
          minimumDate={TodayDate}
        />
      )}

      <View style={styles.SectionHeadingCenter}>
        <ButtonComponent
          Direct={showPicker}
          AdditionalStyling={styles.ButtonStyle}
          ButtonText="Select Date"
        />
        <TextInput style={styles.SectionDateInput} value={display} />
      </View>
      <ButtonComponent
        AdditionalStyling={styles.ButtonStyle}
        Direct={ConfirmTimeSelection}
        ButtonText="Confirm"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  SectionHeight: {
    backgroundColor: '#fff',
    height: '95%',
  },
  ButtonStyle: {
    fontSize: 60,
    backgroundColor: CustomStyle.MainColor1,
    width: '30%',
    paddingVertical: 8,
    marginLeft: 'auto',
    borderRadius: 5,
  },
  SectionContainerStyle: {
    backgroundColor: CustomStyle.FormBG1,
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    opacity: 0.8,
  },
  SectionDateInput: {
    color: 'black',
    backgroundColor: 'white',
    width: '70%',
    borderTopRightRadius: 10,
  },
  marginComponent: {
    marginTop: 20,
  },
  SectionText: {
    color: 'white',
    backgroundColor: '#686868',
  },
  SectionDropdownStyle: {},
  SectionRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },

  SectionHeadingCenter: {
    marginTop: 9,
    marginBottom: CustomStyle.marginBottom,
    display: 'flex',
    flexDirection: 'row',
  },
  SectionHeadingSize: {
    fontSize: CustomStyle.TextSize,
  },
  SectionTextAlignCenter: {
    textAlign: 'center',
    margin: 10,
  },

  SectionButtonStyle: {
    width: CustomStyle.ButtonWidth,
  },
});

export default SummaryPage;
