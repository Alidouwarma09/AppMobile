import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container:{
        paddingTop:40,
        paddingBottom:1000,
        backgroundColor:'#fff'
    },
    enLigne:{
      flexDirection: 'column',
      marginRight:10,
    },
    imageEndStatutIndicator:{
      backgroundColor:'#a8a8a8c9',
      height: 55,
      width: 55,
      borderRadius:54/2,
      alignItems:'center',
      justifyContent:'center',
    },
    StatutIndicator:{
      height:10,
      width:10,
      borderRadius:10/2,
      marginTop:-19,
      marginLeft:50,
    },
    modalBackground: {
      zIndex:1,
    },
    fullScreenImage: {
      minHeight:400,
      minWidth:400,
    },
    modalHeader:{
      zIndex: 1,
      top: 40,
      width:'100%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      gap:10,
      marginLeft:100
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
    scrolleContainer:{
      marginTop: 10,
      height: 100,
      borderBottomColor:  'gray',
      borderBottomWidth: 0.4,
      paddingLeft:10,
      marginRight:10,
    },
    scrolleItem: {
      marginLeft:5,
      height: 100,
      width:'97%',
      alignItems: 'center',
      flexDirection:'row',
    },
    userImage: {
      height: 60,
      width: 60,
      borderRadius: 60/2,
      marginBottom:10,
    },
    userName:{
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 10,
    },
    lastMessage:{
        color: 'rgb(132, 132, 132)',
        marginRight:22,
        marginLeft:10
    },
    viewProfiInfo:{
      position:'relative',
      backgroundColor:'red',
      bottom:0
    },
    userImageDetails:{
      width:200,
      height:400,
      position:'relative',
    }
  });

  export default styles;