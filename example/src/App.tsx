import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { encrypt } from 'react-native-evervault-sdk';

export default function App() {
  const [encObject, setEncObject] = React.useState<string | undefined>();
  const [encArray, setEncArray] = React.useState<string | undefined>();
  const testEncObject = { key: 'value', boolKey: true, number: 123};
  const testEncArray = ['encrypt', 'me', 'please'];

  React.useEffect(() => {
    encrypt(testEncObject).then(setEncObject);
    encrypt(testEncArray).then(setEncArray);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Encrypted Object: {JSON.stringify(encObject)}</Text>
      <Text>Encrypted Array: {encArray}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
