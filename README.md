# UdaciCards Project

This is the final assessment project for the Udacity React Native course. 
It's a simple project created to practice most of the concepts explained in the React Native course.


# React Native Concepts Used In This App

* Component Styling
* State Management Using Redux
* React Native Navigation
* Notifications


## Instructions to use this repo:

To get started right away and check the application:

* install all project dependencies with `npm install`
* start the server with `npm start`


## Backend Server

I've used the asyncStorage as a backend server. The provided file [`api.js`](utils/api.js) contains the methods I've used to perform all needed operations on the backend:

* [`getDecks`](#getDecks)
* [`getDeck`](#getDeck)
* [`saveDeckTitle`](#saveDeckTitle)
* [`addCardToDeck`](#addCardToDeck)

## App Details

It is a mobile application (Android or iOS) that allows users to study collections of flashcards. 
The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.
