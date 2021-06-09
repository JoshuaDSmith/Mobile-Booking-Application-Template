
/*Screens*/
import {HomepageSectio from './Sections/Homepage';
import NavigationSection from './Components/Header/Header';

import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

import {UserContext} from './Components/UseContext';

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const ContactUsStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomepageSection} />
  </HomeStack.Navigator>
);

const ContactUsScreen = () => (
  <ContactUs.Navigator>
    <ContactUs.Screen name="Home" component={ContactUs} />
  </ContactUs.Navigator>
);

const App: () => Node = () => {
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
        <AuthStack.Navigator>
          <AuthStack.Screen name="Home" component={HomepageSection} />
          <AuthStack.Screen name="ContactUs" component={ContactUsPage} />
        </AuthStack.Navigator>
      </UserContext.Provider>
    </NavigationContainer>
  );
};

// <SafeAreaView style={styles.red}>
//   <Header />
//   <HomepageSection />
// </SafeAreaView>;

const styles = StyleSheet.create({
  red: {
    backgroundColor: 'red',
  },
  sectionDisplayColumn: {
    flexDirection: 'column',
  },
  sectionDisplayRow: {
    flexDirection: 'row',
  },
  sectionRight: {
    marginLeft: 'auto',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionCenterDisplay: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  sectionDropMenuFontSize: {
    fontSize: 30,
  },
  sectionDropMenuButtonColors: {},
});

export default App;
