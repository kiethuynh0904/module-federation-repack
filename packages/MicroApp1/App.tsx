import 'react-native-gesture-handler';

import React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

const One = ({navigation}) => {
  return (
    <View>
      <Text>This is tab one of App1</Text>
      <Button
        title="go to Three"
        onPress={() => navigation.navigate('Three')}
      />
    </View>
  );
};

const Two = () => {
  return (
    <View>
      <Text>This is tab two of App1</Text>
    </View>
  );
};

const Three = () => {
  return (
    <View>
      <Text>This is three stack</Text>
    </View>
  );
};

const Stack = createStackNavigator();

function OneStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="One" component={One} />
      <Stack.Screen name="Three" component={Three} />
    </Stack.Navigator>
  );
}

function MyTab() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="One" component={OneStack} />
      <Tab.Screen name="Two" component={Two} />
    </Tab.Navigator>
  );
}
const App = () => {
  return <MyTab />;
};

export default App;
