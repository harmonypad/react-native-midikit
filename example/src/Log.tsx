import React, { useState } from 'react';
import { Button, StyleSheet, ScrollView, View, Text } from 'react-native';

interface LogProps {}

interface Event {
  id: number;
  text: string;
}

const eventText = (): string => {
  return `${Math.random()} fake MIDI event`;
};

const Log: React.FC<LogProps> = () => {
  const [events, setEvents] = useState<Event[]>([]);

  const handlePress = () => {
    const newEvent: Event = {
      id: events.length + 1,
      text: eventText(),
    };
    setEvents([newEvent, ...events]);
  };

  return (
    <View style={styles.container}>
      <Button onPress={handlePress} title="Fetch Fake MIDI Event" />
      <ScrollView style={styles.scrollContainer}>
        {events.map((event) => {
          return (
            <Text key={event.id} style={styles.eventText}>
              {event.text}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  scrollContainer: {
    backgroundColor: '#f9f9f9',
    padding: 8,
  },
  eventText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default Log;
