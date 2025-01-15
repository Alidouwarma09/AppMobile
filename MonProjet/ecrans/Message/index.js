import { View, Text, ScrollView , TouchableOpacity, Image, TextInput, Animated, Pressable, PanResponder} from 'react-native'
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import Icons from '../../composants/icon';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { messageItems } from '../../fakeData/lesMessages';

const Message = ({ route, navigation, onSwipeRight, message }) => {
  const [iconVisible, setIconVisible] = useState(false);
  const {utilisateur} = route.params;
  const AfficherIcon = ()=>{
    if (iconVisible){
      setIconVisible(false);
    }else{
      setIconVisible(true);
    }
  };

  const Goback = () => {
   navigation.goBack();
  };
  return (
    <View style={styles.container}>
         <View style={styles.header}>
          <TouchableOpacity onPress={Goback}><AntDesignIcon style={styles.footerIcons} name='arrowleft'/></TouchableOpacity>
          <Pressable  onPress={() => navigation.navigate('ProfilUtilisateur', {utilisateur})}>
          <Image style={styles.headerUserImage} source={require('../../assets/img1.png')}/>
          </Pressable>
          <Text style={{fontWeight:'bold'}}>{utilisateur.nom} {utilisateur.prenom}</Text>
        </View>
        <ScrollView style={styles.scroviewMessage}>
          {messageItems.map((messageItems, index)=>{
            const pan = new Animated.Value(0);
            const panResponder = PanResponder.create({
              onMoveShouldSetPanResponder: () => true,
              onPanResponderMove: Animated.event(
                [null, { dx: pan }],
                { useNativeDriver: false }
              ),
              onPanResponderRelease: (e, gestureState) => {
                if (gestureState.dx > 300) {
                  pan.setValue(0);
                } else {
                  Animated.spring(pan, {
                    toValue: 0,
                    useNativeDriver: false,
                    tension: 80,
                    friction: 10,
                  }).start();
                }
              }
            });
            return(
              <View key={index}  style={[styles.messageItem, ]}>
                <View style={{alignItems:'center'}}>
                <Text style={styles.messageDate}>le {messageItems.dateEnvoi} juillet</Text>
                </View>
                <Animated.View {...panResponder.panHandlers} style={[styles.messageItemContent, messageItems.userId === 1 ? {alignSelf:'flex-end', backgroundColor:'#c92d8d93'}: {backgroundColor:'#dad8d8e4', transform: [{ translateX: pan }],},]}>
                <Text>{messageItems.messageItem}</Text>
                <View style={{alignItems:'center', flexDirection:'row', justifyContent:'flex-end', gap:10}}>
                <Text style={styles.messageHeure}> 5 h 30 </Text>
                { messageItems.userId === 1 &&
                <Ionicons name ='eye-sharp' color={messageItems.vue === true && '#f5c7cf'} size={20} />
                }
                </View>
                </Animated.View>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.inputContainer}>
                  <View style={styles.inputContainer2}>
                  <TouchableOpacity onPress={AfficherIcon}>
                  <FontAwesomeIcons style={styles.smile} name='smile-o'/>
                  </TouchableOpacity>
                  <View style={styles.messageInputContainer}>
                  <TextInput style={styles.messageInput} multiline placeholder='Ajouter un commentaire...'/>
                  <AntDesignIcon size={25} name='paperclip'/>
                  </View>
                  <Icon style={styles.send} name='send'/>
                  </View>
         </View>
      {iconVisible && <Icons/>}
    </View>
  );
};

export default Message;
