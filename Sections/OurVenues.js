import React, {useState} from 'react';
import {VenueComponent} from '../CMS/index';

import GalleryMainImage from '../Components/GalleryMainImage/index';
import FooterComponent from '../Components/Footer';
import Header from '../Components/Header/Header';
import {ScrollView, StyleSheet} from 'react-native';

const HomepageSection = ({navigation}) => {
  return (
    <ScrollView style={styles.SectionHeight}>
      <Header
        ContactUs={() => navigation.navigate('ContactUs')}
        Homepage={() => navigation.navigate('Homepage')}
        OurVenues={() => navigation.navigate('OurVenues')}
        Booking={() => navigation.navigate('Booking')}
      />
      <GalleryMainImage VenueComponents={VenueComponent} />
      <FooterComponent />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  SectionHeight: {
    backgroundColor: '#fff',
    height: '100%',
  },
});

export default HomepageSection;
