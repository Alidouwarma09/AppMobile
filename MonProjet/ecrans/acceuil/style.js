import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff',
      width:'100%',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    scrolle:{
      backgroundColor: 'red',
      alignContent: 'center',
    },
    scroller:{
      display:'flex',
      flexDirection:'row',
      overflow:'scroll'
    },
    scrolleContainer:{
      marginTop: 70,
      height: 150,
      flexDirection: 'row',
      overflow: 'auto',
      with: 100,
    },
    scrolleItem: {
      marginLeft:5,
      height: 130,
      backgroundColor: '#cbcbcb',
      width:80,
      borderRadius: 20,
      alignItems: 'center',
    },
    button:{
      marginTop: 100,
      backgroundColor:'blue',
    },
    userName:{
      fontWeight:"bold",
      marginLeft:10,
    },
    pubHeure:{
      fontSize:10,
      marginLeft:10,
    },
    publicationFooter:{

    },
    pubText:{
      padding:10,
    },
    pubActions:{
      flexDirection:'row',
      alignItems:'stretch',
      justifyContent:'space-between',
      width:'100%',
      marginBottom:9,
      margin:1,
    },
    pubActionsItems:{
      borderRadius:20,
      width:90,
      alignItems:'center',
      justifyContent:'center',

    },
    pubActionsItemsLabelle:{
      fontWeight:'600',
    },
    pubActionsItemsValue:{
      fontSize:10,
    },
    publicationContainer:{
      width:'100%',
      borderTopWidth:4,
      borderTopColor:'gray',
    },
    fullScreenImage:{
      width:'80%',
      height:'80%',
    },
    iconsExempleContainer:{
      width:'100%',
      height:40,
      marginBottom:10,
    },
    iconsExempleContainerItems:{
      fontSize:30,
      marginLeft:5
    },
    modalCommentContainer:{
      backgroundColor:'#1010107e',
      flex:1,
      width:'100%',
    },
headerUserImage: {
  height: 40,
  width: 40,
  borderRadius: 40/2,
  marginLeft:30,
  marginRight:5,
},

inputContainer:{
  padding:20,
  backgroundColor: 'white',
  alignItems:'center',
  borderTopWidth:0.3,
  borderTopColor:'gray',
  position:'relative',
  bottom:'auto',
},
inputContainer2:{
  backgroundColor: 'white',
  flexDirection:'row',
  alignItems:'center',
},
messageInputContainer:{
  padding:6,
  borderRadius:20,
  backgroundColor:'#dedbdbe4',
  flexDirection:'row',
  alignItems:'center',
  marginRight:5,
  width:'80%',
},
messageInput:{
  width:'80%',
  maxHeight:100,
},
send:{
  color: '#f15ad8',
  fontSize:30,
},
smile:{
  fontSize:30,
  marginRight:5,
},
    commentContainer:{
      backgroundColor:'#fff',
      width:'100%',
      maxHeight:650,
      position:'absolute',
      bottom:0,
      alignItems:'center',
      borderTopEndRadius:20,
      borderTopStartRadius:20,
    },
    publicationHeader:{
      flexDirection:'row',
      alignItems:'center',
      padding:10,
      borderBottomWidth:0.2,
    },
    pubUserImage:{
      height: 50,
      width: 50,
      borderRadius: 50/2,
    },
    pubImage:{
      width: 'auto',
    },
    userImage: {
      height: 100,
      width: 70,
      borderRadius: 10,
    },
    commentItems:{
      flexDirection:'row',
      alignItems:'center',
      marginTop:10,
      width:'auto',
    },
    date:{
      marginLeft:50,
      fontWeight:'200',
      fontSize:13,
    },
    auteur:{
      marginLeft:20,
      fontWeight:'900',
      fontSize:13,
      color:'skyblue',
    },
    comment:{
      fontWeight:'300',
      marginLeft:5,
      backgroundColor:'#eeebebe4',
      borderRadius:20,
      padding:5,
    },
  });

  export default styles;