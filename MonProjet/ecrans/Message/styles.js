import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    header:{
        width:'100%',
        backgroundColor:'#fff',
        height:47,
        flexDirection:'row',
        borderBottomWidth:0.27,
        borderBottomColor:'gray',
        position:'relative',
        top:'auto',
        alignItems:'center'
    },
    footerIcons:{
        fontSize:30,
        marginLeft:30,
    },
    inputContainer:{
        padding:10,
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
      messageInput:{
        width:'80%',
        maxHeight:100,
        minHeight:40,
      },
      send:{
        color: '#fb1ed7',
        fontSize:30,
      },
    smile:{
        fontSize:30,
        marginRight:5,
        color: '#fb1ed7',
      },
      messageInputContainer:{
        borderRadius:20,
        backgroundColor:'#ededede4',
        flexDirection:'row',
        alignItems:'center',
        marginRight:5,
        width:'80%',
        justifyContent:'space-around',
      },
    messageItem:{
        maxWidth:'100%',
        borderRadius:10,
        marginLeft:10,
        marginRight:10,
        textAlign:'center',
    },
    messageItemContent:{
        maxWidth:'70%',
        borderRadius:10,
        padding:5,
        alignSelf:'flex-start',
    },
    userImage: {
        height: 40,
        width: 40,
        borderRadius: 40/2,
        marginLeft:10,
        marginRight:5,
      },
      headerUserImage: {
        height: 40,
        width: 40,
        borderRadius: 40/2,
        marginLeft:15,
        marginRight:5,
      },
    text:{
        color:'white',
        width: '80%',
    },
    messageDate:{
        fontSize:10,
        color: 'gray',
        marginBottom:5
    },
    messageHeure:{
        fontSize:10,
        color: '#00000091',
        marginBottom:5,
        fontWeight:'900'
    },
    scroviewMessage:{
    },
    optionss:{
        width: '100%',
        height: 200,
        bottom: 0,
        justifyContent: 'center',
        borderTopEndRadius:30,
        borderTopLeftRadius:30,
        position:'relative',
        borderTopWidth:0.3,
        borderTopColor:'gray',
    },
    optionssItem:{
        marginBottom:15,
        paddingLeft:19,
        fontSize:20,
        fontWeight: '450',
        fontStyle:'italic',
},
suggestion:{
    padding:5,
    flexDirection:'row',
},
suggestionItem:{
    backgroundColor:'#f1f0f0',
    width:70,
    borderRadius:70/2,
    textAlign:'center',
    marginLeft:4,
    color:'gray'
}
})
export default styles;