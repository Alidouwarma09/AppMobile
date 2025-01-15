import { View, Text, ScrollView , TouchableOpacity, Image, FlatList, Modal, Button, Animated, PanResponder} from 'react-native'
import React, { useState } from 'react'
import { Utilisateurs } from '../../fakeData/Utilisateur';
import styles from '../listeMessagerie/styles';
import Icon from 'react-native-vector-icons/Ionicons'; 
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MessageLIste = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [pan] = useState(new Animated.ValueXY());

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      if (gestureState.dy > 0) {
        Animated.event([null, { dy: pan.y }], { useNativeDriver: false })(e, gestureState);
      }
    },
    onPanResponderRelease: (e, gestureState) => {
      if (gestureState.dy > 300) {
        setModalVisible(false);
        pan.setValue({ x: 0, y: 0 });
      } else {
        Animated.spring(pan.y, {
          toValue: 0,
          useNativeDriver: false,
          tension: 80,
          friction: 10,
        }).start();
      }
    }
  });

  const handleImagePress = () => {
    setModalVisible(true);
  };
  return (
    <>
      
    <ScrollView  style={styles.container}>
    <FlatList
      style={styles.scrolleContainer}
      data={Utilisateurs}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={utilisateur => utilisateur.id.toString()}
      renderItem={({item: utilisateur}) =>{
        return(
          <TouchableOpacity  style={styles.enLigne}  onPress={() => navigation.navigate('Message', {utilisateur})}>
          <View style={styles.imageEndStatutIndicator}>
            <Image style={styles.userImage} source={require('../../assets/img1.png')} />
            <Text style={[styles.StatutIndicator, {backgroundColor: utilisateur.isOnline ? '#32b829b5': '#b82929b5'}]}>.</Text>
          </View>
          <Text style={{marginTop:10, marginLeft:10}}>{utilisateur.nom}</Text>
        </TouchableOpacity>
        );
      }} />

    <View style={{marginBottom:400, paddingLeft:10, paddingBottom:100, width:'100%', justifyContent:'center', alignItems:'center'}}>
    {Utilisateurs.map((utilisateur, index)=>{
        return(
            <View style={styles.scrolleItem} key={utilisateur.id}>
                <TouchableOpacity onPress={handleImagePress}>
                <Image style={styles.userImage} source={require('../../assets/img1.png')} onPress={() => setModalVisible(true)}/>
                </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('Message', {utilisateur})}>
               <View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <Text style={styles.userName}>{utilisateur.nom} {utilisateur.prenom}</Text>
                  <Text style={{marginLeft:110}}>2 min</Text>
                </View>
                <Text style={styles.lastMessage}>Salut comment tu vas ? je...</Text>
                </View>
               </TouchableOpacity>
            </View>
        )}
        )}
    </View>
    </ScrollView>

    <Modal
        visible={modalVisible}
        transparent={true}
      >
        <View style={{ flex: 1,  backgroundColor: '#000000b5', justifyContent: 'center', alignItems: 'center' , width:'100%'}}>
           <Animated.View style={{ transform: [{ translateY: pan.y }], width: '100%' }} >
               <View style={styles.modalHeader}>
                  <Text style={{color:'#b4b3b3e4'}}>wally darius</Text>
                  <AntDesignIcon name="copyright" size={10} color="#fff" />
              </View>
                <View {...panResponder.panHandlers} style={{ width:'100%', alignItems:'center'}}>
               <TouchableOpacity>
                   <Image source={require('../../assets/img1.png')} style={styles.fullScreenImage}  />
               </TouchableOpacity>
               </View>
              </Animated.View>
          </View>
    </Modal>
    </>

  )
}

export default MessageLIste;