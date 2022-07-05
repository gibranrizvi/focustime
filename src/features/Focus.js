import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';
import { RoundedButton } from '../components/RoundedButton';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          activeUnderlineColor="#2a2f4c"
          style={styles.textInput}
          label="What would you like to focus on?"
          onChangeText={setSubject}
        />
        <RoundedButton
          style={styles.button}
          title="+"
          size={50}
          onPress={() => addSubject(subject)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    flexDirection: 'row',
    padding: spacing.lg,
    justifyContent: 'top',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  button: {},
});
