import React, {useState} from 'react';
import {VenueComponent} from '../../CMS/index';
import CustomStyle from '../../Styles';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
  TouchableOpacityBase,
} from 'react-native';

function ImageSlideShow(props) {
  return (
    <View>
      <Text style={[styles.SectionTextAlignCenter, styles.SectionHeader]}>
        {props.Header}
      </Text>
      <TouchableOpacity onPress={props.Slide}>
        <Image style={styles.SectionImageDisplay} source={props.Image1} />
      </TouchableOpacity>

      <Text style={styles.SectionHeader}>{props.Title}</Text>
      <Text style={styles.SectionTextAlignCenter}>{props.Desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  SectionImageDisplay: {
    width: CustomStyle.MainimageWidth,
    height: CustomStyle.MainImageHeight,
  },

  SectionTextAlignCenter: {
    textAlign: 'center',
    fontSize: CustomStyle.TextSize,
    fontFamily: CustomStyle.FontStyle4,
  },
  SectionHeader: {
    fontFamily: CustomStyle.FontStyle4,
    fontSize: CustomStyle.TextSize2,
    textAlign: 'center',
    margin: CustomStyle.MarginVertical,
  },
});

export default ImageSlideShow;
