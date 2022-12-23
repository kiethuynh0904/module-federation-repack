import {ScriptManager, Script, Federated} from '@callstack/repack/client';
import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const LOCAL_HOST = Platform.select({default: 'localhost'});

const resolveURL = Federated.createURLResolver({
  containers: {
    MicroApp1: `http://${LOCAL_HOST}:9000/[name][ext]`,
    MicroApp2: `http://${LOCAL_HOST}:9001/[name][ext]`,
  },
});

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  let url;
  if (caller === 'MainApp') {
    url = Script.getDevServerURL(scriptId);
  } else {
    url = resolveURL(scriptId, caller);
  }

  if (!url) {
    return undefined;
  }

  return {
    url,
    cache: false, // For development
    query: {
      platform: Platform.OS,
    },
  };
});

AppRegistry.registerComponent(appName, () => App);
