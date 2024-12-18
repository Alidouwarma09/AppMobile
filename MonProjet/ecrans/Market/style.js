import { StyleSheet } from "react-native";
 const styles =StyleSheet.create({
    
inputContainer:{
    padding:20,
    backgroundColor: 'white',
    alignItems:'center',
    borderTopWidth:0.3,
    borderTopColor:'gray',
    position:'relative',
    bottom:'auto',
    justifyContent:'space-evenly',
    flexDirection:'row',
    elevation:10,
    borderRadius:10,
    width:'90%',
  },
  messageInputContainer:{
    padding:6,
    borderRadius:20,
    backgroundColor:'#e4e1e1b7',
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
    color: '#f15ad8',
    fontSize:30,
    marginRight:5,
  },
  produit:{
    flexDirection: 'column',
    marginRight:10,
    alignItems:'center',
  },
  imageEndStatutIndicator:{
  },
  userImage: {
    height: 100,
    width: 100,
    borderRadius: 20,
    marginBottom:10,
  },
  produitSpecialImage:{
    height: 300,
    width: 300,
    borderRadius: 20,
    marginBottom:10,
  },
  produitSpecial:{
    flexDirection: 'column',
    marginRight:10,
    alignItems:'center',
  },
  nouveaute:{
    marginLeft:20,
    marginTop:20,
    fontWeight:'bold',
    color:'#0700009a',
  },
  categories:{
    marginLeft:20,
    marginTop:20,
    fontWeight:'bold',
    color:'#0700009a',
  },
  pourcentage:{
    backgroundColor:'red',
    zIndex:1,
    position:'absolute',
    right:0,
    marginTop:10,
    marginRight:10,
    color:'#fff',
    borderRadius:10,
    padding:10,
    fontWeight:'bold'
  },
  etoile:{
    backgroundColor:'#41f9099a',
    zIndex:1,
    position:'absolute',
    left:0,
    marginTop:10,
    marginLeft:10,
    color:'#fff',
    borderRadius:10,
    padding:10,
  },
});

export default styles;