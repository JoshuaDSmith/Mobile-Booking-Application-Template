import React, {useState, useContext, forceUpdate} from 'react';
import {ContactInformation} from '../CMS/index';
import ContactComponent from '../Components/BasicMapFunction/index';
import {UserContext} from '../Components/UseContext';
import InputComponent from '../Components/InputComponent';
import CustomStyle from '../Styles';
import ImageBackgrounds from '../Assets/Images/Background2.jpg';
import Header from '../Components/Header/Header';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const ContactUs = ({navigation}) => {
  const [value, setValue] = useState('');
  const {context, setContext} = useContext(UserContext);

  const update = () => {
    setContext(value);
  };
  if (value !== '') {
    update();
  }

  return (
    <ScrollView style={styles.SectionHeight}>
      <ImageBackground source={ImageBackgrounds} style={styles.image}>
        <Header
          ContactUs={() => navigation.navigate('ContactUs')}
          Homepage={() => navigation.navigate('Homepage')}
          OurVenues={() => navigation.navigate('OurVenues')}
          Booking={() => navigation.navigate('Booking')}
        />
        <View style={styles.SectionHeaderView}>
          <Text style={styles.SectionHeaderText}>Get in Touch</Text>
        </View>

        <Text>{value}</Text>
        <UserContext.Provider value={{value, setValue}}>
          <ContactComponent ContactInformation={ContactInformation} />

          <View style={styles.SectionMarginLeftRight}>
            <InputComponent />
          </View>
        </UserContext.Provider>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  SectionHeaderView: {
    backgroundColor: CustomStyle.MainColor1,
    width: '90%',
    height: '5%',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 3,
    marginTop: 3,
  },
  SectionMarginLeftRight: {
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  SectionHeaderText: {
    fontSize: CustomStyle.TextSize2,
    fontFamily: CustomStyle.FontStyle2,
    marginLeft: CustomStyle.MarginLeft,
    marginRight: CustomStyle.MarginRight,
  },
  SectionHeight: {
    backgroundColor: '#fff',
    height: '100%',
  },
});

export default ContactUs;
