import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import AddDeck from '../AddDeck/AddDeck';
import DashBoard from '../DashBoard/DashBoard';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

class FCApp extends React.Component {
    render() {
        const TabNavigator = createBottomTabNavigator({
            Decks: DashBoard,
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

        const AppTabNav = createAppContainer(TabNavigator)
        return (

            <AppTabNav />

        )
    }
}




export default FCApp;