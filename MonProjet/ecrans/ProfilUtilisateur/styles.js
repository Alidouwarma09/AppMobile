import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header:{
        alignItems:'center',
        flexDirection:'column'
    },
    leHeader:{
      width:'100%',
      backgroundColor:'#fff',
      height:47,
      flexDirection:'row',
      borderBottomWidth:0.17,
      borderBottomColor:'gray',
      position:'relative',
      top:'auto',
      alignItems:'center'
  },
  headerUserImage: {
    height: 40,
    width: 40,
    borderRadius: 40/2,
    marginLeft:30,
    marginRight:5,
  },
  footerIcons:{
    fontSize:30,
    marginLeft:30,
},
    userImage:{
        width:200,
        height:200,
        borderRadius:30,
    },
      detailItem: {
        flexDirection: 'row',
      },
      detailText: {
        marginLeft: 10,
        fontSize: 16,
      },
      
    headerFooter:{
        flexDirection:'row',
        backgroundColor:'white',
        elevation:10,
        width:'100%',
        justifyContent:'center',
        padding:5,
        borderWidth:0.3,
        borderRadius:10,
        marginTop:0.1,
    },
    headerFooterItems:{
        marginLeft:10,
        padding:10,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#6d7485e4',
    },
    headerFooterActionItems:{
        marginLeft:10,
        padding:10,
        borderRadius:5,
        borderWidth:0.2,
        borderColor:'red',
        fontWeight:'500',
        color:'red',
        marginTop:5
    },
    headerFooterAction:{
        flexDirection:'column',
        backgroundColor:'white',
        elevation:15,
        width:'100%',
        justifyContent:'center',
        padding:5,
        borderWidth:0.3,
        borderRadius:10,
        marginTop:15,
    },
    userDescription:{
        fontWeight:'200',
        textAlign:'center',
    },
    userName:{
        fontWeight:'700',
        textAlign:'center',
        fontSize:15,
    },
    headerUserInfo:{
        flexDirection:'column',
        backgroundColor:'white',
        elevation:10,
        width:'100%',
        justifyContent:'center',
        padding:5
    },
    modalBackground: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      fullScreenImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
      },
      closeButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        zIndex: 1,
      },
})
export default styles;