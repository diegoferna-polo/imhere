import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";

interface nameProps {
  name?: string;
}

export function Participant({ name }: nameProps) {
  function onRemove() {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`,[
        {
          text: "Sim",
          onPress: () => Alert.alert("Participante deletado!"),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.input}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
