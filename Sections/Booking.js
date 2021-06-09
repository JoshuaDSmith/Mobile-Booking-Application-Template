import React, {useState, useContext, useEffect, forceUpdate} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  ImageBackground,
} from 'react-native';
import ConfirmVenue from '../Components/BookingSystem/SelectVenue2';
import SelectTimeCheckout from '../Components/BookingSystem/SelectTimeForBooking';
import PersonalContactInformation from '../Components/CheckOutVenue/CustomerPersonalInformation';
import ButtonComponent from '../Components/Button';
import {createContext} from 'react';
import CustomStyle from '../Styles';

import ImageBackgrounds from '../Assets/Images/Background2.jpg';

export const UserContext = createContext('Start');

const SummaryPage = () => {
  // SET TOTAL DAYS VALUE USER SELECTED
  const [totalDays, setTotalDays] = useState('');

  // SET CONTEXT VALUES THROUGH TO COMPONENTS
  const [context, setContext] = useState([]);
  const [context2, setContext2] = useState([]);
  const [context3, setContext3] = useState([]);

  // SET TOTAL PRICE FOR USER
  const [summaryCost, setSummaryCost] = useState('');

  const ConfirmDate = () => {
    if (context2.length == 2) {
      let TimeZone1 = context2[0];
      let TimeZone2 = context2[1];

      let value = TimeZone2 - TimeZone1;

      var minutes = 1000 * 60;
      var hours = minutes * 60;
      var days = hours * 24;

      var TotalDays = Math.round(value / days);
      setTotalDays(TotalDays);
      test();

      // DISPLAY TIMESTAMP TO STRING FOR USER VISUAL

      var ts = new Date(context2[0]);
      console.log(ts.toDateString());
    }
  };

  const test = () => {
    // SET TOTAL PRICE FOR USER BY MULTIPLYING TOTAL DAYS BY CV
    let totalValue = context3 * totalDays;
    if (totalValue == 0) {
      setSummaryCost('Error: Select Venue and Times');
    } else {
      setSummaryCost(totalValue);
    }
  };
  return (
    <ScrollView>
      <ImageBackground source={ImageBackgrounds} style={styles.image}>
        {/* <View>
          <Text> context1: {context}</Text>
          <Text> context2:{context2}</Text>
          <Text> context3:{context3}</Text>
        </View> */}

        <UserContext.Provider
          value={{
            context,
            setContext,
            context2,
            setContext2,
            context3,
            setContext3,
          }}>
          <PersonalContactInformation />
          <ConfirmVenue />
          <SelectTimeCheckout ChosenTime={'Start Date'} />
          <SelectTimeCheckout ChosenTime={'End Date'} />

          <View style={styles.SectionContainerStyle}>
            <ButtonComponent
              Direct={ConfirmDate}
              ButtonText={'Confirm All Information'}
              AdditionalStyling={styles.ButtonStyle}
            />
            <Text>Start Date: {context2[0]}</Text>
            <Text>End Date: {context2[1]}</Text>
            <Text>Total Days: {totalDays ? totalDays + ' days' : ''}</Text>
            <Text>Total Cost: {summaryCost}</Text>
          </View>
        </UserContext.Provider>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  SectionHeight: {
    backgroundColor: '#fff',
    height: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  ButtonStyle: {
    fontSize: 60,
    backgroundColor: CustomStyle.MainColor1,
    width: '100%',
    paddingVertical: 8,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
  },
  SectionContainerStyle: {
    backgroundColor: CustomStyle.FormBG1,
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    opacity: 0.8,
  },
  SectionText: {
    color: 'black',
  },
  SectionRow: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 40,
    marginRight: 40,
    justifyContent: 'space-between',
    margin: 10,
  },
});

export default SummaryPage;
