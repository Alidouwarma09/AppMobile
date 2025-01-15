import React, { useEffect, useState } from 'react';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView, Alert , Modal, TextInput, Animated, PanResponder, RefreshControl, Pressable, ActivityIndicator  } from 'react-native';
import styles, { stylesDark } from './style';
import { Button } from 'react-native-paper';
import { Utilisateurs } from '../../fakeData/Utilisateur';
import Icon from 'react-native-vector-icons/Ionicons'; 
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Publications } from '../../fakeData/Publications';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import { messageItems } from '../../fakeData/lesMessages';
import { Commentaire } from '../../fakeData/Commentaire';
import { Asset } from 'expo-asset';
import moment from 'moment';
import 'moment/locale/fr';
import { useTheme } from '../../composants/ThemeContext';

export default function Acceuil({ navigation }) {
  const [commentModalVisible, setCommentModalVisible] = useState(false);
  const [iconsVisile, setIconsVisible] = useState(false);
  const [voirVisible, setVoirVisible] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [pan] = useState(new Animated.ValueXY());
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
    const { isDarkMode } = useTheme(); 

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      if (gestureState.dy > 0) {
        Animated.event([null, { dy: pan.y }], { useNativeDriver: false })(e, gestureState);
      }
    },
    onPanResponderRelease: (e, gestureState) => {
      if (gestureState.dy > 300) {
        setCommentModalVisible(false);
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
  useEffect(() => {
    moment.locale('fr');
    const getPublications = async () => { 
      console.log(process.env.REACT_APP_API_URL);
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}Utilisateur/api/liste_publications/`);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des publications');
        }
        const data = await response.json();
        setPublications(data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur : ', error);
        setLoading(false);
      }
    };

    getPublications();
  }, []);

  

  const afficherComment = () =>{
    if (commentModalVisible){
      setCommentModalVisible(false);
    }else{
      setCommentModalVisible(true);
    }
  };
  const afficherPubContent = () =>{
    if (voirVisible){
      setVoirVisible(false);
    }else{
      setVoirVisible(true);
    }
  };
  const afficherIcons = () =>{
    if (iconsVisile) {
      setIconsVisible(false);
    }else{
      setIconsVisible(true);
    }
  };
  const onRefresh = React.useCallback(async () => {
    console.log(process.env.REACT_APP_API_URL);
    setRefreshing(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}Utilisateur/api/liste_publications/`);
  
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des publications');
      }
  
      const data = await response.json();
      setPublications(data);
    } catch (error) {
      console.error('Erreur lors du rafraîchissement : ', error);
    } finally {
      setRefreshing(false); 
    }
  }, []);
  

  const downloadImage = async () => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status === 'granted') {
        const asset = Asset.fromModule(require('../../assets/img1.png'));
        await asset.downloadAsync();
        
        const imageUrl = asset.localUri;
        const fileUri = FileSystem.documentDirectory + 'coco.png';
        const downloadResult = await FileSystem.downloadAsync(imageUrl, fileUri);
        const mediaAsset = await MediaLibrary.createAssetAsync(downloadResult.uri);
        await MediaLibrary.createAlbumAsync('Download', mediaAsset, false);
  
        Alert.alert('Succès', 'Image enregistrée dans la galerie !');
      } else {
        Alert.alert('Erreur', 'Permission refusée pour accéder à la galerie.');
      }
    } catch (error) {
      Alert.alert('Erreur', 'Échec du téléchargement de l\'image.', error.message);
      console.error('Erreur lors du téléchargement de l\'image : ', error);
    }
  };
  return (
   <View style={{flex:1, width:'100%'}}>
     <ScrollView
        style={isDarkMode ? stylesDark.container: styles.container}
        refreshControl={
          <RefreshControl
            progressBackgroundColor='white'
            colors={['pink']}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
     <FlatList
     style={styles.scrolleContainer}
     data={Utilisateurs}
     horizontal={true}
     showsHorizontalScrollIndicator={false}
     keyExtractor={utilisateur => utilisateur.id.toString()}
     renderItem={({item:utilisateur}) =>{
      return(
        <TouchableOpacity  onPress={() => navigation.navigate('ProfilUtilisateur', {utilisateur})}>
        <View style={styles.scrolleItem} >
        <Text>{utilisateur.nom}</Text>
        <Image style={styles.userImage} source={require('../../assets/img1.png')} />
        </View>
       </TouchableOpacity>
      )
     }} />
     
     {loading ? (
          <ActivityIndicator size="large" color="blue" style={{ marginTop: 20 }} />
        ) : (
          publications.map((publication, index)=>{
            return(
              <View style={styles.publicationContainer} key={publication.id}>
              <View style={styles.publicationHeader}>
                <TouchableOpacity>
                <Image style={styles.pubUserImage} source={require('../../assets/img1.png')} />
                </TouchableOpacity>
                <Text style={styles.userName}>{publication.userName}</Text>
                <Text style={styles.pubHeure}>il y a {moment(publication.date_pub).fromNow()} <MaterialCommunityIcons name='hours-24'/></Text>
              </View>
              <Pressable >
              <Image style={styles.pubImage} source={require('../../assets/img1.png')}/>
              </Pressable>
              <View style={styles.publicationFooter}>
                { publication.contenu.length > 200 ?
                <>
                 {voirVisible ?
                  <>
                   <Text style={styles.pubText}>{ publication.contenu.length > 200 ? publication.contenu.slice(0, 200) : publication.contenu}</Text>
                   <TouchableOpacity onPress={afficherPubContent}><MaterialCommunityIcons size={30} name='fullscreen' style={{fontWeight:'bold', marginLeft:10}}/></TouchableOpacity>
                  </>
                 :
                 <>
                 <Text style={styles.pubText}>{ publication.contenu} </Text>
                 <TouchableOpacity onPress={afficherPubContent}><MaterialCommunityIcons size={30} name='fullscreen-exit' style={{fontWeight:'bold', marginLeft:10}}/></TouchableOpacity>
                </>
                 }
                </>
                :
                <Text style={styles.pubText}>{publication.contenu}</Text>
                }
                <View style={styles.pubActions}>
                  <TouchableOpacity style={styles.pubActionsItems}>
                  <AntDesignIcon size={20} color='red' name='heart'/>
                  <Text style={styles.pubActionsItemsLabelle}>j'aime</Text>
                  <Text style={styles.pubActionsItemsValue}> 1901,89K</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.pubActionsItems} onPress={afficherComment}>
                  <FontAwesomeIcon size={20} color='#cbcbcb' name='comment'/>
                  <Text style={styles.pubActionsItemsLabelle}>Commenter</Text>
                  <Text style={styles.pubActionsItemsValue}> 1901,89K</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={downloadImage} activeOpacity={false} style={styles.pubActionsItems}>
                  <Icon size={20} color='#cbcbcb' name='cloud-download'/>
                  <Text>999 telecharger</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.pubActionsItems}>
                  <FontAwesomeIcon size={20} color='#cbcbcb' name='share'/>
                  <Text style={styles.pubActionsItemsLabelle}>Partager</Text>
                  <Text style={styles.pubActionsItemsValue}> 1901,89K</Text>
                  </TouchableOpacity>
                </View>
              </View>
             </View>
            );
          })
        )}

    </ScrollView>
    <Modal
        visible={commentModalVisible}
        transparent={true}
      >
          <View style={styles.modalCommentContainer}>
            <Animated.View style={[styles.commentContainer, {transform: [{ translateY: pan.y }]}]} >
              <View {...panResponder.panHandlers} style={{ width:'100%', height:40, alignItems:'center'}}><TouchableOpacity><MaterialCommunityIcons size={30} color='gray' name='gesture-swipe-down' /></TouchableOpacity></View>
                <ScrollView style={{width:'100%'}}>
                    <View>
                    {Commentaire.map((commentaire, index) => {
                      return(
                        <View style={styles.commentItems} key={commentaire.id}>
                          <View style={{ width:'100%', padding:10}}>
                          <View style={{flexDirection:'row', width:'100%'}}>
                          <TouchableOpacity>
                            <Image style={styles.headerUserImage} source={require('../../assets/img1.png')}/>
                            </TouchableOpacity>
                              <Text style={styles.userName}>{commentaire.userName}</Text>
                              {commentaire.userName=="wally darius" ? <Text style={styles.auteur}>Auteur</Text> : <Text></Text>}
                              <Text style={styles.date}>{commentaire.date} h</Text>
                              </View>
                          <View>
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                            <View style={{width:'87%'}}>
                              <Text style={styles.comment}>{commentaire.content}</Text>
                            </View>
                            <TouchableOpacity>
                            <AntDesignIcon size={20} color='#f15ad8' name='heart'/><Text>100,13K</Text>
                            </TouchableOpacity>
                            </View>
                           <View  style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                           <TouchableOpacity>
                           <Text style={{color:'#6b4153e4', fontWeight:'500', marginRight:7}}>+10K afficher les reponses </Text>
                           </TouchableOpacity>
                           <TouchableOpacity style={{justifyContent:'center', alignItems:'center', marginLeft:5}}>
                            <FontAwesomeIcons size={20} name='comment-o'/>
                            <Text>Répondre</Text>
                            </TouchableOpacity>
                           </View>
                          </View>
                          </View>
                        </View>
                      );
                    })}
                    </View>
                </ScrollView>
                <View style={styles.inputContainer}>
                 {iconsVisile &&
                 <View style={styles.iconsExempleContainer}>
                 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                      <TouchableOpacity ><Text style={styles.iconsExempleContainerItems}>🤣</Text></TouchableOpacity>
                      <TouchableOpacity ><Text style={styles.iconsExempleContainerItems}>💓</Text></TouchableOpacity>
                      <TouchableOpacity ><Text style={styles.iconsExempleContainerItems}>😡</Text></TouchableOpacity>
                      <TouchableOpacity ><Text style={styles.iconsExempleContainerItems}>🤧</Text></TouchableOpacity>
                      <TouchableOpacity ><Text style={styles.iconsExempleContainerItems}>🤣</Text></TouchableOpacity>
                      <TouchableOpacity ><Text style={styles.iconsExempleContainerItems}>🤣</Text></TouchableOpacity>
                      <TouchableOpacity ><Text style={styles.iconsExempleContainerItems}>🤣</Text></TouchableOpacity>
                      <TouchableOpacity ><Text style={styles.iconsExempleContainerItems}>🤣</Text></TouchableOpacity>
                      <TouchableOpacity ><Text style={styles.iconsExempleContainerItems}>🤣</Text></TouchableOpacity>
                      <TouchableOpacity ><Text style={styles.iconsExempleContainerItems}>🤣</Text></TouchableOpacity>
                      <TouchableOpacity ><Text style={styles.iconsExempleContainerItems}>🤣</Text></TouchableOpacity>
                      <TouchableOpacity ><Text style={styles.iconsExempleContainerItems}>🤣</Text></TouchableOpacity>
                  </ScrollView>
                 </View> }
                  <View style={styles.inputContainer2}>
                  <TouchableOpacity onPress={afficherIcons}>
                  <FontAwesomeIcons style={styles.smile} name='smile-o'/>
                  </TouchableOpacity>
                  <View style={styles.messageInputContainer}>
                  <TextInput style={styles.messageInput} multiline placeholder='Ajouter un commentaire...'/>
                  <AntDesignIcon size={20} name='paperclip'/>
                  </View>
                  <Icon style={styles.send} name='send'/>
                  </View>
                  </View>
            </Animated.View>
          </View>
    </Modal>
   </View>
  );
}


