import React from 'react';
import {Text, View} from 'react-native';
import {testFunction} from 'micro1/my_utils';

const App = () => {
  const string = testFunction();
  console.log('string', string);

  return (
    <View>
      <Text>MicroApp2</Text>
    </View>
  );
};

export default App;
