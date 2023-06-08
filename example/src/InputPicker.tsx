import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Picker from './Picker';

export interface MidiInput {
  name: string;
  id: string;
}

const MIDIInputPicker: React.FC = () => {
  const midiInputs = null;
  const [prefferedInputId, setPrefferedInputId] = useState<string>('0');

  // TODO: Fetch and set MIDI inputs
  // useEffect(() => {
  //   // Example:
  //   // const fetchedInputs: MidiInput[] = [...];
  //   setMidiInputs(fetchedInputs);
  // }, []);

  const inputs = [
    ...(midiInputs || []),
    {
      name: 'No Input',
      id: '0',
    },
    {
      name: 'Placeholder',
      id: '1',
    },
  ];

  const onPickerValueChange = (value: string) => {
    setPrefferedInputId(value);
    console.log('current inputId', value);
    // TODO: Connect to input with uniqueId
  };

  return (
    <View>
      <Text>Midi In</Text>
      <Picker
        items={inputs.map((input) => ({
          name: input.name,
          id: input.id,
        }))}
        selectedId={prefferedInputId}
        onValueChange={onPickerValueChange}
      />
    </View>
  );
};

export default MIDIInputPicker;
