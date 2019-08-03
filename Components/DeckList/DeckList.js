import React from 'react';
import { View } from 'react-native';
import DeckListItem from '../DeckListItem/DeckListItem';
import AppStatusBar from '../StatusBar/AppStatusBar';

class DeckList extends React.Component {
    render() {
        return (
            <View style={{ width: "100%", alignItems: "center" }}>
                <AppStatusBar backgroundColor="#1e90ff" barStyle="light-content" />
                <DeckListItem deckName={"React.js"} numberOfCards={12} navigation={this.props.navigation} />
                <DeckListItem deckName={"JavaScript"} numberOfCards={12} />
                <DeckListItem deckName={"Wonders of the world"} numberOfCards={9} />
            </View>
        )
    }
}

export default DeckList;