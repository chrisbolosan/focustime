import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { fontSizes, spacing } from '../../utils/sizes';
import { RoundedButton } from '../../components/RoundedButton';

//localstorage JSON.stringify(item)
const HistoryItem = ({ item, index }) => {
  return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>;
};
export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.title}>Things we've focused on</Text>
        {!!focusHistory.length && (
          <>
            <FlatList
              style={{
                style: 1,
              }}
              contentContainerStyle={{ flex: 1, alignItems: 'center' }}
              data={focusHistory}//key
              renderItem={HistoryItem}
            />

            <View style={styles.clearContainer}>
              <RoundedButton
                size={75}
                title="Clear"
                onPress={() => onClear()}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? 'red' : 'green',
    fontSize: fontSizes.md,
  }),
  title: {
    color: 'white',
    fontSize: fontSizes.lg,
  },
  clearContainer: {
    alignItems: 'center',
    padding: spacing.md,
  },
});
