import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

class AddCard extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Deck Name</Text>
                <Text>no cards</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("AddCard")} >
                    <Text>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Added')} >
                    <Text>Start Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('Added')} >
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
        fontSize: 30,
        textAlign: "center",
        margin: 20,
        marginTop: "15%"
    },
}
)

export default AddCard;