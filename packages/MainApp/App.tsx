import 'react-native-gesture-handler';

import React from 'react';
import {Federated} from '@callstack/repack/client';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const App1 = React.lazy(() => Federated.importModule('micro1', './App'));
const App2 = React.lazy(() => Federated.importModule('micro2', './App'));

const App1Screen = () => (
  <React.Suspense fallback={<Text>Loading app1...</Text>}>
    <App1 />
  </React.Suspense>
);

const App2Screen = () => (
  <React.Suspense fallback={<Text>Loading app2...</Text>}>
    <App2 />
  </React.Suspense>
);

const Playground = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Button
        title="launch app1"
        onPress={() => navigation.navigate('App1Screen')}
      />
      <Button
        title="launch app2"
        onPress={() => navigation.navigate('App2Screen')}
      />
    </View>
  );
};

const Settings = ({navigation}) => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Tab.Screen name="Playground" component={Playground} />

      <Stack.Screen name="App1Screen" component={App1Screen} />
      <Stack.Screen name="App2Screen" component={App2Screen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Playground" component={Playground} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MyTab" component={MyTab} />
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="App1Screen" component={App1Screen} />
          <Stack.Screen name="App2Screen" component={App2Screen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
