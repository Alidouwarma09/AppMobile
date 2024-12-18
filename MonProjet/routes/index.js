
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Message from '../ecrans/Message';
import Parametre from '../ecrans/parametre';
import BottomTabs from '../ecrans/BottomTabs';
import ProfilUtilisateur from '../ecrans/ProfilUtilisateur';
import Entrainement from '../ecrans/entrainement';
import Connexion from '../ecrans/connexion';
import Profil from '../ecrans/profil';
import Inscription from '../ecrans/Inscription';


const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Connexion" screenOptions={{headerShown: false, statusBarStyle:'dark'}}>
        <Stack.Screen name="Acceuil" component={BottomTabs} />
        <Stack.Screen name="Parametre" component={Parametre} />
        <Stack.Screen name="Entrainement" component={Entrainement} />
        <Stack.Screen name="Connexion" component={Connexion} />
        <Stack.Screen name="Inscription" component={Inscription} />
        <Stack.Screen name="ProfilUtilisateur" component={ProfilUtilisateur}/>
        <Stack.Screen name="Message" component={Message} options={{headerShown: false}} />
        <Stack.Screen name="Profil" component={Profil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;