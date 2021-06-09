import React, {useState} from 'react';
import CustomStyle from '../../Styles';
import {StyleSheet, Text, View, Image} from 'react-native';

function HeadingImageText(props) {
  return (
    <View style={styles.SectionMargin}>
      <Text style={[styles.SectionHeadingCenter, styles.SectionHeadingSize]}>
        {props.Title}
      </Text>
      <Image style={styles.SectionImageDisplay} source={props.Image} />
      <Text style={styles.SectionTextAlignCenter}>{props.Desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  SectionImageDisplay: {
    width: CustomStyle.MainimageWidth,
    height: CustomStyle.MainImageHeight1,
    marginVertical: CustomStyle.MarginVertical1,
  },
  SectionHeadingCenter: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  SectionHeadingSize: {
    fontSize: CustomStyle.TextSize2,
    fontFamily: CustomStyle.FontStyle2,
  },
  SectionTextAlignCenter: {
    textAlign: 'center',
    fontFamily: CustomStyle.FontStyle4,
    fontSize: CustomStyle.TextSize,
  },
  SectionMargin: {
    marginVertical: CustomStyle.MarginVertical1,
  },
});
export default HeadingImageText;
