import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Modal, Pressable } from 'react-native';
import styles from './styles';


import Icon from 'react-native-vector-icons/Ionicons'; 
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
}); 

const NotificationHandler = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const sendNotification = async () => {
      
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Bienvenue 👋",
          body: "Appuyez pour voir plus de détails.",
          data: { customData: "info supplémentaire si nécessaire" },
          icon: require('./notification-icon.png'),


        },
        trigger: null,
      });
    };

    sendNotification();

    const subscription = Notifications.addNotificationResponseReceivedListener(() => {
      setShowModal(true);
    });
  

    return () => subscription.remove();
  }, []);
  useEffect(() => {
    console.log('Permission de notification refusée');
    const requestPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission de notification refusée');
        return;
      }
  
      const token = await Notifications.getExpoPushTokenAsync({
        projectId: 'votre_project_id',  // Remplacez-le par votre propre projectId
      });
      console.log('Expo Push Token:', token.data);
      
      if (!token.data) {
        // Envoyer le token au backend
        const response = await fetch(`${process.env.REACT_APP_API_URL}Utilisateur/api/send_push_notification/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: token.data,
            title: 'Bienvenue 👋',
            body: 'Appuyez pour voir plus de détails.',
          }),
        });
  
        const responseData = await response.json();
        if (response.ok) {
          console.log('Notification envoyée avec succès');
        } else {
          console.log('Erreur lors de l\'envoi de la notification', responseData);
        }
      }
    };
  
    requestPermissions();
  }, []);
  
  
  
  const close = (() => {
    setShowModal(false);
  });

  return (
    <Modal visible={showModal} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.customView}>
         <View style={styles.header}>
         <Text style={styles.title}>Bienvenue sur notre App 🚀</Text>
         <Pressable style={styles.close} onPress={close}> 
          <AntDesignIcon name="closecircle" size={24} color="#333" />
         </Pressable>
         </View>
          <Image
            source={require('../../assets/img1.png')}
            style={styles.image}
          />
          <Text style={styles.description}>
            Profitez de nos fonctionnalité s personnalis ées dès ma intenant  !
          </Text>
        </View>
      </View>
    </Modal>
  );
};



export default NotificationHandler;
