import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export default function Home() {
  const [participantes, setParticipantes] = useState<string[]>([])
  const [participantName, setParticipantname] = useState("")

  function handlerPartcipantAdd() {
    if(participantes.includes(participantName)){
      return Alert.alert("Participante existente.", "Já existe um participante com esse nome.")
    }

    setParticipantes(preventParticipant => [...preventParticipant, participantName])
    setParticipantname("")
  }

  function onRemove(name: string ) {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`,[
        {
          text: "Sim",
          onPress: () =>setParticipantes(prevestate => prevestate.filter(participant => participant != name)),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>React</Text>

      <Text style={styles.eventData}>
        Ondas se quebram , somente sol , o sol, se esconder
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantname}
          value={participantName}
          
        ></TextInput>

        <TouchableOpacity style={styles.button} onPress={handlerPartcipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participantes}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant key={item} name={item} onRemove={() => onRemove(item)}/>
        )}
        ListEmptyComponent={()=> (
          <Text>
            Se não chegou nenhum participante ainda, aguarde para adicionar o primeiro participante.
          </Text>
        )}
      />
    </View>
  );
}
