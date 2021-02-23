import React from "react";
import { connect } from "react-redux";
import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "../utils/styles";
import { black, white } from "../utils/colors";

const Deck = ({ deck, navigation }) => {
  return deck ? (
    <View style={styles.container}>
      <View style={{ textAlign: "center", margin: "15px" }}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.subTitle}>{deck.questions.length} cards</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Add Card", { id: deck.title })}
      >
        <View style={[styles.button, { backgroundColor: white }]}>
          <Text style={[styles.buttonText, { color: black }]}>Add Card</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Quiz", { id: deck.title })}
      >
        <View style={[styles.button, styles.blackButton]}>
          <Text style={[styles.buttonText, { color: white }]}>Start Quiz</Text>
        </View>
      </TouchableOpacity>
    </View>
  ) : null;
};

function mapStateToProps(decks, { route }) {
  const deckId = route.params.id;
  return {
    deck: { ...decks[deckId] },
  };
}

export default connect(mapStateToProps)(Deck);
