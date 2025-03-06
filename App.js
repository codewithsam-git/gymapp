import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BookDetail from './src/screens/BookDetail';
import Tabs from './src/navigation/tabs';
import ViewMembers from './src/screens/ViewMembers';
import AddMember from './src/screens/AddMember';
import Login from './src/screens/Login';
import AddPackage from './src/screens/AddPackage';
import ViewPackages from './src/screens/ViewPackages';
import Profile from "./src/components/Profile";

import {
  StatusBar,
  useColorScheme,
  Text,
  View,
  TouchableOpacity,
  
} from 'react-native';
import { COLORS } from './src/constants/';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

// Importing Ionicons for drawer icons
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawerContent = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      {/* Scrollable drawer items */}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Logout button */}
      <TouchableOpacity
        onPress={() => {
          props.navigation.reset({
            index: 0,  
            routes: [{ name: 'login' }],
        });
        }}
        style={{
          flexDirection: 'row', // Align icon and text horizontally
          alignItems: 'center', // Center the items vertically
          padding: 16,
          backgroundColor: COLORS.primary,
          margin: 22,
          marginBottom: 30,
          borderRadius: 8,
        }}>
        {/* Ionicons logout icon */}
        <Ionicons
          name="log-out-outline"
          size={24}
          color="white"
          style={{ marginRight: 8 }}
        />

        {/* Text for the button */}
        <Text
          style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: COLORS.secondary,
          width: 300,
        },
        drawerLabelStyle: {
          fontSize: 18,
          fontWeight: 'bold', 
        },
        drawerActiveTintColor: COLORS.white,
        drawerActiveBackgroundColor: COLORS.primary,
        drawerInactiveTintColor: COLORS.white,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Tabs}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Add Member"
        component={AddMember}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-add" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="View Members"
        component={ViewMembers}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="people" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Add Packages"
        component={AddPackage}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="archive" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="View Packages"
        component={ViewPackages}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="folder" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={theme}>
      <StatusBar
        backgroundColor={COLORS.black}
        barStyle={scheme == 'Light' ? 'dark-content' : 'light-content'}
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>

        <Stack.Screen name="Home" component={DrawerNavigator} />
        <Stack.Screen name="addMember" component={AddMember} />
        <Stack.Screen name="viewMember" component={ViewMembers} />
        <Stack.Screen name="addPackage" component={AddPackage} />
        <Stack.Screen name="viewPackage" component={ViewPackages} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen
          name="BookDetail"
          component={BookDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
