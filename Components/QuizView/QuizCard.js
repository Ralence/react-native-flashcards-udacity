import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import FlipCard from 'react-native-flip-card';

class QuizCard extends React.Component {
    render() {
        const { question, questionNum, totalQuestions } = this.props;
        return (
            <FlipCard
                flipHorizontal={true}
                flipVertical={false}>
                {/* Face Side */}
                <View style={styles.face}>
                    <Text style={styles.questionHeading}>Question {questionNum}/{totalQuestions}</Text>
                    <View style={styles.mainTextArea}>
                        <Text style={[styles.questionText, { color: "white" }]} >{question.question}</Text>
                    </View>
                    <Text style={{ color: "white" }} >Tap to see the answer</Text>
                </View>
                {/* Back Side */}
                <View style={styles.back}>
                    <Text style={styles.answerHeading}>Answer</Text>
                    <View style={styles.mainTextArea}>
                        <Text style={styles.questionText}>{question.answer}</Text>
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={{ alignItems: "center" }} onPress={() => this.props.onPress(true)}>
                            <Ionicons name="md-checkmark-circle-outline" size={50} color="#006cfa" />
                            <Text style={{ color: "#006cfa" }}>CORRECT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.onPress(false)}>
                            <MaterialCommunityIcons name="close-box-outline" size={50} color="red" />
                            <Text style={{ color: "red" }}>WRONG</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </FlipCard>
        );
    };
};

const styles = StyleSheet.create({
    face: {
        flex: 1,
        width: "80%",
        height: "100%",
        margin: "10%",
        backgroundColor: "#006cfa",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    questionHeading: {
        margin: 20,
        fontSize: 30,
        color: "white",
        fontWeight: "bold"
    },
    questionText: {
        fontSize: 20,
        textAlign: "center",
        margin: 8
    },
    back: {
        flex: 1,
        width: "80%",
        height: "100%",
        margin: "10%",
        backgroundColor: "#e6f1ff",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    answerHeading: {
        margin: 20,
        fontSize: 30,
        color: "#006cfa",
        fontWeight: "bold"
    },
    mainTextArea: {
        flex: 1,
    },
    btnContainer: {
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 5
    }
})

export default QuizCard;