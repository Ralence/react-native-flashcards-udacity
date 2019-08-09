import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import DeckView from '../DeckView/DeckView';

const DeckListItem = ({ deckName, numberOfCards, navigation }) => {
    return (
        <TouchableOpacity
            style={styles.deckCard}
            onPress={() => navigation.navigate('DeckView', {
                deckName,
                numberOfCards
            })}>
            <Text style={styles.deckName}>{deckName}</Text>
            <Text style={styles.cardsNum} >{numberOfCards} {numberOfCards === 1 ? 'card' : 'cards'}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    deckCard: {
        width: "80%",
        minHeight: 100,
        margin: 10,
        padding: 15,
        backgroundColor: "#006cfa",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    deckName: {
        fontSize: 30,
        color: "white",
        textAlign: "center"
    },
    cardsNum: {
        fontSize: 20,
        color: "white"
    }
});

export default DeckListItem;