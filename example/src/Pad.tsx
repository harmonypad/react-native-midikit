import * as React from 'react';

import { StyleSheet, View } from 'react-native';
interface PadProps {
  id: number;
}
export default function Pad({ id }: PadProps) {
  const [active, setActive] = React.useState<boolean | undefined>(false);
  const onAttack = () => {
    console.log('send noteOn', id);
    setActive(true);
  };
  const onRelease = () => {
    console.log('send noteOff', id);
    setActive(false);
  };

  return (
    <View
      style={[styles.pad, active && styles.padActive]}
      onTouchStart={onAttack}
      onTouchEnd={onRelease}
    />
  );
}

const styles = StyleSheet.create({
  pad: {
    backgroundColor: '#ccc',
    flex: 1,
    borderColor: 'white',
    borderWidth: 2,
  },
  padActive: {
    backgroundColor: '#eee',
  },
});
