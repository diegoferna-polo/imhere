import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";

interface nameProps {
  name: string;
  onRemove: () => void
}

export function Participant({ name, onRemove }: nameProps) {
  
  return (
    <View style={styles.form}>
      <Text style={styles.input}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
