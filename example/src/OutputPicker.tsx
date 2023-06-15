import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Picker from './Picker';

export interface MidiOutput {
  name: string;
  id: string;
}

const MIDIOutputPicker: React.FC = () => {
  const midiOutputs = null;
  const [prefferedOutputId, setPrefferedOutputId] = useState<string>('0');

  const outputs = [
    ...(midiOutputs || []),
    {
      name: 'No Output',
      id: '0',
    },
    {
      name: 'Placeholder',
      id: '1',
    },
  ];

  const onPickerValueChange = (value: string) => {
    setPrefferedOutputId(value);
    console.log('current outputId', value);
  };

  return (
    <View>
      <Text>Midi Out</Text>
      <Picker
        items={outputs.map((output) => ({
          name: output.name,
          id: output.id,
        }))}
        selectedId={prefferedOutputId}
        onValueChange={onPickerValueChange}
      />
    </View>
  );
};

export default MIDIOutputPicker;
