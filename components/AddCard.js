import React, { useState } from "react";
import { connect } from "react-redux";
import { View, TextInput, Text, TouchableOpacity } from "react-native";

import { addCard } from "../actions/index";
import { addCardToDeck } from "../utils/api";
import { styles } from "../utils/styles";
import { white } from "../utils/colors";

const AddCard = ({ route, navigation, dispatch }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const toDeck = (title) => {
    navigation.navigate("Deck", { id: title });
  };

  const handleSubmitCard = () => {
    const title = route.params.id;
    const card = {
      question,
      answer,
    };

    setQuestion("");
    setAnswer("");
    dispatch(addCard(title, { ...card }));
    addCardToDeck(title, { ...card });
    toDeck(title);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={question}
        placeholder="Description"
        onChangeText={(questionText) => setQuestion(questionText)}
      />
      <TextInput
        style={styles.textInput}
        value={answer}
        placeholder="Answer"
        onChangeText={(answerText) => setAnswer(answerText)}
      />
      <TouchableOpacity
        style={[styles.button, styles.blackButton]}
        onPress={handleSubmitCard}
      >
        <Text style={[styles.buttonText, { color: white }]}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default connect()(AddCard);
