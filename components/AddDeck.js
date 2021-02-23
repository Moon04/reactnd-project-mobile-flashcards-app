import React, { useState } from "react";
import { connect } from "react-redux";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { addDeck } from "../actions/index";
import { saveDeckTitle } from "../utils/api";
import { styles } from "../utils/styles";
import { white } from "../utils/colors";

const AddDeck = ({ navigation, dispatch }) => {
  const [deckTitle, setDeckTitle] = useState("");

  const toHome = () => {
    navigation.goBack();
  };

  const handleCreateDeck = () => {
    const title = deckTitle;
    setDeckTitle("");
    dispatch(addDeck(title));
    saveDeckTitle(title);
    toHome();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is the title of your new deck?</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Deck Title"
        value={deckTitle}
        onChangeText={(deckTitle) => setDeckTitle(deckTitle)}
      />
      <TouchableOpacity
        style={[styles.button, styles.blackButton]}
        onPress={handleCreateDeck}
      >
        <Text style={[styles.buttonText, { color: white }]}>Create Deck</Text>
      </TouchableOpacity>
    </View>
  );
};

export default connect()(AddDeck);
