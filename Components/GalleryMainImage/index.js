import React, {useState} from 'react';
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

function ImageSlideShowGallery(props) {
  const [ImageNumber, SetImageNumber] = useState(0);

  return (
    <View>
      <View styles={styles.SectionHeadingCenter}>
        <Image
          style={styles.SectionMainImageDisplay}
          source={props.VenueComponents[ImageNumber].Image1}
        />

        <View style={styles.SectionRow}>
          {props.VenueComponents.map((item, index) => {
            return (
              <TouchableOpacity
                index={index}
                key={index}
                onPress={() => {
                  SetImageNumber(index);
                }}>
                <Image
                  style={styles.SectionGalleryDisplay}
                  source={item.Image1}
                />
              </TouchableOpacity>
            );
          })}
        </View>

        <Text style={[styles.SectionTextCenter, styles.SectionHeaderStyle]}>
          {props.VenueComponents[ImageNumber].Title}
        </Text>

        <Text style={[styles.SectionTextCenter, styles.SectionTextStyle]}>
          {props.VenueComponents[ImageNumber].Desc}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  SectionRow: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
    margin: CustomStyle.Margin,
  },
  SectionMainImageDisplay: {
    width: CustomStyle.MainimageWidth,
    height: CustomStyle.MainImageHeight,
  },
  SectionImageDisplay: {
    width: CustomStyle.MainimageWidth,
    height: CustomStyle.MainImageHeight,
    margin: CustomStyle.Margin,
  },
  SectionGalleryDisplay: {
    width: 33,
    height: 30,
  },
  SectionHeadingCenter: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  SectionHeaderStyle: {
    fontSize: CustomStyle.TextSize3,
    fontFamily: CustomStyle.FontStyle2,
  },
  SectionTextCenter: {
    textAlign: 'center',
    margin: CustomStyle.Margin2,
  },
  SectionHeader: {
    fontSize: CustomStyle.TextSize2,
  },
  SectionTextStyle: {
    fontSize: CustomStyle.TextSize,
    fontFamily: CustomStyle.FontStyle4,
  },
});

export default ImageSlideShowGallery;
