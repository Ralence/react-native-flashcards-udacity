import React from 'react'

import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import DeckList from '../Components/DeckList/DeckList';
import AddDeck from '../Components/AddDeck/AddDeck';
import AddCard from '../Components/AddQuestion/AddQuestion';
import DeckView from '../Components/DeckView/DeckView';

const TabNavigator = createBottomTabNavigator({
    Decks: DeckList,
    Add: AddDeck,
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent;
                let iconName;
                if (routeName === 'Decks') {
                    IconComponent = MaterialCommunityIcons;
                    iconName = `cards-outline`;
                } else if (routeName === 'Add') {
                    IconComponent = MaterialIcons;
                    iconName = `add-circle-outline`;
                }
                return <IconComponent name={iconName} size={30} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#006cfa',
            inactiveTintColor: 'gray',
        },
    }
);

const AppNav = createStackNavigator(
    {
        Home: {
            screen: TabNavigator,
            navigationOptions: {
                title: "UdacyCards Decks"
            }
        },
        DeckView: {
            screen: DeckView,
            navigationOptions: {
                title: "Deck Summary"
            }
        },
        AddCard: {
            screen: AddCard,
            navigationOptions: {
                title: "Add New Question"
            }
        }
    }
)

export const AppNavigation = createAppContainer(AppNav)