import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Configuracoes() {
  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedView style={styles.textView}>
        <ThemedText type="title">Configuracoes</ThemedText>
      </ThemedView>
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
