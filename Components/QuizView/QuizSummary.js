import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { clearLocalNotification, setLocalNotification } from '../../utils/notifications';

class Summary extends React.Component {
    componentDidMount() {
        this.handleNotification()
    }

    handleNotification = async () => {
        await clearLocalNotification();
        setLocalNotification()
    }

    render() {
        const { styles, correct, totalQuestionsNum, navigation, quizDeckTitle, restartQuiz } = this.props;
        return (
            <View style={styles.summary}>
                <Text style={styles.summaryText}>Well done! Quiz finished!!!</Text>
                <Text style={styles.summaryText}>You scored {correct} out of {totalQuestionsNum}</Text>
                <TouchableOpacity style={styles.btn}
                    onPress={() => restartQuiz()}>
                    <Text style={{ color: "green" }}>Restart Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('DeckView', {
                        deckName: quizDeckTitle,
                        numberOfCards: totalQuestionsNum
                    })}>
                    <Text style={{ color: "brown" }}>Back to Deck</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Summary;