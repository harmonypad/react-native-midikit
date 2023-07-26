import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-midikit' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const Midikit = NativeModules.Midikit
  ? NativeModules.Midikit
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return Midikit.multiply(a, b);
}

export function send(data: Uint8Array | number[]): void {
  if (data.length < 3) {
    console.error('Incorrect length');
  }
  console.log("sending")
  Midikit.sendMidiMessage("id", 1,2,3);
}

// export class instead of methods to account for access state
export class ReactNativeMidiKitAccess {
  async connect(): Promise<void> {
    // todo: get MIDIManager reference
    // await Midikit.start()
    // Get endpoints
    const data = await Midikit.start()
    const inputs = [];
    const outputs = [];
    if (!data) {
      // no endpoints available
      return null;
    }
    return data
    // todo: parse inputs and outputs
    // todo: connect to emitter
    // return some result of connect process (i.e. endpoints)
  }
}