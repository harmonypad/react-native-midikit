import React from 'react';
import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface Item {
  id: string;
  name: string;
}

interface GenericPickerProps {
  items: Item[];
  selectedId: string;
  onValueChange: (itemValue: string) => void;
}

const GenericPicker: React.FC<GenericPickerProps> = ({
  items,
  selectedId,
  onValueChange,
}) => {
  return (
    <Picker
      style={styles.picker}
      selectedValue={selectedId}
      onValueChange={(itemValue) => onValueChange(itemValue as string)}
    >
      {items.map((item, i) => (
        <Picker.Item key={i} label={item.name} value={item.id} />
      ))}
    </Picker>
  );
};

export default GenericPicker;

const styles = StyleSheet.create({
  picker: {
    height: 200,
    width: 240,
  },
});
