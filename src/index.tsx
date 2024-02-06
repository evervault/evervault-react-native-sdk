import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-evervault-sdk' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const EvervaultSdk = NativeModules.EvervaultSdk
  ? NativeModules.EvervaultSdk
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function encrypt(data: any): Promise<string> {
  return EvervaultSdk.encrypt(data);
}
