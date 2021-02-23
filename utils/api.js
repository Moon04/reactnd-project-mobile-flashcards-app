import AsyncStorage from "@react-native-async-storage/async-storage";

export function getDecks() {
  return AsyncStorage.getItem("decks");
}

export function getDeck(id) {
  return AsyncStorage.getItem("decks")
    .then((decks) => JSON.parse(decks))
    .then((decks) => decks[id]);
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(
    "decks",
    JSON.stringify({
      [title]: {
        title: title,
        questions: [],
      },
    })
  );
}

export function addCardToDeck(title, card) {
  return AsyncStorage.getItem("decks").then((results) => {
    const data = JSON.parse(results);
    data[title].questions = [...data[title].questions, card];
    AsyncStorage.setItem("decks", JSON.stringify(data));
  });
}
