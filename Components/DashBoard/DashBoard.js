import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import DeckList from '../DeckList/DeckList';
import DeckView from '../DeckView/DeckView';

class Dashboard extends React.Component {
    render() {
        const StackNav = createAppContainer(
            createStackNavigator(
                {
                    DeckList: {
                        screen: DeckList,
                        navigationOptions: {
                            title: "UdacyCards Decks"
                        }
                    },
                    DeckView: {
                        screen: DeckView,
                        navigationOptions: {
                            title: "Back to Decks"
                        }
                    }
                }
            )
        )

        return (
            <StackNav />
        )
    }
};

export default Dashboard;