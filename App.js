import React from 'react';
import { View } from 'react-native';
import { AppNavigation } from './Navigation/config';
import FCApp from './Components/FlashcardApp/FlashcardApp'
import AddDeck from './Components/AddDeck/AddDeck';
import DeckList from './Components/DeckList/DeckList';
import DashBoard from './Components/DashBoard/DashBoard';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

class App extends React.Component {
  render() {

    return (

      <AppNavigation />


    )
  }
}




export default App;
