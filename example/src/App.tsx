import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { encrypt } from 'react-native-evervault-sdk';

export default function App() {
  const [result, setResultS] = React.useState<string | undefined>();
  const [resultN, setResultN] = React.useState<string | undefined>();
  const toEncryptS = 'encrypt me!';
  const toEncryptN = 0;

  React.useEffect(() => {
    encrypt(toEncryptS).then(setResultS);
    encrypt(toEncryptN).then(setResultN);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Text>Result: {resultN}</Text>
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
