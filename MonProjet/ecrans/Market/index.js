import { View, Text, TouchableOpacity, TextInput, ScrollView, Image, RefreshControl } from 'react-native'
import React from 'react'
import styles from './style';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons'; 
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Market = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() =>{
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <View style={{flex:1, backgroundColor:'#d4d0d6b7'}}>
        <View style={{alignItems:'center'}}>
        <View style={styles.inputContainer}>
          <TouchableOpacity >
             <FontAwesomeIcons style={styles.smile} name='search'/>
           </TouchableOpacity>
            <View style={styles.messageInputContainer}>
             <TextInput style={styles.messageInput} multiline placeholder='Vous cherchez  un article ?'/>
             </View>
             <MaterialIcons style={styles.send} name='keyboard-voice'/>
       </View>
        </View>
      <ScrollView 
      refreshControl={
        <RefreshControl
          progressBackgroundColor='white'
          colors={['pink']}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }>
<Text style={styles.categories}>Categories</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{backgroundColor:'#edededb7', maxHeight:160, marginTop:20, paddingLeft:10, paddingTop:10, elevation:10}}>
       <TouchableOpacity  style={styles.produit} >
          <View>
            <Image style={styles.userImage} source={require('../../assets/tv.jpg')} />
          </View>
          <Text style={{marginTop:10, marginLeft:10}}>Electronique</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.produit} >
          <View>
            <Image style={styles.userImage} source={require('../../assets/manette.jpg')} />
          </View>
          <Text style={{marginTop:10, marginLeft:10}}>Accesoire telephone</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.produit} >
          <View>
            <Image style={styles.userImage} source={require('../../assets/img2.jpg')} />
          </View>
          <Text style={{marginTop:10, marginLeft:10}}>Vetement homme</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.produit} >
          <View>
            <Image style={styles.userImage} source={require('../../assets/tv.jpg')} />
          </View>
          <Text style={{marginTop:10, marginLeft:10}}>Electronique</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.produit} >
          <View>
            <Image style={styles.userImage} source={require('../../assets/manette.jpg')} />
          </View>
          <Text style={{marginTop:10, marginLeft:10}}>Accesoire telephone</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.produit} >
          <View>
            <Image style={styles.userImage} source={require('../../assets/img2.jpg')} />
          </View>
          <Text style={{marginTop:10, marginLeft:10}}>Vetement homme</Text>
        </TouchableOpacity>

       </ScrollView>

       <Text style={styles.nouveaute}>Nouveautés</Text>
       
       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{backgroundColor:'#edededb7', maxHeight:360, marginTop:20, paddingLeft:10, paddingTop:10, elevation:10, paddingBottom:10, paddingRight:30}}>
       <TouchableOpacity  style={styles.produitSpecial} >
          <View>
            <Image style={styles.produitSpecialImage} source={require('../../assets/img2.jpg')} />
            <Text style={styles.pourcentage}>-30%</Text>
            <MaterialCommunityIcons style={styles.etoile} name='star-four-points' />
          </View>
          <Text style={{marginTop:10, marginLeft:10}}>Souris pc</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.produitSpecial} >
          <View>
            <Image style={styles.produitSpecialImage} source={require('../../assets/tv.jpg')} />
            <Text style={styles.pourcentage}>-30%</Text>
            <MaterialCommunityIcons style={styles.etoile} name='star-four-points' />
          </View>
          <Text style={{marginTop:10, marginLeft:10}}>Tv smart</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.produitSpecial} >
          <View>
            <Image style={styles.produitSpecialImage} source={require('../../assets/manette.jpg')} />
            <Text style={styles.pourcentage}>-30%</Text>
            <MaterialCommunityIcons style={styles.etoile} name='star-four-points' />
          </View>
          <Text style={{marginTop:10, marginLeft:10}}>Manette gamer</Text>
        </TouchableOpacity>
       </ScrollView>
       

      </ScrollView>
    </View>
  );
};

export default Market;