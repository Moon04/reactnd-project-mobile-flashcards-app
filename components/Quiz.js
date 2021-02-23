import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { getDeck } from "../utils/api";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";
import { styles, quizStyles } from "../utils/styles";
import { white } from "../utils/colors";

const Quiz = ({ route, navigation }) => {
  const [deck, setDeck] = useState(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(null);
  const [toggleQuestionAnswer, setToggleQuestionAnswer] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    const title = route.params.id;

    getDeck(title).then((deckObj) => {
      setDeck({ ...deckObj });
      setCurrentCardIndex(0);
    });
  }, []);

  const submitAnswer = (questionScore) => {
    const currentIndex =
      currentCardIndex + 1 < deck.questions.length
        ? currentCardIndex + 1
        : null;
    setCurrentCardIndex(currentIndex);
    setToggleQuestionAnswer(false);
    const score = totalScore + questionScore;
    setTotalScore(score);

    if (currentIndex === null) {
      const scorePercentage = (score / deck.questions.length) * 100;
      alert(`Quiz Score: ${scorePercentage}%`);
      clearLocalNotification().then(setLocalNotification);
      navigation.navigate("Deck", { id: deck.title });
    }
  };

  return (
    <View style={styles.container}>
      {deck && deck.questions.length > 0 && currentCardIndex !== null ? (
        <>
          <Text style={styles.subTitle}>{`${currentCardIndex + 1}/${
            deck.questions.length
          }`}</Text>
          <View style={{ textAlign: "center" }}>
            <Text style={styles.title}>
              {toggleQuestionAnswer
                ? deck.questions[currentCardIndex].answer
                : deck.questions[currentCardIndex].question}
            </Text>
            <TouchableOpacity
              style={{ margin: "20px" }}
              onPress={() => setToggleQuestionAnswer(!toggleQuestionAnswer)}
            >
              <Text style={quizStyles.toggleButtonText}>
                {toggleQuestionAnswer ? "Question" : "Answer"}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[styles.button, quizStyles.correctButton]}
            onPress={() => submitAnswer(1)}
          >
            <Text style={[styles.buttonText, { color: white }]}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, quizStyles.incorrectButton]}
            onPress={() => submitAnswer(0)}
          >
            <Text style={[styles.buttonText, { color: white }]}>Incorrect</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text>
          You can't take a quiz cause you have no cards, add cards and back
          again!
        </Text>
      )}
    </View>
  );
};

export default Quiz;
