import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from 'react-redux'
import { MaterialIcons } from '@expo/vector-icons';
import { deleteDeck } from '../../store/actions/index';

class AddCard extends React.Component {

    handleDelete = (id) => {
        const { dispatch, navigation } = this.props;
        dispatch(deleteDeck(id));
        navigation.navigate("Home");
    }

    render() {
        const { navigation } = this.props;
        const deckName = navigation.getParam("deckName");
        const numberOfCards = navigation.getParam("numberOfCards");
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{deckName}</Text>
                <Text style={{ marginBottom: 20 }}>{numberOfCards} {numberOfCards === 1 ? "card" : "cards"}</Text>
                <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate("AddCard", { deckName })} >
                    <MaterialIcons name="add-circle-outline" size={50} color="#006cfa" />
                    <Text style={{ color: "#006cfa" }}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => numberOfCards > 0 ? this.props.navigation.navigate("QuizView", { deckName }) : alert('Please add cards to the deck!')} >
                    <MaterialIcons name="play-circle-outline" size={50} color="#006cfa" />
                    <Text style={{ color: "#006cfa" }}>Start Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => this.handleDelete(deckName)} >
                    <MaterialIcons name="delete-forever" size={50} color="red" />
                    <Text style={{ color: "red" }}>Delete Deck</Text>
                </TouchableOpacity>
            </View>
        )
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center"

    },
    title: {
        fontSize: 35,
        color: "#006cfa",
        fontWeight: "bold",
        textAlign: "center",
        margin: 20,
        marginBottom: 5,
        marginTop: "15%"
    },
    btn: {
        alignItems: "center",
        margin: 10,
        padding: 5,
        width: "50%",
        borderColor: "#f2f2f2",
        borderWidth: 2,
        borderRadius: 8
    }
}
)

export default connect()(AddCard);