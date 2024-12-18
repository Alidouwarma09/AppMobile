import { View, Text, ScrollView, Image, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons'; 
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Video from 'react-native-video';

const ProfilUtilisateur = ({route, navigation}) => {
  const {utilisateur} = route.params;
  const [isModalVisible, setModalVisible] = useState(false);

  const handleImagePress = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };
  const Goback = () => {
    navigation.goBack();
   };
  return (
    <View style={{flex:1}}>
        <View style={styles.leHeader}>
          <TouchableOpacity onPress={Goback}><AntDesignIcon style={styles.footerIcons} name='arrowleft'/></TouchableOpacity>
          <Text> Vous etes sur le profil de {utilisateur.nom} {utilisateur.prenom}</Text>
        </View>
      <ScrollView>
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={handleImagePress}>
            <Image style={styles.userImage} source={require('../../assets/coco.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerUserInfo}>
          <TouchableOpacity><Text style={styles.userName}>{utilisateur.nom} {utilisateur.prenom}✔️</Text></TouchableOpacity>
          <Text style={styles.userDescription}>Music, chanteur, Producteur 🎶</Text>
        </View>
        <View style={styles.userDetails}>
          <View style={styles.detailItem}>
            <Icon name="mail" size={20} color="#000" />
            <Text style={styles.detailText}>example@example.com</Text>
          </View>
          <View style={styles.detailItem}>
            <FontAwesomeIcon name="phone" size={20} color="#000" />
            <Text style={styles.detailText}>+123 456 789</Text>
          </View>
          <View style={styles.detailItem}>
            <AntDesignIcon name="enviromento" size={20} color="#000" />
            <Text style={styles.detailText}>Paris, France</Text>
          </View>
        </View>
        <View style={styles.headerFooter}>
          <TouchableOpacity><Text style={styles.headerFooterItems}>Media</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.headerFooterItems}>Publications</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.headerFooterItems}>Autres</Text></TouchableOpacity>
        </View>
        <View style={styles.headerFooterAction}>
          <TouchableOpacity><Text style={styles.headerFooterActionItems}>Bloquer <MaterialCommunityIcons name="delete" color='red' /> </Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.headerFooterActionItems}>Signaler <AntDesignIcon name="dislike1"/></Text></TouchableOpacity>
        </View>
      </View>
      
      </ScrollView>
      
      <Modal
        visible={isModalVisible}
        transparent={true}
        onRequestClose={handleModalClose}
      >
          <View style={styles.modalBackground}>
              <TouchableOpacity style={styles.closeButton} onPress={handleModalClose}>
                <Icon name="close" size={30} color="#fff" />
              </TouchableOpacity>
            
                <Image style={styles.fullScreenImage} source={require('../../assets/coco.png')} />
          </View>
    </Modal>

    </View>
  )
}

export default ProfilUtilisateur;