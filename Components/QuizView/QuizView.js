import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import QuizCard from './QuizCard';
import QuizSumarry from './QuizSummary';

class Quiz extends React.Component {
    state = {
        index: 0,
        correct: 0,
    }

    handleVote = (correct = false) => {
        if (correct === true) {
            this.setState((oldState) => ({
                index: oldState.index + 1,
                correct: oldState.correct + 1,

            }))
        }
        if (correct === false) {
            this.setState((oldState) => ({
                index: oldState.index + 1,
            }))
        }
    };

    restartQuiz = () => {
        this.setState({
            index: 0,
            correct: 0,
        })
    }

    render() {
        const quizDeck = this.props.quizDeck;
        const quizQuestions = quizDeck.questions;
        let currentQuestionIndex = this.state.index;
        let questionNum = currentQuestionIndex + 1;
        const totalQuestionsNum = quizQuestions.length;
        let correct = this.state.correct;
        let currentQuestion = quizQuestions[currentQuestionIndex];
        let renderCard = true;
        if (totalQuestionsNum <= currentQuestionIndex) {
            renderCard = false;
        };

        return (
            <View style={styles.container}>
                <Text style={styles.deckTitle}>{this.props.quizDeck.title}</Text>
                {renderCard ? (
                    <QuizCard
                        questionNum={questionNum}
                        totalQuestions={totalQuestionsNum}
                        question={currentQuestion}
                        onPress={this.handleVote} />
                ) : (
                        <QuizSumarry
                            styles={styles}
                            correct={correct}
                            totalQuestionsNum={totalQuestionsNum}
                            navigation={this.props.navigation}
                            quizDeckTitle={quizDeck.title}
                            restartQuiz={this.restartQuiz} />
                    )
                }
                <View style={styles.info}>
                    <Text>Rate your answer honestly!</Text>
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    deckTitle: {
        textAlign: "center",
        fontSize: 35,
        marginTop: 15
    },
    summary: {
        flex: 1,
        width: "80%",
        height: "100%",
        margin: "10%",
        backgroundColor: "#006cfa",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    summaryText: {
        fontSize: 20,
        textAlign: "center",
        margin: 5,
        color: "white"
    },
    btn: {
        width: "80%",
        backgroundColor: "#e6f1ff",
        borderWidth: 2,
        borderColor: "white",
        margin: 10,
        padding: 10,
        borderRadius: 8,
        alignItems: "center"
    },
    info: {
        height: "20%",
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    cardContainer: {
        width: "100%",
    },
});

const mapStateToProps = (state, ownProps) => {
    const { navigation } = ownProps;
    const deckName = navigation.getParam("deckName");
    const quizDeck = state.decks[deckName];

    return {
        quizDeck
    }
};

export default connect(mapStateToProps)(Quiz);