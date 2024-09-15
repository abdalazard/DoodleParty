import { Image, StyleSheet, View } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
      <ThemedView style={styles.titleContainer}>
        <ThemedView style={styles.textView}>
          <ThemedText type="title">DoodleParty!</ThemedText>
        </ThemedView>
        <ThemedView>
          <ThemedText type="title">Welcome!</ThemedText>
        </ThemedView>       
        
        <HelloWave />
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    gap: 8,
    height: 1000
  },
  textView: {
    marginTop: 200
  },
});
