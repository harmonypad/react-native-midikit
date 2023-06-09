import * as React from 'react';

import { Button, StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { multiply } from 'react-native-midikit';

import Pad from './Pad';
import InputPicker from './InputPicker';
import OutputPicker from './OutputPicker';
import Log from './Log';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  const PAD_COUNT = 12;
  const pads: number[] = Array.from(Array(PAD_COUNT), (_, i) => i);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Result: {result}</Text>
      <View style={styles.row}>
        <InputPicker />
        <OutputPicker />
      </View>
      <Button title="scan ports" />
      <View style={styles.instrument}>
        {pads.map((_, i: number) => {
          return <Pad key={i} id={i} />;
        })}
      </View>
      <Log />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  instrument: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    maxHeight: 240,
    width: '100%',
    backgroundColor: 'yellow',
  },
});
