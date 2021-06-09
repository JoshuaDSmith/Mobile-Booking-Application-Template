import React, {useState} from 'react';
import {Component1, Component2, Directory, Component4} from '../CMS/index';
import HeaderImgText from '../Components/HeadingImgText';
import ImageSlideShow from '../Components/ImageSlideshow';
import ButtonComponent from '../Components/Button';
import FooterComponent from '../Components/Footer';
import {ImageBackground, Linking} from 'react-native';
import CustomStyle from '../Styles/index';
import Header from '../Components/Header/Header';
import TextComponent from '../Components/TextComponent/OneTextComponent';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ImageBackgrounds from '../Assets/Images/background4.jpg';

const HomepageSection = ({navigation}) => {
  let [ImageNo, setImageNo] = useState(0);

  const onPress = () => {
    if (ImageNo < Component4.length) {
      setImageNo(ImageNo + 1);
    }
    if (ImageNo == Component4.length) {
      setImageNo((ImageNo = 0));
    }
  };

  return (
    <ScrollView style={styles.SectionHeight}>
      <ImageBackground source={ImageBackgrounds} style={styles.image}>
        <Header
          ContactUs={() => navigation.navigate('ContactUs')}
          Homepage={() => navigation.navigate('Homepage')}
          OurVenues={() => navigation.navigate('OurVenues')}
          Booking={() => navigation.navigate('Booking')}
        />

        <ImageSlideShow
          Slide={onPress}
          Header={'Our Artists'}
          Title={Component4[ImageNo].Title}
          Image1={Component4[ImageNo].Image1}
          Desc={Component4[ImageNo].Desc}
        />
        {/* <Text
        style={{color: 'blue'}}
        onPress={() => Linking.openURL('/ContactUs')}>
        Google
      </Text> */}
        <HeaderImgText
          Title={Component1.Title}
          Image={Component1.Image}
          Desc={Component1.Desc}
        />
        <ButtonComponent
          ButtonText={Component1.ButtonText}
          Direct={() => navigation.navigate('OurVenues')}
          AdditionalStyling={styles.ButtonStyle}
        />
        <HeaderImgText
          Title={Component2.Title}
          Image={Component2.Image}
          Desc={Component2.Desc}
        />
        <ButtonComponent
          ButtonText={Component2.ButtonText}
          Direct={() => navigation.navigate('ContactUs')}
          AdditionalStyling={styles.ButtonStyle}
        />
        <FooterComponent />
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
  ArtistHeaderTag: {
    fontSize: 30,
    fontFamily: CustomStyle.FontStyle4,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 0,
    paddingVertical: 0,
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

export default HomepageSection;
