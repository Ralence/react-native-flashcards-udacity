import React from "react";
import {
    KeyboardAvoidingView,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from "react-native";

class AddQuestion extends React.Component {
    state = {
        question: '',
        answer: '',
    }

    handleInput = (e) => {
        let val = e.target.value;
        let name = e.target.name;

        this.setState(() => {
            return { [name]: val };
        })
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
                <Text style={styles.title}>Add new Flashcard to the Deck</Text>
                <TextInput
                    style={styles.Input}
                    name="question"
                    placeholder="Enter your Question"
                    onChange={(e) => this.handleInput(e)}
                    value={this.state.question}
                />
                <TextInput
                    style={styles.Input}
                    name="answer"
                    placeholder="Enter the Answer"
                    onChange={(e) => this.handleInput(e)}
                    value={this.state.answer} />
                <TouchableOpacity onPress={() => alert("added")} >
                    <Text>Add Question</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
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
})

export default AddQuestion;