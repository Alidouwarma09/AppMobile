
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Acceuil from '../acceuil';
import MessageLIste from '../listeMessagerie';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Market from '../Market';
import Storie from '../stories';
import Profil from '../profil'

const BottomTabs = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
        screenOptions={({route})=>({
            tabBarStyle:{ paddingBottom:10, height:55, fontWeight: '100',},
            headerShown:false,
            tabBarActiveTintColor:'#fa1085f0',
        })}
    initialRouteName="Acceuil"
    >
        <Tab.Screen 
        name='Acceuil'
        component={Acceuil}
        options={{
            tabBarLabel:'Acceuil',
            tabBarIcon:({color, size})=>(
                <MaterialCommunityIcons
                name="home" color={color} size={25}
                />
            )
        }}
        />
        <Tab.Screen
        name='MessageLIste'
        component={MessageLIste}
        options={{
            tabBarLabel:'Messages',
            tabBarIcon:({color})=>(
                <MaterialCommunityIcons
                name="chat" color={color} size={25}
                />
            )
        }}
        />
                <Tab.Screen
        name='Storie'
        component={Storie}
        options={{
            tabBarLabel:'Stories',
            tabBarIcon:({color})=>(
                <MaterialIcons
                name="web-stories" color={color} size={25}
                />
            )
        }}
        />
        <Tab.Screen
        name='Market'
        component={Market}
        options={{
            tabBarStyle:{ paddingBottom:10, height:55},
            tabBarLabel:'Market',
            tabBarIcon:({color})=>(
                <MaterialIcons
                name="shop" color={color} size={25}
                />
            )
        }}
        />
        <Tab.Screen
        name='Profil'
        component={Profil}
        options={{
            tabBarStyle:{ paddingBottom:10, height:55},
            tabBarLabel:'Profil',
            tabBarIcon:({color})=>(
                <FontAwesome
                name="user-circle-o" color={color} size={25}
                />
            )
        }}
        />
    </Tab.Navigator>
  );
};

export default BottomTabs;