import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ScrollView, StyleSheet, TouchableOpacity, Text } from "react-native";

import { receiveDecks } from "../actions/index";
import { getDecks } from "../utils/api";
import { styles, decksStyles } from "../utils/styles";

const Decks = ({ decks, dispatch, navigation }) => {
  useEffect(() => {
    getDecks().then((decks) =>
      dispatch(receiveDecks({ ...JSON.parse(decks) }))
    );
  }, []);

  const displayDeck = (title) => {
    navigation.navigate("Deck", { id: title });
  };

  return (
    <ScrollView>
      {decks && Object.keys(decks).length > 0 ? (
        Object.keys(decks).map((deck) => (
          <TouchableOpacity
            key={decks[deck].title}
            style={decksStyles.deck}
            onPress={() => displayDeck(deck)}
          >
            <Text style={styles.title}>{decks[deck].title}</Text>
            <Text style={styles.subTitle}>
              {decks[deck].questions.length} cards
            </Text>
          </TouchableOpacity>
        ))
      ) : (
        <Text>You have no decks, add new one to view here!</Text>
      )}
    </ScrollView>
  );
};

function mapStateToProps(decks) {
  return {
    decks: { ...decks },
  };
}

export default connect(mapStateToProps)(Decks);
