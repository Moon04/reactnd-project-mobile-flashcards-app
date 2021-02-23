import "react-native-gesture-handler";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";

import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import CustomStatusBar from "./components/CustomStatusBar";
import AddDeck from "./components/AddDeck";
import AddCard from "./components/AddCard";
import Deck from "./components/Deck";
import Decks from "./components/Decks";
import Quiz from "./components/Quiz";

import { setLocalNotification } from "./utils/helpers";
import { purple } from "./utils/colors";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Decks" component={Decks} />
      <Tab.Screen name="Add Deck" component={AddDeck} />
    </Tab.Navigator>
  );
}

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <CustomStatusBar backgroundColor={purple} barStyle="light-content" />
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Deck" component={Deck} />
              <Stack.Screen name="Add Card" component={AddCard} />
              <Stack.Screen name="Quiz" component={Quiz} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}
