import React from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { connect } from 'react-redux';
import { addDeck } from '../../store/actions/index';
import { _submitDeckEntry, _loadData } from '../../utils/api';

class AddCard extends React.Component {
    state = {
        deck: ''
    }

    handleAddDeck = () => {
        const { dispatch } = this.props;
        const { navigation } = this.props;
        const deckName = this.state.deck;

        if (deckName.length < 3) {
            alert("Deck name needs to be more than two characters long!");
            return;
        }

        const deck = {
            timestamp: Date.now(),
            title: deckName,
            questions: []
        }
        this.setState({ deck: '' })
        dispatch(addDeck(deck)).then(() => navigation.navigate('DeckView', {
            deckName,
            numberOfCards: 0
        }))


    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Add new Deck</Text>
                <TextInput
                    style={styles.Input}
                    placeholder="Enter Deck name"
                    value={this.state.deck}
                    onChangeText={text => this.setState({ deck: text })}
                    maxLength={30}
                />
                <TouchableOpacity style={styles.btn} onPress={this.handleAddDeck} >
                    <Text style={{ fontSize: 25 }}>Create Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center"

    },
    title: {
        fontSize: 35,
        textAlign: "center",
        color: "#006cfa",
        fontWeight: "bold",
        margin: 20,
        marginTop: "15%"
    },
    Input: {
        width: "90%",
        minHeight: 30,
        margin: 20,
        padding: 5,
        textAlign: "center",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 6,
    },
    btn: {
        minHeight: 30,
        padding: 5,
        alignItems: 'center',
        width: "90%",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#006cfa"
    }
}
)

export default connect()(AddCard);