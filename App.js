import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Button from './Button';
import { State } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser'


SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const urls = ['https://www.artic.edu/', 'https://www.themagnificentmile.com/', 'https://www.willistower.com/', 'https://navypier.org/', 'https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html']
const art = require('./Images/art.png');
const mile = require('./Images/mile.png');
const pier = require('./Images/pier.png');
const water = require('./Images/water.png');
const willis = require('./Images/willis.png');

function Art() {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={art} />
        <Button info onPress={() => WebBrowser.openBrowserAsync(urls[0])} style={styles.button}>
          More Information
        </Button>
    </View>
  )
}

function Mile() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={mile} />
      <Button info onPress={() => WebBrowser.openBrowserAsync(urls[1])}  style={styles.button}>
        More Information
        </Button>
    </View>
  )
}

function Pier() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={pier} />
      <Button info onPress={() => WebBrowser.openBrowserAsync(urls[3])} style={styles.button}>
        More Information
        </Button>
    </View>
  )
}

function Water() {
  return (
    <View style={styles.container}> 
      <Image style={styles.image} source={water} />
      <Button info onPress={() => WebBrowser.openBrowserAsync(urls[4])} style={styles.button}>
      More Information
        </Button>
    </View>
  )
}

function Willis() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={willis} />
      <Button info onPress={() => WebBrowser.openBrowserAsync(urls[2])} style={styles.button}>
          More Information
        </Button>
    </View>
  )
}

const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Art Institute of Chicago" component={Art} />
        <Drawer.Screen name="Magnificent Mile" component={Mile} />
        <Drawer.Screen name="Navy Pier" component={Pier} />
        <Drawer.Screen name="Water Tower" component={Water} />
        <Drawer.Screen name="Willis Tower" component={Willis} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 360,
    width: 240,
  },
  button: {
    margin: 10,
  },
});
