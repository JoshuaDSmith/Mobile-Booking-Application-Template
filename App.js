import React, {useState} from 'react';

/*Screens*/
import HomepageSection from './Sections/Homepage';
import ContactUs from './Sections/ContactUs';
import Booking from './Sections/Booking';
import OurVenues from './Sections/OurVenues';
import NavigationSection from './Components/Header/Header';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

import {UserContext} from './Components/UseContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const ContactUsStack = createStackNavigator();

// const HomeStackScreen = () => (
//   <HomeStack.Navigator>
//     <HomeStack.Screen name="Home" component={HomepageSection} />
//   </HomeStack.Navigator>
// );

// const ContactUsScreen = () => (
//   <ContactUs.Navigator>
//     <ContactUs.Screen name="Home" component={ContactUs} />
//   </ContactUs.Navigator>
// );

const App = () => {
  /* USECONTEXT CHANGE STATE */
  const [context, setContext] = useState('Hello from COntext');

  /* NAVIGATION BAR TOGGLE COLUMN / ROW */
  const [clicked, setClicked] = useState('False');
  const onPress = () => {
    clicked == 'False' ? setClicked('True') : setClicked('False');
  };

  return (
    <NavigationContainer>
      <UserContext.Provider value={{context, setContext}}>
        <Tab.Navigator>
          <Tab.Screen
            name="Homepage"
            component={HomepageSection}
            options={{
              showLabel: false,
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="home" color={'red'} size={30} />
              ),
            }}
          />
          <Tab.Screen
            name="ContactUs"
            component={ContactUs}
            options={{
              showLabel: false,
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="account"
                  color={'red'}
                  size={30}
                />
              ),
            }}
          />
          <Tab.Screen
            name="OurVenues"
            component={OurVenues}
            options={{
              showLabel: false,
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="google-home"
                  color={'red'}
                  size={30}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Booking"
            component={Booking}
            options={{
              showLabel: false,
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="message-bulleted"
                  color={'red'}
                  size={30}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </UserContext.Provider>
    </NavigationContainer>
  );
};

export default App;
