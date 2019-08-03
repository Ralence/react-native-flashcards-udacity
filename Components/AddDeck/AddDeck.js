import React from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";

class AddCard extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Add new Deck</Text>
                <TextInput style={styles.Input} placeholder="Enter Deks name" />
                <TouchableOpacity onPress={() => alert('ADDED')} >
                    <Text>Submit</Text>
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
        fontSize: 30,
        textAlign: "center",
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
    }
}
)

export default AddCard;