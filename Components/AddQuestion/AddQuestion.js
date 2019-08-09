import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import { Header } from 'react-navigation';
import { addQuestion } from '../../store/actions/index';

class AddQuestion extends React.Component {
  state = {
    question: '',
    answer: '',
  };

  handleAddQuestion = deckName => {
    const { question, answer } = this.state;

    if (question.trim().length === 0 || answer.trim().length === 0) {
      return alert('Please fill in the form fields!');
    }

    const info = {
      question: question.trim(),
      answer: answer.trim(),
    };

    const { dispatch, currentDeck } = this.props;

    dispatch(addQuestion(currentDeck, info));

    this.setState(() => ({
      question: '',
      answer: '',
    }));

    this.props.navigation.navigate('DeckView', {
      deckName,
      numberOfCards: currentDeck.questions.length + 1,
    });
  };

  render() {
    const { navigation } = this.props;
    const deckName = navigation.getParam('deckName');

    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={Header.HEIGHT + 90}
        style={styles.container}
        behavior="height">
        <Text style={styles.title}>Add new Flashcard to "{deckName}" Deck</Text>
        <TextInput
          style={styles.Input}
          name="question"
          placeholder="Enter your Question"
          onChangeText={text => this.setState({ question: text })}
          value={this.state.question}
          maxLength={50}
        />
        <TextInput
          style={styles.Input}
          name="answer"
          placeholder="Enter the Answer"
          onChangeText={text => this.setState({ answer: text })}
          value={this.state.answer}
          maxLength={50}
        />
        <TouchableOpacity style={styles.btn} onPress={() => this.handleAddQuestion(deckName)}>
          <Text style={{ fontSize: 25 }}>Add Question</Text>
        </TouchableOpacity>
        <View style={{ flex: 1 }} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
    color: '#006cfa',
    fontWeight: 'bold',
    marginTop: '15%',
  },
  Input: {
    width: '90%',
    minHeight: 30,
    margin: 20,
    padding: 5,
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 6,
  },
  btn: {
    minHeight: 30,
    padding: 5,
    alignItems: 'center',
    width: '90%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#006cfa',
  },
});

const mapStateToProps = (state, ownProps) => {
  const deck = ownProps.navigation.getParam('deckName');
  const currentDeck = state.decks[deck];
  return {
    currentDeck,
  };
};

export default connect(mapStateToProps)(AddQuestion);
