import React from 'react';
import {Federated} from '@callstack/repack/client';
import {SafeAreaView, Text} from 'react-native';

const App1 = React.lazy(() => Federated.importModule('MicroApp1', './App'));
const App2 = React.lazy(() => Federated.importModule('MicroApp2', './App'));

const App = () => {
  return (
    <SafeAreaView>
      <Text>Host App</Text>
      <React.Suspense fallback={<Text>Loading app1...</Text>}>
        <App1 />
      </React.Suspense>
      <React.Suspense fallback={<Text>Loading app2...</Text>}>
        <App2 />
      </React.Suspense>
    </SafeAreaView>
  );
};

export default App;
