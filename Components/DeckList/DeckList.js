import React from 'react';
import { View, ScrollView, ActivityIndicator, AsyncStorage } from 'react-native';
import { connect } from 'react-redux'
import DeckListItem from '../DeckListItem/DeckListItem';
import { loadInitialData } from '../../store/actions/index';
import { loadInitialDataAction } from '../../store/actions/actions';
import { _setData, _loadData } from '../../utils/api';
import { INITIAL_STATE } from '../../store/initial_state';

class DeckList extends React.Component {
    state = {
        loading: true
    }

    componentDidMount() {
        _loadData().then(data => {
            this.props.dispatch(loadInitialDataAction(data));
            if (data === null) { _setData(INITIAL_STATE) }
            this.setState({
                loading: false
            });
        });
    }

    _retrieveData = async () => {
        try {
            const value = await _loadData() //AsyncStorage.getItem('STORED_DECKS');
            if (value !== null && value !== {}) {
                alert(value)
                this.props.dispatch(loadInitialDataAction(value))
            } else {
                _setData(this.props.decks)
            }
        } catch (error) {
            // Error retrieving data
        }
    };

    render() {
        const { decks } = this.props;
        const deckNames = Object.keys(decks);
        const deckList = deckNames.sort((a, b) => decks[b].timestamp - decks[a].timestamp).map(deck => {
            return (
                <DeckListItem key={decks[deck].title} deckName={decks[deck].title} numberOfCards={decks[deck].questions.length} navigation={this.props.navigation} />
            )
        })

        return (
            <ScrollView contentContainerStyle={{ width: "100%", alignItems: "center" }}>
                {this.state.loading && <ActivityIndicator size="large" color="#0000ff" />}
                {deckList}
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({
    decks: state.decks
});

export default connect(mapStateToProps)(DeckList);