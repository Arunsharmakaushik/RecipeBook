import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons from 'react-native-vector-icons/AntDesign'
import auth from '@react-native-firebase/auth';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import Images from "../assests/Images"
import Home from '../screens/home/Home'
import Category from '../screens/category/Category'
import Notification from '../screens/notification/Notification'
import User from '../screens/user/User'
import Action from '../screens/action/Action'
import Homeloginsignup from '../screens/homeloginsignup/Homeloginsignup'
import Signup from '../screens/signup/Signup'
import Login from '../screens/login/Login'
import SubCategory from '../screens/subCategory/SubCategory'
const Stack = createStackNavigator();
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "black",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};
const CategoryStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Category" component={Category} options={{ title: '', headerTransparent: true, }} />
      <Stack.Screen name="SubCategory" component={SubCategory} options={{ title: '', headerTransparent: true, headerLeft: null }} />
    </Stack.Navigator>
  );
};
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} options={{ title: '', headerTransparent: true, }} />
      {/* <Stack.Screen name="SubCategory" component={SubCategory} options={{ title: '', headerTransparent: true,   headerLeft: null }} /> */}
    </Stack.Navigator>
  );
};
const UserStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="User" component={User} options={{ title: '', headerTransparent: true, }} />
      {/* <Stack.Screen name="Homeloginsignup" component={Homeloginsignup} options={{ title: '', headerTransparent: true, }} /> */}

    </Stack.Navigator>
  );
};
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  // const [boolean, setboolean] = useState(true)
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{

        color: '',
        activeTintColor: '#64E986',
        inactiveTintColor: 'black',

      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: ' ',
          tabBarIcon: ({ activeTintColor, color }) =>
            <Icon name="home" color={color} size={36} />
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryStack}
        options={{
          tabBarLabel: ' ',
          tabBarIcon: ({ activeTintColor, color }) =>
            <Icons name="appstore1" color={color} size={30} />
        }}
      />
      <Tab.Screen
        name="Action"
        component={Action}
        options={{
          tabBarLabel: ' ',
          tabBarIcon: ({ tintColor }) =>
            <View style={{ marginBottom: 10, height: 70, width: 70, backgroundColor: 'white', borderRadius: 70, justifyContent: 'center', alignItems: 'center', borderWidth: 5, borderColor: 'white' }}>
              <View style={{ backgroundColor: '#64E986', height: "100%", width: "100%", borderRadius: 300, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 30 }}>+</Text>
              </View>
            </View>
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: ' ',
          tabBarIcon: ({ activeTintColor, color }) =>
            <Icon name="bell" color={color} size={36} />

        }}
      />
      <Tab.Screen
        name="User"
        component={UserStack}

        options={{
          tabBarLabel: ' ',
          tabBarIcon: ({ activeTintColor, color }) =>
            <Icon name="account" color={color} size={36} />

        }}
      />

    </Tab.Navigator>

  );
};

// const SignupLoginStack = () => {
//   return (
//     <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName={BottomTabNavigator}>
//       <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ title: '', headerTransparent: true, }} />

//       <Stack.Screen name="Homeloginsignup" component={Homeloginsignup} options={{ title: '', headerTransparent: true, }} />
//       <Stack.Screen name="Login" component={Login} options={{ title: '', headerTransparent: true, }} />
//       <Stack.Screen name="Signup" component={Signup} options={{ title: '', headerTransparent: true, }} />

//     </Stack.Navigator>

//   );
// };
export function Routes() {
  useEffect(() => {
    // console.log(auth())
    // setAuth(auth()._authResult)
  }, []);
  return (
    <NavigationContainer>
      {
        auth()._authResult ?
          <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName={BottomTabNavigator}>
            <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ title: '', headerTransparent: true, }} />

            <Stack.Screen name="Homeloginsignup" component={Homeloginsignup} options={{ title: '', headerTransparent: true, headerLeft: null }} />
            <Stack.Screen name="Login" component={Login} options={{ title: '', headerTransparent: true, headerLeft: null }} />
            <Stack.Screen name="Signup" component={Signup} options={{ title: '', headerTransparent: true, headerLeft: null }} />


          </Stack.Navigator>
          :
          <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName={Homeloginsignup}>

            <Stack.Screen name="Homeloginsignup" component={Homeloginsignup} options={{ title: '', headerTransparent: true, headerLeft: null }} />
            <Stack.Screen name="Login" component={Login} options={{ title: '', headerTransparent: true, headerLeft: null }} />
            <Stack.Screen name="Signup" component={Signup} options={{ title: '', headerTransparent: true, headerLeft: null }} />

            <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ title: '', headerTransparent: true, }} />

          </Stack.Navigator>
      }
    </NavigationContainer>
  );
}

