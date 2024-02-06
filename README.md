# react-native-evervault-sdk

Evervault react native sdk

## Installation

```sh
npm install @evervault/evervault-react-native
```
or 
```sh
yarn add @evervault/evervault-react-native

## Setup iOS + React Native v0.60
```
cd ios
pod install
cd ..
```

## Usage
```typescript
// .tsx
import { init, encrypt } from '@evervault/evervault-react-native';

export default function Component() {
  const [encObject, setEncObject] = React.useState<string | undefined>();
  const testEncObject = { key: 'value', boolKey: true, number: 123};

  React.useEffect(() => {
    async function initEvervault() {
      try {
        await init('TEAM_UUID', 'APP_UUID');
      } catch (error) {
        console.error(error);
      }
    }
    initEvervault();
    encrypt(testEncObject).then(setEncObject);
  }, []);
}
```
